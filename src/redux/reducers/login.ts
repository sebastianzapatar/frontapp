import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

interface AuthState{
    isAuth:boolean;
    isLoading:boolean;
    error:string|null;
    token:string|null;
    email:string|null
}
const initialState:AuthState={
    isAuth:false,
    isLoading:false,
    error:null,
    token:null,
    email:null
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        checkingAuth:(state)=>{
            state.isLoading=true;
        },
        completedAuth:(state,action:PayloadAction<{isAuth:boolean}>)=>{
            state.isAuth=action.payload.isAuth;
            state.isLoading=false;
        },
        errorAuth:(state)=>{
            state.isAuth=false;
            state.error='Error during authentication'
        },
        loginStart:(state)=>{
            state.isLoading=true;
        },
        loginSuccess:(state,action:PayloadAction<AuthState>)=>{
            state.isAuth=true;
            state.email=action.payload.email;
            state.token=action.payload.token;
            state.error=null
        },
        loginError:(state,action:PayloadAction<string>)=>{
            state.isAuth=false;
            state.isLoading=false;
            state.error=action.payload;
        },
        logout:(state)=>{
            state.isAuth=false;
            state.error=null;
            state.token=null;
            state.email=null;
        }
    }
})
export const{
    checkingAuth,
    completedAuth,
    errorAuth,
    loginStart,
    loginSuccess,
    loginError,
    logout
}=authSlice.actions;
export default authSlice.reducer;

export const login=(username:string,password:string):
AppThunk=>async(dispatch)=>{
    try {
       dispatch(loginStart());
       const response=await 
       fetch('http://localhost:3002/auth/login',
       {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email:username,password})
       })
       const data=await response.json();
       if(data.token){
        const payload:AuthState={
            email:username,
            token:data.token,
            error:null,
            isAuth:true,
            isLoading:false
        }
        dispatch(loginSuccess(payload));
        localStorage.setItem('isAuth',JSON.stringify(payload))
       }
       else{
        dispatch(loginError("Erro en las credenciales"));
       }
    } catch (error) {
        dispatch(loginError('Hp bruto no se pudo conectar'))
        
    }
}
export const logoutUser=():AppThunk=>(dispatch)=>{
    localStorage.removeItem('isAuth');
    dispatch(logout());
}