import IconLocation from './IconLocation'
import PropTypes from 'prop-types'
import React from 'react'
import Temperature from './Temperature'

import styles from './WeatherToday.pcss'

class WeatherToday extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  formatForIcons () {
    const itemString = this.props.weatherData.icon
    let formattedString = itemString.toUpperCase()
    return formattedString.replace(/-/g, '_')
  }

  componentDidMount () {
    console.log(this.props.weatherData)
    console.log(this.props.currentLocation)
  }

  render () {
    return (
      <section className={styles['weather-today']}>
        <IconLocation
          iconString={this.formatForIcons()}
          currentLocation={this.props.currentLocation}
        />
        <Temperature temperatureToday={this.props.weatherData.temperature} />
      </section>
    )
  }
}

WeatherToday.propTypes = {
  weatherData: PropTypes.object,
  currentLocation: PropTypes.string
}

export default WeatherToday
