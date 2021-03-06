import { FingerprintSpinner } from 'react-epic-spinners'
import React from 'react'

import styles from './LoadingSpinner.pcss'

const LoadingSpinner = props => (
  <div className={styles['spinner-container']}>
    <FingerprintSpinner color='#FFD13B' size='120' />
  </div>
)

export default LoadingSpinner
