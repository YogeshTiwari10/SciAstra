import React from 'react'
import error from '../../assets/error.jpeg'

import './Error.scss'

const Error = () => {
  return (
    <div className="error">
      <img src={error} alt="error" />
    </div>
  )
}

export default Error