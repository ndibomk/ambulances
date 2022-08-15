import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Maps from './pages/Book'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Book from './pages/Book'
import Main from './pages/Main'
// import Navbar from './pages/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { setUser } from './redux/features/authSlice'
import Admin from './pages/Admin'
import Summary from './pages/Summary'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Driver1 from './pages/Driver1'
import Driver2 from './pages/Driver2'
import Driver3 from './pages/Driver3'
import Driver4 from './pages/Driver4'
import Driver5 from './pages/Driver5'
import Driver6 from './pages/Driver6'
const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
   <BrowserRouter>
   <ToastContainer/>
  <Navbar/>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/book' element={<Book/>}/>
    <Route path='/main' element={<Main/>}>
          <Route path='admin' element={<Admin/>}/>
    <Route index element={<Summary/>}/>
    </Route>
    <Route path='/ambu1' element={<Driver1/>}/>
    <Route path='/ambu2' element={<Driver2/>}/>
    <Route path='/ambu3' element={<Driver3/>}/>
    <Route path='/ambu4' element={<Driver4/>}/>
    <Route path='/ambu5' element={<Driver5/>}/>
    <Route path='/ambu6' element={<Driver6/>}/>
    <Route path='/admin' element={<Main/>}/>
    <Route path='*' element={<Error/>}/>
   </Routes>
   </BrowserRouter>
      
    
  )
}

export default App