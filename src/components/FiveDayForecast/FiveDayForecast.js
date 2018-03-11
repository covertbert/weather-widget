import FiveDayForecastItem from './FiveDayForecastItem'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './FiveDayForecast.pcss'

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
