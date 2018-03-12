import PropTypes from 'prop-types'
import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

import locationIcon from '../../assets/img/location-icon.svg'
import styles from './WeatherToday.pcss'

const IconLocation = ({ iconString, currentLocation }) => (
  <div className={styles['icon-location']}>
    <ReactAnimatedWeather icon={iconString} color={'#fff'} size={60} />
    <div className={styles['icon-location__location']}>
      <img src={locationIcon} /> >
      <span>{currentLocation} </span>
    </div>
  </div>
)

IconLocation.propTypes = {
  iconString: PropTypes.string,
  currentLocation: PropTypes.string
}

export default IconLocation
