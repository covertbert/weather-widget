import PropTypes from 'prop-types'
import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

import styles from './FiveDayForecast.pcss'

class FiveDayForecastItem extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  formatForIcons () {
    const itemString = this.props.itemWeatherData.icon
    let formattedString = itemString.toUpperCase()
    return formattedString.replace(/-/g, '_')
  }

  formatDayFromTimestamp () {
    const timestamp = this.props.itemWeatherData.time
    const date = new Date(parseInt(timestamp * 1000))
    return date.toLocaleString(window.navigator.language, { weekday: 'short' })
  }

  getTemperatureRange () {
    const tempHigh = this.props.itemWeatherData.temperatureHigh
    const tempLow = this.props.itemWeatherData.temperatureLow

    return `${Math.floor(tempLow)}° - ${Math.ceil(tempHigh)}°`
  }

  render () {
    return (
      <div className={styles['forecast-weather-item']}>
        <span className={styles['forecast-weather-item__day']}>
          {this.formatDayFromTimestamp()}
        </span>
        <ReactAnimatedWeather
          className={styles['forecast-weather-item__icon']}
          icon={this.formatForIcons()}
          color={'#94a0a5'}
          size={45}
        />
        <span className={styles['forecast-weather-item__temp']}>
          {this.getTemperatureRange()}
        </span>
      </div>
    )
  }
}

FiveDayForecastItem.propTypes = {
  itemWeatherData: PropTypes.object
}

export default FiveDayForecastItem
