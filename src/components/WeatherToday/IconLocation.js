import PropTypes from 'prop-types'
import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

import styles from './WeatherToday.pcss'

const IconLocation = ({ iconString, currentLocation }) => (
  <div className={styles['icon-location']}>
    <ReactAnimatedWeather icon={iconString} color={'#fff'} size={60} />
    <span className={styles['icon-location__location']}>{currentLocation}</span>
  </div>
)

IconLocation.propTypes = {
  iconString: PropTypes.string,
  currentLocation: PropTypes.string
}

export default IconLocation
