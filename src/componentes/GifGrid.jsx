import React, { useEffect } from 'react'

import { useFetchGif } from '../hooks/useFetchGif';

import { Giflist } from './Giflist';

export const GifGrid = ({value}) => {
  
  const {first, isLoading} = useFetchGif(value);
  
  useEffect(() => {
    console.log(isLoading);
  }, [])
  
  return (
    <>
        
        <h1>{value}</h1>
        
        {
          
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className='card-grid'>
          {
            first.map( (img) => (<Giflist key={img.id} {...img} />) )
          }
        </div>
    </>
  )
}
