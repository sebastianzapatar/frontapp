import {useState,useEffect, useLayoutEffect} from 'react';
import { url } from '../utilities/url';
import { Item } from '../../models/Item';
import { Car } from './Car';
export const ShowCars = () => {
  const [productos, setproductos] = useState<Item[]>([]);
  const peticion:string=url+'items'
  const pedir=async()=> {
    const respuesta=await fetch(peticion);
    const loquesa=await respuesta.json();
    setproductos(loquesa);
  }
  useEffect(() => {
    pedir();
  })
  
  return (
    <>
      {productos.map(producto=>{
        return(
          <Car item={producto} key={producto.name}/>
        )
      })}
    </>
  )
}
