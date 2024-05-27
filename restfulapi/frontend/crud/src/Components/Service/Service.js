import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Service.css'
function Service() {
  const {id}=useParams()
  const [firstName,setFname]=useState()
  const [lastName,setLname]=useState()
  const [email,setEmail]=useState()
  const [phone,setPhone]=useState()
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:4000/employees/editEmployee/'+id)
    .then(result=>{console.log(result)
        setFname(result.data.firstName)
        setLname(result.data.lastName)
        setEmail(result.data.email)
        setPhone(result.data.phone)
    })
    .catch(err=>console.log(err))
  },[])

  const Update=(e)=>
    {
      e.preventDefault();
      axios.put(`http://localhost:4000/employees/updateEmployee/`+id,{firstName,lastName,email,phone})
      .then(result=>{
        console.log(result)
        navigate("/about")
        })
      
      .catch(err=>console.log(err))
  }
  return (
<>
<div className='container'>
<form  onSubmit={Update}>
<label>First Name</label>
<input type='text' placeholder='Enter First Name' required value={firstName} id='firstName' onChange={(e)=>setFname(e.target.value)} className='form-control'></input>
<br></br>
<label>Last Name</label>
<input type='text' placeholder='Enter Last Name' required value={lastName} id='lastName' onChange={(e)=>setLname(e.target.value)} className='form-control'></input>
<br></br>
<label>Email</label>
<input type='email' placeholder='Enter Email' required value={email} id='email' onChange={(e)=>setEmail(e.target.value)} className='form-control'></input>
<br></br>

<label>Phone</label>
<input type='number' placeholder='Enter Phone' required value={phone} id='phone' onChange={(e)=>setPhone(e.target.value)} className='form-control'></input>
<br></br>
<button type='submit' value='Register' className='btn btn-primary'>Update Employee</button>
</form>
</div>
</>
  )
}
export default Service;