import React from 'react'
import FootballIcon from './footballIcon'

const Button = ({ randomise }) => {
  return (
    <button
      className="randomise-button"
      onClick={randomise}
    >
        Randomise
        <FootballIcon/>
    </button>
  )
}

export default Button