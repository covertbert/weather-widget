import PropTypes from 'prop-types'
import React from 'react'

import styles from './WeatherToday.pcss'

const Temperature = ({ temperatureToday }) => (
  <div className={styles['temperature-today']}>{`${temperatureToday}°`}</div>
)

Temperature.propTypes = {
  temperatureToday: PropTypes.number
}

export default Temperature
