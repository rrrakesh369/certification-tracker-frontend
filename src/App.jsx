import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Employee from "./components/Employee"
import AddEmployee from "./components/AddEmployee"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

function App() {
    return (  
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>  
      <Route path="/employee" element={<Employee/>}/>  
      <Route path="/add" element={<AddEmployee/>}/> 
      <Route path="/login" element={<Login/>}/>   
      <Route path="/profile" element={<Profile/>}/>
      </Route>   
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
