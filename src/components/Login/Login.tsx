import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { login } from "../../redux/reducers/login";
import { ThunkDispatch } from "@reduxjs/toolkit";


export const Login = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const dispatch: ThunkDispatch<RootState, any, any> 
  = useDispatch();
  const error=useSelector((state:RootState)=>state.auth.error);
  const handleSubmit=(event:React.FormEvent)=>{
    event.preventDefault();
    dispatch(login(username,password));
    setusername('');
    setpassword('');
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
