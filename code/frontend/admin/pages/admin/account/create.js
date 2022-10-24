import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import { FaEdit, FaUserPlus, FaWindowClose } from 'react-icons/fa';
import Header from  "../../../components/admin/header";
import Sidebar from "../../../components/admin/sidebar";
import Footer from "../../../components/admin/footer";

import axios from '../../../utils/axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router';

export default function create () {

    const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm();
    const router = useRouter();

    const setForm = (id) => {
        // const account = findElementById(accounts, id)[0];
        // console.log(account);
        // setValue('firstname', account.firstname);
        // setValue('lastname', account.lastname);
        // setValue('status', account.status);
        // setValue('role', account.role);
    }

    const onSubmit = (formData) => {
        const form = {userid:router.query.userid, username:formData.username,password:formData.password,contact:formData.contact,address:formData.address,role:formData.role,status:'Approved',approvedAt:Date.now()}
     console.log(form)
     axios.post("/ruser",form).then((res)=>{
        Swal.fire({
            icon: 'success',
            title: 'Signup is successful!',
            iconColor: "green",
            confirmButtonColor: "green",
        });
        }).catch((error) => {
            console.log(error)
        })
      
        window.location.href = "http://localhost:4000/admin/account";
    
    }

    useEffect(()=>{
        if(!router.query.userid){ 
          router.push('/admin/account')
        }
    },[])

    return (
        <>
        <div id="wrapper">
        <Sidebar linkId="account"/>
        <div id="content-wrapper" className='d-flex flex-column'>
            <div id="content">
                <Header/>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Create Accounts</h1>
                    </div>
                    <div className='row'>
                        <div className='mb-4' id="createCard">
                            <div className='card shadow md-4'>
                                        <div className='card-body'>
                                            <form onSubmit={handleSubmit(onSubmit)} className='form' id='userform' >
                                                <div className='form-group row'>
                                                    <label htmlFor='fname' className='col-sm-4 col-form-label'>
                                                        Contact Number : 
                                                    </label>
                                                    <div class="col-sm-8">
                                                    <input className='form-control mb-4' type="text" 
                                                        name='contact' id='contact' placeholder='Contact number'
                                                        {...register("contact", { required: true })}/>
                                                    </div>
                                                </div>
                                                <div className='form-group row'>
                                                    <label htmlFor='address' className='col-sm-4 col-form-label'>
                                                        Address : 
                                                    </label>
                                                    <div class="col-sm-8">
                                                    <input className='form-control mb-4' type="text"
                                                        name='address' id='address' placeholder='Address'
                                                        {...register("address", { required: true })}/>
                                                    </div>
                                                </div>
                                                <div className='form-group row'>
                                                    <label htmlFor='role' className='col-sm-4 col-form-label'>
                                                        User Role : 
                                                    </label>
                                                    <div class="col-sm-8">
                                                    <select className='form-control mb-4' name="role" id='role'
                                                        {...register("role", { required: true })}>
                                                        <option value="Staff">Staff</option>
                                                        <option value="Customer">Individual Customer</option>
                                                    </select>
                                                    </div>
                                                </div>
                                                <div className='form-group row'>
                                                    <label htmlFor='username' className='col-sm-4 col-form-label'>
                                                        UserName : 
                                                    </label>
                                                    <div class="col-sm-8">
                                                        <input className='form-control mb-4' type="text"
                                                            name='username' id='username' placeholder='Username'
                                                            {...register("username", { required: true })}/>
                                                    </div>
                                                </div>
                                                <div className='form-group row'>
                                                    <label htmlFor='password' className='col-sm-4 col-form-label'>
                                                        Password : 
                                                    </label>
                                                    <div class="col-sm-8">
                                                        <input className='form-control mb-4' type="password"
                                                            name='password' id='password' placeholder='Password'
                                                            {...register("password", { required: true })}/>
                                                    </div>
                                                </div>
                                                <div className='form-group row'>
                                                    <label htmlFor='re-enterpass' className='col-sm-4 col-form-label'>
                                                        Re-enter Password : 
                                                    </label>
                                                    <div class="col-sm-8">
                                                        <input className='form-control mb-4' type="password"
                                                            name='re-enterpass' id='re-enterpass' 
                                                            placeholder='Re-enter Password'
                                                            {...register("cpassword", { required: true })}/>
                                                    </div>
                                                </div>
                                                <div className='form-group row'>
                                                    <button type='submit' className="w-100 btn btn-secondary btn-lg" > Create Account </button>
                                                </div>
                                            </form>
                                        </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </div>
        </>
    )
}