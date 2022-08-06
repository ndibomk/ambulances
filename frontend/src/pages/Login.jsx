import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {  login } from "../redux/features/authSlice";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
 



  

  
  return (
    <>
    
     <form className="form1" onSubmit={handleSubmit}>
     <div className="staffs"> 
      
      
        <input  id='email' className="details"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
        />
        <input className="details" id="password"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setFormValue({ ...formValue, password: e.target.value })}
        />
        <button className="login">
          LOGIN
        </button>
        </div>
      </form>
      
   </>
  );
};

export default Login;