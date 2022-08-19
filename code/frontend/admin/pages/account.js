import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import { FaEdit, FaUserPlus, FaWindowClose } from 'react-icons/fa';
import Header from  "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";
import Footer from "../components/dashboard/footer";

var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';
import axios from '../utils/axios';
import { useForm } from 'react-hook-form';

export default function account () {

    const [btn,setBtn] = useState('null')
    const [update,setUpdate] = useState('')
    const [accounts,setAccounts] = useState([])
    const [registered_accounts,setRegistered_accounts] = useState([])
    const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm(); 

    const columns = [{
        text: 'Name'
    },{
        text: 'Username'
    },{
        text: 'Email'
    }, {
        text: 'Status'
    }, {
        text: 'Action'
    },];

    let createFormViewBtn;

    if(btn == 'null'){
        createFormViewBtn = <button className="btn" onClick={e=>onClickCreate()} id="createBtn"> <FaUserPlus/> Create Account </button>
    }
    else{
        createFormViewBtn = <button className="btn" onClick={e=>onClickCancel()}> <FaWindowClose /> Cancel </button>
    }

    let submitBtn;

    if(btn == 'create'){
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Create Account </button>
    }
    else if(btn == 'update'){
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Update Account </button>
    }

    const findElementById = (arr, id) => arr.filter(element => element.userid == id);
    const removeElementById = (arr, id) => arr.filter(element => element.id !== id);

    const setForm = (id) => {
        const account = findElementById(accounts, id)[0];
        console.log(account);
        setValue('firstname', account.firstname);
        setValue('lastname', account.lastname);
        setValue('status', account.status);
        setValue('role', account.role);
        setUpdate(id)
    }

    function onClickCreate(e){
        if(btn == 'null'){
            setBtn('create');
            document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
        }
    }

    function onClickUpdate(id){
        console.log(id)
        if(btn == 'null' && id != ''){
            setBtn('update');
            setForm(id);
            document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
        }

    }

    function onClickCancel(e){
        setBtn('null');
        document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
        reset({
            fisrtname: '',
            lastname: '',
            role: '',
            email: '',
            status: '',
            username: ''
        })
    }

    const onSubmit = (formData) => {
        
        if(btn == 'update' && update != ''){
            let u = findElementById(accounts,update)[0];
            formData.userid = update
            formData.email = u.email
            formData.username = u.username
            formData.password = u.password
            formData.contact = u.contact
            formData.address = u.address
            if(formData.status == 'Approved'){
                formData.approvedAt = Date();
            }else{
                formData.approvedAt = u.approvedAt
            }

            console.log(formData)
            axios.put(`/ruser/${update}`, formData).then((res)=>{
                const newAccount = res.data.user.res[1]
                setAccounts([formData].concat(removeElementById(accounts,newAccount._userid)))
            }).catch((error) => {
                console.log(error)
            })

            onClickCancel();
        }else{
            //Create Form
        }
    }

    useEffect(()=>{
        const table = () => {
            $(function() {
                $('#accountsTable').DataTable({
                    ordering:true,
                    select: true,
                    responsive: true,
                    buttons: [
                        'copy','excel','pdf'
                    ]
                });
            });
        }

        const getUsers = () => {
            return axios.get("/user");
        }

        const getRUsers = () => {
            return axios.get("/ruser");
        }

        Promise.all([getUsers(),getRUsers()]).then((res)=>{
            let users = res[0].data.users;
            let rusers = res[1].data.users;
            rusers.forEach(r => {
                users.forEach(u => {
                    if(u._userid == r.userid){
                        r.firstname = u.firstname;
                        r.lastname = u.lastname;
                        r.email = u.email;
                        
                    }
                })
            });
            setAccounts(rusers);
            table();
        }).catch((error)=> {
            console.log(error)
        })

    },[]);

    return(
        <>
        <div id="wrapper">
        <Sidebar linkId="account"/>
        <div id="content-wrapper" className='d-flex flex-column'>
            <div id="content">
                <Header/>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Accounts</h1>
                        {createFormViewBtn}
                    </div>
                    <div className='row'>
                    <div className='mb-4' id="accountsTableCard">
                            <div className='card shadow md-4'>
                                <div className='card-header'>User Accounts</div>
                                <div className='card-body'>
                                    <div className='table-responsive'>
                                        <table className='table' id="accountsTable">
                                            <thead>
                                                <tr>
                                                    {columns.map((c)=> (
                                                        <th key={c.text} >{c.text}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {accounts.map((a)=> (
                                                    <tr id={a.userid} key={a.userid}>
                                                        <td>{a.firstname + " " + a.lastname}</td>
                                                        <td>{a.username}</td>
                                                        <td>{a.email}</td>
                                                        <td>{a.status}</td>
                                                        <td>
                                                            <button className='btn' onClick={(e)=>{onClickUpdate(a.userid)}}> 
                                                                <FaEdit /> 
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 mb-4' id="createCard">
                            <div className='card shadow md-4'>
                                {(btn != "null") && (
                                    <>
                                        {(btn == "create") && (<div className='card-header'> Create Account</div>)}
                                        {(btn == "update") && (<div className='card-header'> Update Account</div>)}
                                        <div className='card-body'>
                                            <form onSubmit={handleSubmit(onSubmit)} className='form' id='userform' >
                                                <div className='form-group'>
                                                    <label htmlFor='fname' hidden>First Name : </label>
                                                    <input className='form-control mb-4' type="text" 
                                                        name='firstname' id='fname' placeholder='First Name'
                                                        disabled={(btn == 'update') && (true)} 
                                                        {...register("firstname", { required: true })}/>
                                                    <input className='form-control mb-4' type="text"
                                                        name='lastname' id='lname' placeholder='Last Name'
                                                        disabled={(btn == 'update') && (true)} 
                                                        {...register("lastname", { required: true })}/>
                                                    <select className='form-control mb-4' name="role" id='role'
                                                        disabled={(btn == 'update') && (true)} 
                                                        {...register("role", { required: true })}>
                                                        <option value={null} selected>User Role</option>
                                                        <option value="Staff">Staff</option>
                                                        <option value="Customer">Individual Customer</option>
                                                    </select>
                                                    {(btn == 'update') && (
                                                        <>
                                                        <select className='form-control mb-4' name="status" id='status'
                                                            {...register("status", { required: true })}>
                                                            <option value={null} >Account Status</option>
                                                            <option value="Pending">Pending</option>
                                                            <option value="Approved">Approved</option>
                                                            <option value="Blocked">Blocked</option>
                                                        </select>
                                                        </>
                                                    )}
                                                    {(btn == 'create') && (
                                                        <>
                                                        <input className='form-control mb-4' type="email"
                                                            name='email' id='email' placeholder='Email'
                                                            {...register("email", { required: true })}/> 
                                                        <input className='form-control mb-4' type="text"
                                                            name='username' id='username' placeholder='Username'
                                                            {...register("username", { required: true })}/>
                                                        <input className='form-control mb-4' type="password"
                                                            name='password' id='password' placeholder='Password'/>
                                                        <input className='form-control mb-4' type="password"
                                                            name='re-enterpass' id='re-enterpass' 
                                                            placeholder='Re-enter Password'/>
                                                        </>
                                                    )}
                                                    {submitBtn}
                                                </div>
                                            </form>
                                        </div>
                                    </>
                                )}
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