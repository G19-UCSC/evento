import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import { FaEdit, FaUserPlus, FaWindowClose } from 'react-icons/fa';
import Header from "../../components/customer/header";
import Sidebar from "../../components/customer/sidebar";
import Footer from "../../components/customer/footer";

var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';
import axios from '../../utils/axios';
import { useForm } from 'react-hook-form';

export default function account() {

    const [btn, setBtn] = useState('null')
    const [update, setUpdate] = useState('')
    const [faqs, setfaqs] = useState([])
    const [registered_accounts, setRegistered_accounts] = useState([])
    const { register, handleSubmit, watch, control, reset, setValue, formState: { errors } } = useForm();

    const columns = [{
        text: 'Question'
    }, {
        text: 'Answer'
    }, {
        text: 'Action'
    },];

    let createFormViewBtn;

    if (btn == 'null') {
        createFormViewBtn = <button className="btn" onClick={e => onClickCreate()} id="createBtn"> <FaUserPlus /> Add Question </button>
    }
    else {
        createFormViewBtn = <button className="btn" onClick={e => onClickCancel()}> <FaWindowClose /> Cancel </button>
    }

    let submitBtn;

    if (btn == 'create') {
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Add Question </button>
    }
    else if (btn == 'update') {
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Update Account </button>
    }

    const findElementById = (id) => filter(element => element.id == id);
    const removeElementById = (id) => filter(element => element.id !== id);

    const setForm = (id) => {
        const faqs = findElementById(faqs, id);
        console.log(faqs);
        setValue('question', faqs.question);
        // setValue('answer', faqs.answer);
        setUpdate(id)
    }

    function onClickCreate(e) {
        if (btn == 'null') {
            setBtn('create');
            document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
        }
    }

    function onClickUpdate(id) {
        console.log(id)
        if (btn == 'null' && id != '') {
            setBtn('update');
            setForm(id);
            document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
        }

    }

    function onClickCancel(e) {
        setBtn('null');
        document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
        reset({
            question: ''
        })
    }

    const onSubmit = (formData) => {

        if (btn == 'update' && update != '') {
            let u = findElementById(faqs, update);
            formData.id = update
            formData.question = u.question
            // formData.answer = u.answer


            console.log(formData)
            axios.put(`/ruser/${update}`, formData).then((res) => {
                const newAccount = res.data.faq
                setfaqs([formData].concat(removeElementById(faqs, newAccount._id)))
            }).catch((error) => {
                console.log(error)
            })

            onClickCancel();
        } else {
            // let u = findElementById(faqs)[0];
            // formData.question = u.question
            // formData.answer = u.answer


            console.log(formData)
            axios.post(`/faq`, formData).then((res) => {
                const newAccount = res.data.faq
                setfaqs([formData].concat(removeElementById(faqs, newAccount)))
            }).catch((error) => {
                console.log(error)
            })

            onClickCancel();
        }
    }

    useEffect(() => {
        const table = () => {
            $(function () {
                $('#accountsTable').DataTable({
                    ordering: true,
                    select: true,
                    responsive: true,
                    buttons: [
                        'copy', 'excel', 'pdf'
                    ]
                });
            });
        }

        axios.get("/faq").then((res) => {
            console.log(res)
            setfaqs(res.data.faqs);
            // table();
        }).catch((error) => {
            console.log(error)
        })
        // const getUsers = () => {
        //     return axios.get("/user");
        // }

        // const getRUsers = () => {
        //     return axios.get("/ruser");
        // }

        // Promise.all([getUsers(), getRUsers()]).then((res) => {
        //     let users = res[0].data.users;
        //     let rusers = res[1].data.users;
        //     rusers.forEach(r => {
        //         users.forEach(u => {
        //             if (u._userid == r.userid) {
        //                 r.firstname = u.firstname;
        //                 r.lastname = u.lastname;
        //                 r.email = u.email;

        //             }
        //         })
        //     });
        //     setAccounts(rusers);
        //     table();
        // }).catch((error) => {
        //     console.log(error)
        // })

    }, []);

    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="account" />
                <div id="content-wrapper" className='d-flex flex-column'>
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">FAQ</h1>
                                {createFormViewBtn}
                            </div>
                            <div className='row'>
                                <div className='mb-4' id="accountsTableCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Inquire</div>
                                        <div className='card-body'>
                                            <div className='table-responsive'>
                                                <table className='table' id="accountsTable">
                                                    <thead>
                                                        <tr>
                                                            {columns.map((c) => (
                                                                <th key={c.text} >{c.text}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {faqs.map((a) => (
                                                            <tr id={a.id} key={a.id}>
                                                                <td>{a.question}</td>
                                                                <td>{a.answer == null ? 'We will get to you soon...' : a.answer}</td>
                                                                <td>
                                                                    <button className='btn' onClick={(e) => { onClickUpdate(a.id) }}>
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
                                                {(btn == "create") && (<div className='card-header'> Add Question</div>)}
                                                {(btn == "update") && (<div className='card-header'> Update Account</div>)}
                                                <div className='card-body'>
                                                    <form onSubmit={handleSubmit(onSubmit)} className='form' id='userform' >
                                                        <div className='form-group'>
                                                            <label htmlFor='fname' hidden>Question: </label>
                                                            {/* <input className='form-control mb-4' type="text"
                                                                name='question' id='queston' placeholder='Enter Your Question'
                                                                disabled={(btn == 'update') && (true)}
                                                                {...register("question", { required: true })} /> */}
                                                            {/* <input className='form-control mb-4' type="text"
                                                                name='lastname' id='lname' placeholder='Last Name'
                                                                disabled={(btn == 'update') && (true)}
                                                                {...register("lastname", { required: true })} />
                                                            <select className='form-control mb-4' name="role" id='role'
                                                                disabled={(btn == 'update') && (true)}
                                                                {...register("role", { required: true })}>
                                                                <option value={null} selected>User Role</option>
                                                                <option value="Staff">Staff</option>
                                                                <option value="Customer">Individual Customer</option>
                                                            </select> */}
                                                            {(btn == 'update') && (
                                                                <>
                                                                    <input className='form-control mb-4' type="text"
                                                                        name='question' id='queston' placeholder='Enter Your Question'
                                                                        disabled={(btn == 'update') && (true)}
                                                                        {...register("question", { required: true })} />
                                                                </>
                                                            )}
                                                            {(btn == 'create') && (
                                                                <>
                                                                    <input className='form-control mb-4' type="text"
                                                                        name='question' id='queston' placeholder='Enter Your Question'
                                                                        disabled={(btn == 'update') && (true)}
                                                                        {...register("question", { required: true })} />
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
                    <Footer />
                </div>
            </div>
        </>
    )
}