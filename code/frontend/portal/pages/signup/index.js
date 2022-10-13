
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn} from 'next-auth/react'
import { BsGithub, BsTwitter, BsGoogle } from 'react-icons/bs'
// const dotenv = require('dotenv').config()
// Form
import { Controller,useForm } from "react-hook-form";
import axios from '../../utils/axios'

import generateOtp  from '../../utils/otp'
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2'

const Basic = () => {
  
  const { push } = useRouter()
  const [otpVal, setOtpVal] = useState('')


  const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm();
  // setOtpVal(generateOtp())

const onSubmit = (formData) => {
  const otp = generateOtp()
  // axios.post("/user",formData).then((res)=>{
  //   // push({pathname:'/signup/creds', query:{userid:res.data.user._userid}},'/signup/creds')
  //   console.log(res.data.user)
  // }).catch((error) => {
  //     console.log(error)
  // })
  emailjs.send("service_hxq4tfa","template_rvtb5iq", {to_name:`${formData.firstname} ${formData.lastname}`,message:otp,from_name:'evento',to_mail:formData.email,reply_to:'alwaysvictoryforme@gmail.com'},'_yWQOnFaW35ggFchq').then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
 }, function(error) {
    console.log('FAILED...', error);
 });
  Swal.fire({
    title: `OTP is send to your mail ${formData.email}`,
    iconColor: "black",
    confirmButtonColor: "black",
  });
    push({pathname:'/signup/otp', query:{otp:otp,firstname:formData.firstname, lastname:formData.lastname,email:formData.email}},'/signup/otp')
  }

  return (
    <div>
<div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign up</h3>
        <div className="form-group mt-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter first name"
            {...register("firstname", { required: true })}
          />
        </div>
        <div className="form-group mt-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter last name"
            {...register("lastname", { required: true })}
          />
        </div> 
        <div className="form-group mt-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            {...register("email", { required: true })}
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
export default Basic