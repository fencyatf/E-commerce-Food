import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Navbar from './components/CustomNavbar'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ProtectedRoute from "./ProtectedRoute";


const App = () => {

  const [isAuthenticated,setisAuthenticated] = useState(false)
  const handleLogin=()=>{
    setisAuthenticated(true)
  }

  const handleLogout=()=>{
    setisAuthenticated(false)
  }

  return (
    
    <Router>
      
    <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

    <Routes>
      <Route path='/' element={<Home />}/>
      
        {/*Protected Route*/}
        <Route path ='/menus' 
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Menu />
          </ProtectedRoute>
        }
        />
      <Route path='/aboutus' element={<AboutUs />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path ='/login' element={<Login onLogin={handleLogin} />}/>
    </Routes>
    
    <Footer />

    </Router>
  )
}

export default App