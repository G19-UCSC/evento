
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Controller,useForm } from "react-hook-form";
import axios from '../../../utils/axios'

import Swal from 'sweetalert2'


const OTP = (otp) => {
  
  const router = useRouter()

  const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm();


    const onSubmit = (formData) => {
     if(router.query.otp === formData.otp){

       const form = {firstname:router.query.firstname, lastname:router.query.lastname,email:router.query.email}
          axios.post("/user",form).then((res)=>{
            Swal.fire({
              icon: 'success',
              title: 'OTP you have entered is correct',
              iconColor: "green",
              confirmButtonColor: "green",
          });
          router.push({pathname:'/admin/account/create', query:{userid:res.data.user.res._userid}},'/admin/account/create')

        }).catch((error) => {
            console.log(error)
            Swal.fire({
              icon: 'danger',
              title: 'OTP you have entered is incorrect',
              iconColor: "red",
              confirmButtonColor: "red",
          });
        })
     }
    }

    useEffect(()=>{
      if(!router.query.otp){ 
        router.push('/admin/account')
      }
    },[])

  return (
    <div>
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">OTP</h3>
        <div className="form-group mt-3">

          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter OTP"
            {...register("otp", { required: true })}
          />
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
export default OTP