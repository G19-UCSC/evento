
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../../utils/product';
import { CartContext, CartDispatchContext } from '../../context/productContext';
import axios from '../../utils/axios'
import React, { useContext, useState,useEffect } from 'react'
import { Controller,useForm } from "react-hook-form";

import emailjs from 'emailjs-com';

import Swal from 'sweetalert2'

export default function Event() {
  const { push } = useRouter()
  const [otpVal, setOtpVal] = useState('')
  


  const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm();
  // setOtpVal(generateOtp())

const onSubmit = (formData) => {
  // axios.post("/user",formData).then((res)=>{
  //   // push({pathname:'/signup/creds', query:{userid:res.data.user._userid}},'/signup/creds')
  //   console.log(res.data.user)
  // }).catch((error) => {
  //     console.log(error)
  // })
  // Swal.fire({
  //   title: `OTP is send to your mail ${formData.email}`,
  //   iconColor: "black",
  //   confirmButtonColor: "black",
  // });
    // push({pathname:'/signup/otp', query:{otp:otp,firstname:formData.firstname, lastname:formData.lastname,email:formData.email}},'/signup/otp')
  }


  return (
     <div class="site-wrap">
     <Header />
    
     <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="index.html">Event</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Event</strong></div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">

        <div class="row mb-5">

        <div className="" style={{  display: 'flex',justifyContent: 'center',aligItems: 'center'}}>
            <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Event Details</h3>
                <div className="form-group mt-3">
                  <label>Location</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter first name"
                    {...register("firstname", { required: true })}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Start Date Time</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter last name"
                    {...register("lastname", { required: true })}
                  />
                </div> 
                <div className="form-group mt-3">
                  <label>End Date Time</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                  />
                </div> 
                <div className="form-group mt-3">
                  <label>No.of Participants</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                  />
                </div> 
                <div className="form-group mt-3">
                  <label>Budget</label>
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
          </div>
      </div>    
    
     <Footer/>
   </div>
   

  )
}
