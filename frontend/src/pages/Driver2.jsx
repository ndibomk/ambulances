import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Maps from './Maps'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Driver1 = () => {
    const {user}=useSelector((state)=>({...state.auth}))
    const userId =user?.result?._id
    const [users,setUsers]=useState([]);
    const [admin,setAdmin]=useState([]);
  
  
    const [caretaker,setCareTaker]=useState([])
    useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/stats/ambu1')
        setUsers(  res.data)
        console.log('users',users[0].lat);
       } catch (error) {
        console.log(error);
  
  
        
      }
      }
      const link =`https://www.google.com/maps/@ ${-1.287268, 36.777769},12z`

      fetchData()
        },[])
        useEffect(()=>{
          async function fetchData(){
          try {
            const res= await axios.get('http://localhost:5000/stats/ambu2')
            setAdmin(  res.data)
           } catch (error) {
            console.log(error);
      
      
            
          }
          }
          fetchData()
            },[])



  return (
    <>
     <h3>Admin Dashboad</h3>

 <div style={{marginTop:'4rem'}} className='users-books' >
      {users.map((items)=>{
        return(
          <div className="deta">
            {/* https://www.google.com/maps/place/Eastleigh+Mall/@-1.2877824,36.8410624,12z/data=!4m5!3m4!1s0x182f16b4d06c5de9:0x42b7b53a6bbb65d8!8m2!3d-1.2787097!4d36.8497558 */}
<p>Name: {items.name}</p>
<p>Place: {items.title}</p>
<p>ambulance: {items.desc}</p>
<p>Codition: {items.rating}</p>
<p>Distance: {items.distance}miles</p>
<a href ={`https://www.google.com/maps/place/${items.place}/@${items.lat}, ${items.long},12z`}>View</a>
        </div>
        )
        
      })}
    </div>
  </>)
}

export default Driver1