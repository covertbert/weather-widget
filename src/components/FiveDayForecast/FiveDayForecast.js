import React from 'react'
import PropTypes from 'prop-types'
// import styles from './FiveDayForecast.pcss'

class FiveDayForecast extends React.Component {
  constructor () {
    super()

    this.state = {}
  }
  componentDidMount () {
    console.log(this.props.weatherData)
  }
  render () {
    return <div>Hello</div>
  }
}

FiveDayForecast.propTypes = {
  weatherData: PropTypes.array
}

export default FiveDayForecast
