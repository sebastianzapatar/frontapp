import { BrowserRouter as Router
    , Route, Routes} from "react-router-dom"


import { Home } from "./Home"
import { Acercade } from "./Acercade"
import { Insert } from "./Insert"
import { Menu } from "./Menu"
import { ShowCars } from "./ShowCars"
import { Login } from "../Login/Login"


export const RouterApp = () => {
 
  
  return (
    <Router>
                <Menu/>
                <Routes>
                <Route
                path="/dashboard"
                    element={<Home />}
              
                />
                    <Route path="/" element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="listar" element={<ShowCars/>}/>
                    <Route path="agregar" element={<Insert/>}/>
                    <Route path="acercade" element={<Acercade/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="editar/:id" element={<Insert/>}/>
                </Routes>
            </Router>
  )
}
