/* @flow */
import React from 'react'
import FunctionalStateless from './FunctionalStateless/FunctionalStateless'
import Classical from './Classical/Classical'

const App = () => {
  return (
    <div>
      <FunctionalStateless title={'Test'} />
      <Classical />
    </div>
  )
}

export default App
