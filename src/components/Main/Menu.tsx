import { NavLink } from 'react-router-dom';
import { isAuthenticated } from "../../redux/reducers/login";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { logoutUser } from '../../redux/reducers/login';
export const Menu = () => {
    const dispatch: ThunkDispatch<RootState, any, any>=useDispatch();
    dispatch(isAuthenticated());
    const authState = useSelector((state: RootState) => state.auth);
    const salir=()=>{
        dispatch(logoutUser());
    }
  return (
    <>
    {
        authState.isAuth &&
        (
            <>
             <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="navbar-collapse">
                <div className="navbar-nav">
                        <NavLink 
                        className="nav-item nav-link" 
                        to="/home"
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/listar"
                    >
                        Listar
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/agregar"
                    >
                        Agregar
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        
                        to="/acercade"
                    >
                        SobreNosotros
                    </NavLink>
                    <button type="button" className='nav-item nav-link' onClick={salir}>Logout</button>
                </div>
            </div>
            </nav>
            </>
        )
    }    
   
           
   
    </>
  )
}
