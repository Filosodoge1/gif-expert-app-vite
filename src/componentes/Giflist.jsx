import React from 'react'


export const Giflist = ({title, url}) => {
  return (
    <div className='card'>
        <img src={url} alt={title}></img>
        <h1>{title}</h1>
    </div>
  )
}
