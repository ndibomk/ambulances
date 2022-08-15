import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MainAdmin = () => {
  const {user}=useSelector((state)=>({...state.auth}))

  if(user?.result?.ambu==='ambu1'){
    return(
      <div>
       <Link to='/ambu1'>
      Driver1
    </Link> 
      </div>
      
    )
    }if(user?.result?.ambu==='ambu2'){
      return(
        <div>
         <Link to='/ambu2'>
        Driver2
      </Link> 
        </div>
        
      )
      }
      if(user?.result?.ambu==='ambu3'){
        return(
          <div>
           <Link to='/ambu3'>
          Driver3
        </Link> 
          </div>
          
        )
        }
        if(user?.result?.ambu==='ambu4'){
          return(
            <div>
             <Link to='/ambu4'>
            Driver4
          </Link> 
            </div>
            
          )
          }
          if(user?.result?.ambu==='ambu5'){
            return(
              <div>
               <Link to='/ambu5'>
              Driver5
            </Link> 
              </div>
              
            )
            }
    
    
    
    else 
    return(
      <div>
      <Link to='/ambu6'>
     Driver6
   </Link> 
     </div>
    )
}

export default MainAdmin