
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn} from 'next-auth/react'
import { BsGithub, BsTwitter, BsGoogle } from 'react-icons/bs'
// const dotenv = reNquire('dotenv').config()
// Form
import { Controller,useForm } from "react-hook-form";
import axios from '../utils/axios'



const providers = [
  {
    name: 'github',
    Icon: BsGithub, 
    color:'dark'
  },
  {
    name: 'linkedIn',
    Icon: BsTwitter,
    color:'primary'
  },
  {
    name: 'google',
    Icon: BsGoogle,
    color:'danger'
  },
]

const Signup = () => {
  const { data: session, status } = useSession()
  const { push } = useRouter()
  const [userData, setUserData] = useState({})
  const [regData, setRegData] = useState({})


  
  const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm();


const onSubmit = (formData) => {
  setUserData(formData)
   axios.post("/user",formData).then((res)=>{
    const userid = res.data.user.res._userid
    setRegData({...userData,status:'Pending',approvedAt:'2022-01-01',role:'Customer'})
    console.log(userData)
    }).catch((error) => {
        console.log(error)
      })
}

  if (status === 'loading') return <h1>Checking Authentication...</h1>

  if (session) {
    setTimeout(() => {
      push('/')
    }, 5000)

    return <h1>you are already signed in</h1>
  }

  const handleOAuthSignIn = (provider) => () => signIn(provider)

  return (
    <div style={{ backgroundImage: `url(${"images/login.jpg"})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
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
          <label>Email</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            {...register("email", { required: true })}
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
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
        <hr />
        {/* <div className='d-grid gap-2 mt-3'>
          {providers.map(({ name, Icon, color }) => (
           <button type="button" className={`btn btn-${color}`} key={name} leftIcon={<Icon />} onClick={handleOAuthSignIn(name)}>Sign in with {name}</button>
          ))}
          
        </div> */}
      </div>
    </form>
  </div>
  </div>
  )
}
export default Signup