import FiveDayForecast from '../FiveDayForecast/FiveDayForecast'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import React from 'react'
import WeatherToday from '../WeatherToday/WeatherToday'

import axios from 'axios'
import config from '../../../config'
import styles from './Main.pcss'

class Main extends React.Component {
  constructor () {
    super()

    this.state = {
      location: null,
      locationIsLoaded: false,
      weatherData: null,
      weatherDataIsLoaded: false,
      imageSrc: null,
      imageSrcIsLoaded: false,
      currentLocation: null,
      errors: []
    }
  }

  savedLocation () {
    return JSON.parse(window.sessionStorage.getItem('currentLocation'))
  }

  getLocation () {
    return new Promise((resolve, reject) => {
      if (this.savedLocation()) {
        resolve(this.savedLocation())
      } else {
        try {
          navigator.geolocation.getCurrentPosition(position => {
            const location = [
              position.coords.latitude,
              position.coords.longitude
            ]
            window.sessionStorage.setItem(
              'currentLocation',
              JSON.stringify(location)
            )
            resolve(location)
          })
        } catch (err) {
          reject(err)
        }
      }
    })
  }

  getWeatherData (coordinates) {
    const latitude = coordinates[0]
    const longitude = coordinates[1]
    const coordinateQuery = `lat=${latitude}&lon=${longitude}`
    const apiQuery = `${config.API_URL}/weather/json?${coordinateQuery}`

    return new Promise((resolve, reject) => {
      axios
        .get(apiQuery)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  getGooglePlaceImage (coordinates) {
    const latitude = coordinates[0]
    const longitude = coordinates[1]
    const coordinateQuery = `lat=${latitude}&lon=${longitude}`
    const apiQuery = `${config.API_URL}/location_data/json?${coordinateQuery}`

    return new Promise((resolve, reject) => {
      axios
        .get(apiQuery)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  nextFiveDaysData () {
    const weatherData = this.state.weatherData.data.daily.data
    const excludedIndices = [0, 6, 7, 8]
    return weatherData.filter((item, index) => !excludedIndices.includes(index))
  }

  componentDidMount () {
    this.getLocation()
      .then(res => {
        this.setState({ location: res, locationIsLoaded: true })

        this.getGooglePlaceImage(this.state.location)
          .then(res => {
            this.setState({ imageSrc: res.data.imageQuery })
            this.setState({ currentLocation: res.data.location })

            setTimeout(() => {
              this.setState({ imageSrcIsLoaded: true })
            }, 1000)
          })
          .catch(err => {
            this.setState({ errors: this.state.errors.concat(err) })
          })

        this.getWeatherData(this.state.location)
          .then(res => {
            this.setState({ weatherData: res, weatherDataIsLoaded: true })
          })
          .catch(err => {
            this.setState({ errors: this.state.errors.concat(err) })
          })
      })
      .catch(err => {
        this.setState({ errors: this.state.errors.concat(err) })
      })
  }

  render () {
    return (
      <div className={styles['page-body']}>
        <img src={this.state.imageSrc} className={styles['page-body__image']} />
        {this.state.weatherDataIsLoaded && (
          <WeatherToday
            weatherData={this.state.weatherData.data.currently}
            currentLocation={this.state.currentLocation}
          />
        )}
        {this.state.weatherDataIsLoaded && (
          <FiveDayForecast weatherData={this.nextFiveDaysData()} />
        )}
        {!this.state.imageSrcIsLoaded && <LoadingSpinner />}
      </div>
    )
  }
}

export default Main
