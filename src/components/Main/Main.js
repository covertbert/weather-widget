import React from 'react'
import axios from 'axios'
// import styles from './Main.css'

class Main extends React.Component {
  constructor () {
    super()

    this.state = {
      location: null,
      locationIsLoaded: false,
      errors: []
    }
  }

  getLocation () {
    return new Promise((resolve, reject) => {
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve([position.coords.latitude, position.coords.longitude])
        })
      } catch (err) {
        reject(err)
      }
    })
  }

  getLocationData (coordinates) {
    const longitude = coordinates[0]
    const latitude = coordinates[1]
    const apiQuery = `http://localhost:3000/weather/json?lat=${latitude}&lon=${longitude}`

    return new Promise((resolve, reject) => {
      axios.get(apiQuery).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  componentDidMount () {
    this.getLocation().then((res) => {
      this.setState({location: res, locationIsLoaded: true})
      this.getLocationData(this.state.location).then((weatherData) => {
        console.log(weatherData)
      }).catch((err) => {
        this.setState({errors: this.state.errors.concat(err)})
      })
    }).catch((err) => {
      this.setState({errors: this.state.errors.concat(err)})
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.location}</h1>
        {this.state.locationIsLoaded && (<p>I'm loaded</p>)}
      </div>
    )
  }
}

export default Main
