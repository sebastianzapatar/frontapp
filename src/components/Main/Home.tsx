import {useState,useEffect} from 'react';
import { url } from '../utilities/url';
import { Item } from '../../models/Item';

export const Home = () => {
  const [productos, setproductos] = useState<Item[]>([]);
  const peticion:string=url+'items'
  const pedir=async()=> {
    const respuesta=await fetch(peticion);
    const loquesa=await respuesta.json();
    setproductos(loquesa);
  }
  useEffect(() => {
    pedir();
  }, [productos])
  
  return (
    <div>Home</div>
  )
}
