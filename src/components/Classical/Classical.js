/* @flow */
import React from 'react'
import styles from './Classical.css'

type Props = {}

type State = {
  count: number
}

class Classical extends React.Component<Props, State> {
  static defaultProps = {
    initialCount: 0
  }

  state = {
    count: 0
  }

  componentDidMount () {
    setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }))
    }, 1000)
  }

  render () {
    return (
      <div className={styles.classical}>Count: {this.state.count}</div>
    )
  }
}

export default Classical
