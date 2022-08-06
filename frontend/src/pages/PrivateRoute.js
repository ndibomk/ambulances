import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate=useNavigate()
  const { user } = useSelector((state) => ({ ...state.auth }));
  if(user){
   navigate('/main')
  }
  else{
    navigate('/login')
  }
};

export default PrivateRoute;
