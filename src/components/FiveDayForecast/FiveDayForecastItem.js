import React from 'react'
import PropTypes from 'prop-types'
import ReactAnimatedWeather from 'react-animated-weather'

import styles from './FiveDayForecast.pcss'

class FiveDayForecastItem extends React.Component {
  constructor () {
    super()

    this.state = {}
  }
  formatForIcons (itemString) {
    let formattedString = itemString.toUpperCase()
    return formattedString.replace(/-/g, '_')
  }
  componentDidMount () {
    console.log(this.props.itemWeatherData)
  }
  render () {
    return (
      <div className={styles['forecast-weather-item']}>
        <ReactAnimatedWeather
          className={styles['forecast-weather-item__icon']}
          icon={this.formatForIcons(this.props.itemWeatherData.icon)}
          color={'gray'}
          size={50}
        />
      </div>
    )
  }
}

FiveDayForecastItem.propTypes = {
  itemWeatherData: PropTypes.object
}

export default FiveDayForecastItem
