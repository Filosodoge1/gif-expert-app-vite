import React, { useState } from 'react'
import { AgregarCat } from './componentes/AgregarCat';
import { GifGrid } from './componentes/GifGrid';


export const Gifexpertapp = () => {
  
  const [Categories, setCategories] = useState(['dragon ball']);
  
  const insertarCategoria = (valor1) => {
    if (Categories.includes(valor1)) return;
    setCategories([...Categories, valor1]);
    console.log(Categories);
  }

  return (
    <>
      <h2>GifExpert</h2>
      <AgregarCat onNewCategory={ valorR => insertarCategoria(valorR)}/>
        <ol>
          {
            Categories.map(categoria => <GifGrid key={categoria} value={categoria} />)
          }
        </ol>
    </>
  )
}
