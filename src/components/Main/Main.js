import React from 'react'

// import styles from './Main.css'

class Main extends React.Component {
  constructor () {
    super()

    this.state = {
      location: null,
      errors: []
    }
  }

  getLocation () {
    return new Promise((resolve, reject) => {
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve([position.coords.latitude, position.coords.longitude])
        })
      } catch (err) {
        reject(err)
      }
    })
  }

  componentDidMount () {
    this.getLocation().then((res) => {
      this.setState({location: res})
    }).catch((err) => {
      this.setState({errors: this.state.errors.concat(err)})
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.location}</h1>
      </div>
    )
  }
}

export default Main
