import React, { Fragment } from 'react'
import rotatingDice from '../css/rotatingDice.gif'

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={rotatingDice}
        alt="Loading..."
        style={{ width: '200px', margin: 'auto', marginTop: '100px', display: 'block' }}
      />
    </Fragment>
  )
}

export default Spinner
