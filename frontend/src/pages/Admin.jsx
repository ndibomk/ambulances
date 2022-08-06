import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Maps from './Maps'
import axios from 'axios'
const Admin = () => {
    const {user}=useSelector((state)=>({...state.auth}))
    const userId =user?.result?._id
    const [users,setUsers]=useState([]);
    const [admin,setAdmin]=useState([]);
  
  
    const [caretaker,setCareTaker]=useState([])
    useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/pins')
        setUsers(  res.data)
        console.log('users',users);
       } catch (error) {
        console.log(error);
  
  
        
      }
      }
      fetchData()
        },[])
        useEffect(()=>{
          async function fetchData(){
          try {
            const res= await axios.get('http://localhost:5000/stats')
            setAdmin(  res.data)
           } catch (error) {
            console.log(error);
      
      
            
          }
          }
          fetchData()
            },[])
  return (
    <>
     <h3>Admin Dash boad</h3>
    <div style={{marginTop:'4rem', marginLeft:'4rem'}} className='users-books' >
      {users.map((items)=>{
        return(
          <div className="deta">
<p>Name: {items.name}</p>
<p>Place: {items.title}</p>
<p>description: {items.desc}</p>
<p>Codition: {items.rating}</p>
<p>Distance: {items.rating}Km</p>
        </div>
        )
        
      })}
    </div>
  </>)
}

export default Admin