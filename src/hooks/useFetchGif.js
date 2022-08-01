import { useEffect, useState } from "react";
import { GifApi } from "../helpers/GifApi";

export const useFetchGif = (value) => {
    
    const [first, setfirst] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    
    useEffect(() => {
      function imprimir(){
        GifApi(value)
            .then( img => {
              setfirst(img)
            });
        setisLoading(false)
        console.log(isLoading);
      }
      setTimeout(imprimir,5000);
      
            
            
    }, []);
  
    

    return {
        first: first,
        isLoading: isLoading
  }
}
