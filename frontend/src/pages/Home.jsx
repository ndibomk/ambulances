import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
// import Admin from './Admin'
// import NewBook from './NewBook'
import Maps from './Maps'
const Home = () => {
  const { user} = useSelector((state) => ({ ...state.auth }));

  const navigate=useNavigate()
  
  useEffect(()=>{
    
  })
  return (
    <div className='information'>
{/* <NewBook/> */}
{user ? navigate('/main'):navigate('/login') }

      
       <div className="story"><spam className="bigstory">Swift booking ambulance</spam><br></br>
       <spam className="smallstory">This is a system that saves you a lot of time by
        enabling you to book the nearest ambulance.The ambulances are of best conditions with the best parametrics.It covers ambulances in jake 
        hospital."  voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </spam></div>
        {/* <Admin/> */}
        
    </div>
  )
}

export default Home