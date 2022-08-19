import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import { FaCross, FaEdit, FaTachometerAlt, FaUserPlus, FaWindowClose } from 'react-icons/fa';
import Header from  "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";
import Footer from "../components/dashboard/footer";

var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';
import axios from '../utils/axios';
import { useForm } from 'react-hook-form';

export default function account () {

    // const [create,setCreate] = useState(false)
    // const [update,setUpdate] = useState(false)
    const [btn,setBtn] = useState('null')
    const [accounts,setAccounts] = useState([])
    const [registered_accounts,setRegistered_accounts] = useState([])
    const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm();

    // const registered_accounts = [{
    //     id: "1",
    //     username: "nimal@1",
    //     status: "blocked"
    // },{
    //     id: "2",
    //     username: "nimal@2",
    //     status: "pending"
    // },];

    accounts.forEach(a => {
        registered_accounts.forEach(r => {
            if(a.id === r.id){
                a.username = r.username;
                a.status = r.status;
                
            }
        })
    });

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
        submitBtn = <button className="w-100 btn btn-secondary btn-lg" > Create Account </button>
    }
    else if(btn == 'update'){
        submitBtn = <button className="w-100 btn btn-secondary btn-lg" > Update Account </button>
    }

    function onClickCreate(e){
        if(btn == 'null'){
            setBtn('create');
        }else{
            setBtn('null');
        }
        document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
    }

    function onClickUpdate(e){
        if(btn == 'null'){
            setBtn('update');
        }else{
            setBtn('null');
        }
        document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
    }

    function onClickCancel(e){
        setBtn('null');
        document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
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

        axios.get("/user").then((res)=>{
            setAccounts(res.data.users)
            table();
        }).catch((error) => {
            console.log(error.response.data)
        });

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
                                                        <th>{c.text}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {accounts.map((a)=> (
                                                    <tr id={a._userid} >
                                                        <td>{a.firstname + " " + a.lastname}</td>
                                                        <td>{a.username}</td>
                                                        <td>{a.email}</td>
                                                        <td>{a.status}</td>
                                                        <td>
                                                            <button className='btn' onClick={(e)=>{onClickUpdate()}}> 
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
                                            <form className='form'>
                                                <div className='form-group'>
                                                    <label htmlFor='fname' hidden>First Name : </label>
                                                    <input className='form-control mb-4' type="text" 
                                                    name='fname' placeholder='First Name'/>
                                                    <label htmlFor='fname' hidden>Last Name : </label>
                                                    <input className='form-control mb-4' type="text"
                                                    name='lname' placeholder='Last Name'/>
                                                    <label htmlFor='fname' hidden>User Role : </label>
                                                    <select className='form-control mb-4'>
                                                        <option value={null} selected>User Role</option>
                                                        <option value="Staff">Staff</option>
                                                        <option value="Customer">Individual Customer</option>
                                                        <option value="CorpCustomer">Corporate Customer</option>
                                                        <option value="Provider">Provider</option>
                                                    </select>
                                                    <label htmlFor='fname' hidden>Email : </label> 
                                                    <input className='form-control mb-4' type="email"
                                                    name='email' placeholder='Email'/>
                                                    <label htmlFor='fname' hidden>Username : </label> 
                                                    <input className='form-control mb-4' type="text"
                                                    name='username' placeholder='Username'/>
                                                    <label htmlFor='fname' hidden>Password : </label>
                                                    <input className='form-control mb-4' type="password"
                                                    name='password' placeholder='Password'/>
                                                    <label htmlFor='fname' hidden>Re-enter Password : </label> 
                                                    <input className='form-control mb-4' type="password"
                                                    placeholder='Re-enter Password'/>
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