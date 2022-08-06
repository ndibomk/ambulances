import React, { useEffect } from 'react'
import Maps from './Maps'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Summary = () => {
    const[users,setUsers]=useState([])
    const[userss,setUserss]=useState([])
    const[userstotal,setUserstotal]=useState([])
    const {user}=useSelector((state)=>({...state.auth}))

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/stats/pins')
          setUsers(  res.data)
        //   console.log('users',users[0].total);
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
              setUserstotal(  res.data)
              console.log('users',userstotal);
             } catch (error) {
              console.log(error);
        
        
              
            }
            }
            fetchData()
              },[])
          useEffect(()=>{
            async function fetchData(){
            try {
              const res= await axios.get('http://localhost:5000/stats/users')
              setUserss(  res.data)
            //   console.log('users',users[0].total);
             } catch (error) {
              console.log(error);
        
        
              
            }
            }
            fetchData()
              },[])

  return (
    <div style={{marginLeft:'3rem',color:'white',fontSize:'2rem'}}>
        <div className="usersSummary">
          <p> Bookings : {users[0]?.total}</p> 
          <p> Users: {userss[0]?.total}</p> 
        </div>
        <div className="map-items">
           <div className="map">
            <Maps/>
        </div> 
        <div className="book-cards">
            {userstotal.map((users)=>{
                return(
                    <div className="">
                        <div className="details">
                        <p>Name:{ user?.result?.isAdmin? users.name:null}</p>
                        <p>Phone:{ users.phone}</p>
                        {/* <p>Email:{ users.email}</p> */}
                        <p>BloodGroup:{ users.bloodGroup}</p>
                        <p>Allergy:{ users.allergy}</p>
                        <p>AOb:{ users.aob}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
        
        </div>
  )
}

export default Summary