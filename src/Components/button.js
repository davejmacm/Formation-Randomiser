import React from 'react'

const Button = ({ randomise }) => {
  return (
    <button
      className="randomise-button"
      onClick={randomise}
    >
        Randomise
    </button>
  )
}

export default Button