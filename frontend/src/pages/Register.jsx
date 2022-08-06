import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../redux/features/authSlice";

const initialState = {
 name:'',
  email: "",
  password: "",
  phone:'',
  aob:'',
  dob:'',
  bloodGroup:'',
  allergy:'',
};

const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error,user } = useSelector((state) => ({ ...state.auth }));
  const { email, password, name} = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
      dispatch(register({ formValue, navigate, toast }));
    
  };
 
  return (
    <div className="registerform">
    <div className="theform">
      <form onSubmit={handleSubmit}>
      <table>
        <h2 className="header">Register Form</h2>
        <div className="con">
        <div className='labels'>

        <td>
  <tr><label for="name">Full names</label></tr>
        <tr><input
        id="name"
          type="text"
          placeholder="name"
          required
          onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
        /></tr>
        </td>
        
        </div>
        <div className='labels'>
        <td>
  <tr><label for="emails">Email</label></tr>
       <tr> <input
       id="emails"
          type="email"
          required
          placeholder="email"
          onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
        /></tr>
        </td>
        </div>
        </div>
        <div className="con">
        <div className='labels'>
        <td>
  <tr><label for="passwords">Password</label></tr>
       <tr> 
        <input
        id="passwords"
          type="password"
          required
          placeholder="password"
          onChange={(e) => setFormValue({ ...formValue, password: e.target.value })}
        />
        </tr>
        </td>
        </div>
        <div className='labels'>
        <td>
  <tr><label for="Phonenumber">Password</label></tr>
       <tr> 
         <input
         id="Phonenumber"
         required
          type="number"
          placeholder="phone"
          onChange={(e) => setFormValue({ ...formValue, phone: e.target.value })}
        />
        </tr>
        </td>
        </div>
        </div>
        <div className="con">
        <div className='labels'>
        <td>
  <tr><label for="dob">Date of birth</label></tr>
       <tr>
         <input
         id="dob"
          type="date"
          placeholder="dob"
          onChange={(e) => setFormValue({ ...formValue, dob: e.target.value })}
        /></tr>
        </td>
        </div>
        <div className='labels'>
        <td>
  <tr><label for="allergy">Allergy</label></tr>
       <tr>
         <input
         id="allergy"
          type="text"
          placeholder="allergy"
          onChange={(e) => setFormValue({ ...formValue, allergy: e.target.value })}
        /></tr>
        </td>
        </div>
        </div>
        <div className="con">
        <div className='labels'>
        <td>
        <tr><label for="bloodgroup">Choose your bloodgroup</label></tr>
       <tr>
         <input
         id="Bloodgroups"
         list="bloodgroup" name="bloodgroup"
          type="text"
          placeholder="bloodGroup"
          onChange={(e) => setFormValue({ ...formValue, bloodGroup: e.target.value })}
        />
       
<datalist id="bloodgroup">
  <option >A+</option>
  <option >A-</option>
  <option >B+</option>
  <option >B-</option>
  <option >AB+</option>
  <option >AB-</option>
  <option >0+</option>
  <option >0-</option> 
</datalist>

        </tr>
        </td>
        </div>
        <div className='labels'>
        <td>
  <tr><label for="important">Password</label></tr>
       <tr>
         <textarea  rows="5" cols="28"
         id="important"
          type="text"
          placeholder="aob"
          onChange={(e) => setFormValue({ ...formValue, aob: e.target.value })}
        /></tr>
        </td>
        </div>
        </div>
        </table>
        <div className='labels'>
        <button className="regbtn">
          register
          {/* {user.rigisterStatus === "pending" ? "Submitting..." : "Register"} */}
        </button>
        </div>
        {/* {user.registerStatus === "rejected" ? (
          <p>{user.registerError}</p>
        ) : null} */}
      </form>
      
      </div>
      </div>
    
  );
};

export default Register;
