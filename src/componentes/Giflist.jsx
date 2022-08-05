import React from 'react'
import PropTypes from 'prop-types'

export const Giflist = ({title, url}) => {
  return (
    <div className='card'>
        <img src={url} alt={title}></img>
        <h1>{title}</h1>
    </div>
  )
}

Giflist.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}