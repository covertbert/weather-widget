/* @flow */
import React from 'react'
import styles from './FunctionalStateless.css'
import testImage from '../../assets/img/test.jpg'

type Props = {
  title: string
}

const FunctionalStateless = (props: Props) =>
  <div className={styles['main']}>
    <h1 className={styles['main__title']}>{props.title}</h1>
    <img src={testImage} />
  </div>

export default FunctionalStateless
