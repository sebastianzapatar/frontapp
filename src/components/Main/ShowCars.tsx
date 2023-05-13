import {useState,useEffect} from 'react';
import { url } from '../utilities/url';
import { Item } from '../../models/Item';
import { Car } from './Car';
import { isAuthenticated } from "../../redux/reducers/login";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
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
  const dispatch: ThunkDispatch<RootState, any, any>=useDispatch();
    dispatch(isAuthenticated());
    const authState = useSelector((state: RootState) => state.auth);
    console.log(authState.isAuth);
    if (!authState.isAuth) {
      return <Navigate to="/login" replace={true} />;
    } 
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
