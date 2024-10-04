// import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './Pages/Home';
import Login from './Pages/Login';
import Message from './Pages/Message';
import Notification from './Pages/Notification';
import Profile from './Pages/Profile';
import Nav from "./Componants/Navbar/Nav";

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/message" element={<Message/>}></Route>
      <Route path="/notification" element={<Notification/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
