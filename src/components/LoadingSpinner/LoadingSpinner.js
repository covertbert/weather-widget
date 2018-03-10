import React from 'react'
import styles from './LoadingSpinner.pcss'

const LoadingSpinner = props => (
  <div className={styles['spinner-container']}>
    <div className={styles['half-circle-spinner']}>
      <div className={styles['circle circle-1']} />
      <div className={styles['circle circle-2']} />
    </div>
  </div>
)

export default LoadingSpinner
