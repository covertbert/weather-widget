import React from 'react'

// import styles from './Main.css'

class Main extends React.Component {
  constructor () {
    super()

    this.state = {
      location: 0
    }
  }

  getLocation () {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve([position.coords.latitude, position.coords.longitude])
      })
    })
  }

  componentDidMount () {
    this.getLocation().then((res) => {
      this.setState({location: res})
    })
  }

  render () {
    return (
      <div>{this.state.location}</div>
    )
  }
}

export default Main
