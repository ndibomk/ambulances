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
    <Route path='/admin' element={<Main/>}/>
    <Route path='*' element={<Error/>}/>
   </Routes>
   </BrowserRouter>
      
    
  )
}

export default App