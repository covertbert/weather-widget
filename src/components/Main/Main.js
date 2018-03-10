import React from 'react'
import axios from 'axios'

import styles from './Main.pcss'

import FiveDayForecast from '../FiveDayForecast/FiveDayForecast'

class Main extends React.Component {
  constructor () {
    super()

    this.state = {
      location: null,
      locationIsLoaded: false,
      weatherData: null,
      weatherDataIsLoaded: false,
      ImageSrc: null,
      ImageSrcIsLoaded: false,
      errors: []
    }
  }

  getLocation () {
    return new Promise((resolve, reject) => {
      try {
        navigator.geolocation.getCurrentPosition(position => {
          resolve([position.coords.latitude, position.coords.longitude])
        })
      } catch (err) {
        reject(err)
      }
    })
  }

  getWeatherData (coordinates) {
    const latitude = coordinates[0]
    const longitude = coordinates[1]
    const apiQuery = `http://localhost:3000/weather/json?lat=${latitude}&lon=${longitude}`

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
    const apiQuery = `http://localhost:3000/location_data/json?lat=${latitude}&lon=${longitude}`

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

  componentDidMount () {
    this.getLocation()
      .then(res => {
        this.setState({ location: res, locationIsLoaded: true })

        this.getGooglePlaceImage(this.state.location)
          .then(res => {
            this.setState({ ImageSrc: res.data, ImageSrcIsLoaded: true })
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
      <div
        className={styles['page-body']}
        style={{ backgroundImage: `url(${this.state.ImageSrc})` }}
      >
        {this.state.weatherDataIsLoaded && (
          <FiveDayForecast
            weatherData={this.state.weatherData.data.daily.data}
          />
        )}
      </div>
    )
  }
}

export default Main
