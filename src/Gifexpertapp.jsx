import React, { useState } from 'react'
import { AgregarCat } from './componentes/AgregarCat';

export const Gifexpertapp = ({valor}) => {
  
  const [Categories, setCategories] = useState(['dragon ball']);
  
  const insertarCategoria = (valor1) => {
    setCategories([...Categories, valor1]);
    console.log(Categories);
  }

  return (
    <>
      <h2>GifExpert</h2>
      <AgregarCat onNewCategory={ valorR => insertarCategoria(valorR)}/>
        <ol>
          {
            Categories.map(categoria => <li key={categoria}>{categoria}</li>)
          }
        </ol>
    </>
  )
}
