import './App.css'
import Footer from './Components/Footer'
import Footbanner from './Components/Footbanner'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Category from './Components/Category'

function App() {

  return (
    <>
    <Navbar/>
    <Category/>
    <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
     </Routes>
     <Footer/>
     <Footbanner/>
     
    </>
  )
}

export default App





