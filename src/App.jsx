// import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './Pages/Home';
import Login from './Pages/Login';
import Message from './Pages/Message';
import Notification from './Pages/Notification';
import Profile from './Pages/Profile';
import Nav from "./Componants/Navbar/Nav";
import { useEffect, useState } from 'react'
import WelcomePage from "./Componants/Login/WelcomePage";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  return (
    <BrowserRouter>
    
    <Nav></Nav>
    <Routes>
    <Route path="/" element={<WelcomePage email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
    </Route>
    
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}></Route>
      <Route path="/message" element={<Message/>}></Route>
      <Route path="/notification" element={<Notification/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
