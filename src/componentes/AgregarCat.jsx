import React, { useState } from 'react';

export const AgregarCat = ({onNewCategory}) => {

    const [first, setfirst] = useState('');

    const insertarTexto = (e) => {
        //setfirst(e)
        setfirst(e.target.value);
    }

    const alCapturarGif = (e) => {
        e.preventDefault();
        if (first.trim().length > 2){
            onNewCategory(first.trim());
        }
    }

    //d
  return (
    <div>
        <form onSubmit={alCapturarGif}>
            <input type="text" placeholder='Buscar Gifs' value={first} onChange={insertarTexto} />
            <h2>{first}</h2>
        </form>
    </div>
        
  )
}

