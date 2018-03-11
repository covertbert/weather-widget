import React from 'react'

import PropTypes from 'prop-types'
import styles from './FiveDayForecast.pcss'

import FiveDayForecastItem from './FiveDayForecastItem'

class FiveDayForecast extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  componentDidMount () {
    console.log(this.props.weatherData)
  }

  render () {
    return (
      <section className={styles['five-day-forecast']}>
        {this.props.weatherData.map(item => (
          <FiveDayForecastItem key={item.time} itemWeatherData={item} />
        ))}
      </section>
    )
  }
}

FiveDayForecast.propTypes = {
  weatherData: PropTypes.array
}

export default FiveDayForecast
