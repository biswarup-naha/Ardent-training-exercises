import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'
function Contact() {
  const [firstName,setFname]=useState()
  const [lastName,setLname]=useState()
  const [email,setEmail]=useState()
  const [phone,setPhone]=useState()

  const Submit=(e)=>
    {
      e.preventDefault();
      axios.post(`http://localhost:4000/employees/addEmployee`,{firstName,lastName,email,phone})
      .then(result=>console.log(result))
      .catch(err=>console.log(err))
  }
  return (
<>
<div className='container'>
<form  onSubmit={Submit}>
<label>First Name</label>
<input type='text' placeholder='Enter First Name' id='firstName' onChange={(e)=>setFname(e.target.value)} className='form-control'></input>
<br></br>
<label>Last Name</label>
<input type='text' placeholder='Enter Last Name' id='lastName' onChange={(e)=>setLname(e.target.value)} className='form-control'></input>
<br></br>
<label>Email</label>
<input type='email' placeholder='Enter Email' id='email' onChange={(e)=>setEmail(e.target.value)} className='form-control'></input>
<br></br>

<label>Phone</label>
<input type='number' placeholder='Enter Phone' id='phone' onChange={(e)=>setPhone(e.target.value)} className='form-control'></input>
<br></br>
<button type='submit' value='Register' className='btn btn-primary'>Register Employee</button>
</form>
</div>
</>
  )
}

export default Contact;