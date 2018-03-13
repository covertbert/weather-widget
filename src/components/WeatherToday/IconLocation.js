import PropTypes from 'prop-types'
import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

import locationIcon from '../../assets/img/location-icon.svg'
import styles from './WeatherToday.pcss'

const IconLocation = ({ iconString, currentLocation }) => (
  <div className={styles['icon-location']}>
    <ReactAnimatedWeather icon={iconString} color={'#fff'} size={220} />
    <div className={styles['icon-location__location-container']}>
      <img className={styles['icon-location__icon']} src={locationIcon} />
      <span className={styles['icon-location__location']}>
        {currentLocation}
      </span>
    </div>
  </div>
)

IconLocation.propTypes = {
  iconString: PropTypes.string,
  currentLocation: PropTypes.string
}

export default IconLocation
