import { Provider } from "react-redux"
import { Footer } from "./components/Main/Footer"
import { RouterApp } from "./components/Main/RouterApp"
import store from './redux/store';

function App() {
  

  return (
    <>
      <Provider store={store}>
      <RouterApp/>
      <Footer/>
      </Provider>
    </>
  )
}

export default App
