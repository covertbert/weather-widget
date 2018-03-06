/* @flow */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './FunctionalStateless.css'

const FunctionalStateless = ({ title }) => (
  <div className={styles['main']}>
    <h1 className={styles['main__title']}>{title}</h1>
  </div>
)

FunctionalStateless.propTypes = {
  title: PropTypes.string.isRequired
}

export default FunctionalStateless
