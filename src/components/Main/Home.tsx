import { isAuthenticated } from "../../redux/reducers/login";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';


export const Home = () => {
 
  const dispatch: ThunkDispatch<RootState, any, any>=useDispatch();
    dispatch(isAuthenticated());
    const authState = useSelector((state: RootState) => state.auth);
    console.log(authState.isAuth);
    if (!authState.isAuth) {
      return <Navigate to="/login" replace={true} />;
    }
    
  return (
    <div>Home</div>
  )
}
