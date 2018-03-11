import React from 'react'
import PropTypes from 'prop-types'
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
          <div key={item.time} className={styles['forecast-item']}>
            {item.summary}
          </div>
        ))}
      </section>
    )
  }
}

FiveDayForecast.propTypes = {
  weatherData: PropTypes.array
}

export default FiveDayForecast
