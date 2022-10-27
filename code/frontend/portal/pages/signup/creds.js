
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { BsGithub, BsTwitter, BsGoogle } from 'react-icons/bs'
// const dotenv = reNquire('dotenv').config()
// Form
import { Controller,useForm } from "react-hook-form";
import axios from '../../utils/axios'

import Swal from 'sweetalert2'


const Creds = () => {

  const router = useRouter()

    useEffect(() => {

    if(!router.query.userid){ 
      router.push('/signup')
  }
    }, [])


  const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm();


    const onSubmit = (formData) => {
    // setUserData(formData)
    const form = {userid:router.query.userid, username:formData.username,password:formData.password,contact:formData.contact,address:formData.address,role:formData.role,status:'Approved',approvedAt:Date.now()}
     console.log(form)
     axios.post("/ruser",form).then((res)=>{
        //   push({pathname:'/signup/creds', query:{userid:res.data.user._userid}},'/signup/creds')
        Swal.fire({
            icon: 'success',
            title: 'Signup is successfull!',
            iconColor: "green",
            confirmButtonColor: "green",
        });
        }).catch((error) => {
            console.log(error)
        })
      
        window.location.href = "http://localhost:3000/signin";
    
    }
    


  return (
    <div>
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">User Details</h3>
        <div className="form-group mt-3">
          <label>Contact Number</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter contact number"
            {...register("contact", { required: true })}
          />
        </div>
        <div className="form-group mt-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter address"
            {...register("address", { required: true })}
          />
        </div> 
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter username"
            {...register("username", { required: true })}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="form-group mt-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter confirm password"
            {...register("cpassword", { required: true })}
          />
        </div>
        <div className="form-group mt-3">
          <label>Type</label>
          <select className="form-control" {...register("role", { required: true })}>
              <option value="Customer">Customer</option>
              <option value="Provider">Provider</option>
          </select>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
  </div>
  )
}
export default Creds;