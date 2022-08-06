import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components";

import Admin from './Admin'
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

import Book from './Book'
// import User from './User'
import { ToastContainer, toast } from 'react-toastify';
const Main = () => {
    const {user}=useSelector((state)=>({...state.auth}))
    const userId =user?.result?._id
  if(user?.result?.isAdmin){
    return(
        <div>
             <div >
            <StyledDashboard>
      <SideNav>
        <h3>Quick Links</h3>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/main/summary"
        >
          Summary
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/main/admin"
        >
          Books
        </NavLink>
        
      </SideNav>
      <Content>
        <Outlet />
      </Content>
    </StyledDashboard>
        </div>
             </div>
            
    )
  }else{
    return(
        <div>
          <Book/>
            </div> 
    )
   
  }
}

export default Main
const StyledDashboard = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap:wrap;
`;

const SideNav = styled.div`
  border-right: 1px solid gray;
  height: calc(100vh - 70px);
  position: fixed;
  overflow-y: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color:bisque;
  background-color: #806a78;

  h3 {
    margin: 0 0 1rem 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 17px;
  }

  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
    color:black;
    font-size:1.3rem;
  }
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 2rem 3rem;
  width: 100%;
`;
