
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// const dotenv = require('dotenv').config()
// Form
import { Controller, useForm } from "react-hook-form";
import axios from '../utils/axios'

import Swal from 'sweetalert2'

const Basic = () => {

  const [user, setUser] = useState(null);
  const { push } = useRouter()

  const { register, handleSubmit, watch, control, reset, setValue, formState: { errors } } = useForm();
  // setOtpVal(generateOtp())

  useEffect(() => {
    const user_ = JSON.parse(localStorage.getItem('user'))
    if (user_) {
      if (user_.role === 'Admin') {
        push('/admin')
      } else if (user_.role === 'Customer') {
        push('/customer')
      } else if (user_.role === 'Provider') {
        push('/provider')
      } else if (user_.role === 'Staff') {
        push('/staff')
      }
    } else {
      push('/')
    }
  }, [])

  const onSubmit = (formData) => {
    console.log(formData)
    axios.post("/ruser/login", formData).then((res) => {
      Swal.fire({
        icon: 'success',
        title: `Welcome ${res.data[0].username}`,
        iconColor: "green",
        confirmButtonColor: "green",
      });
      localStorage.setItem('user', JSON.stringify(res.data[0]))
      if (res.data[0].role === 'Admin') {
        push('/admin')
      } else if (res.data[0].role === 'Customer') {
        push('/customer')
      } else if (res.data[0],role === 'Staff') {
        push('/staff')
      }
      // push({pathname:'/signup/otp', query:{otp:'hello',firstname:formData.firstname, lastname:formData.lastname,email:formData.email}},'/signup/otp')
      // push({pathname:'/signup/creds', query:{userid:res.data.user._userid}},'/signup/creds')
      console.log(res.data[0].userid)
    }).catch((error) => {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: `Username or Password is incorrect`,
        iconColor: "red",
        confirmButtonColor: "red",
      });
    })
  }

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
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
            <div className="d-grid gap-2 mt-4">
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