import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import AddEmployee from "./components/AddEmployee"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import ListFeed from "./components/ListFeed"
import EditEmployee from "./components/EditEmployee"
import Feed from "./components/Feed"


function App() {
    return (  
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>  
      <Route path="/" element={<ListFeed/>}/> 
      <Route path="/feed/:id" element={<Feed/>}/> 
      <Route path="/add" element={<AddEmployee/>}/> 
      <Route path="/edit" element={<EditEmployee/>}/> 
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
