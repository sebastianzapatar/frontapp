import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { login } from "../../redux/reducers/login";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Navigate  } from 'react-router-dom';
import { isAuthenticated } from "../../redux/reducers/login";
export const Login = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const dispatch: ThunkDispatch<RootState, any, any> 
  = useDispatch();
  const error=useSelector((state:RootState)=>state.auth.error);
  dispatch(isAuthenticated());
  const authState = useSelector((state: RootState) => state.auth);
  if(authState.isAuth){
    return <Navigate to="/" replace={true}/>;
  }
  const handleSubmit=(event:React.FormEvent)=>{
    event.preventDefault();
    dispatch(login(username,password));
    setusername('');
    setpassword('');   
    return <Navigate to="/home" replace={true}/>

  }
  
  return (
    <>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          value={username}
         onChange={(e)=>setusername(e.target.value)}
          placeholder="username"
          />
          <input type="password" 
          value={password} 
          onChange={(e)=>setpassword(e.target.value)}
          placeholder="password"
          />
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
    </>
  )
}
