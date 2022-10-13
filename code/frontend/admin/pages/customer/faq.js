import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import { FaEdit, FaUserPlus, FaWindowClose } from 'react-icons/fa';
import Header from "../../components/customer/header";
import Sidebar from "../../components/customer/sidebar";
import Footer from "../../components/customer/footer";
// import { getSession } from 'next-auth/client'

var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';
import axios from '../../utils/axios';
import { useForm } from 'react-hook-form';

export default function account() {
    const router = useRouter()
    const [btn, setBtn] = useState('null')
    const [update, setUpdate] = useState('')
    const [faqs, setfaqs] = useState([])
    const [user, setUser] = useState([]);
    // const [registered_accounts, setRegistered_accounts] = useState([])
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
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Update Question </button>
    }
    // const arr = [];

    const findElementById = (arr, id) => arr.filter(element => element._id == id);
    const removeElementById = (arr, id) => arr.filter(element => element._id !== id);

    const setForm = (id) => {
        // console.log('question id', id)
        // console.log('question faq', faqs)
        const faq = findElementById(faqs, id)[0];
        console.log('the faq', faq);
        setValue('question', faq.question);
        // setValue('lastname', account.lastname);
        // setValue('status', account.status);
        // setValue('role', account.role);
        setUpdate(id)
    }
    function onClickCreate(e) {
        if (btn == 'null') {
            setBtn('create');
            document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
        }
    }

    function onClickUpdate(_id) {
        console.log(_id)
        if (btn == 'null' && _id != '') {
            setBtn('update');
            setForm(_id);
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
            console.log('update'.update)
            let u = findElementById(faqs, update)[0];
            console.log('get elements', u)
            formData.id = update
            // formData.question = req.data.question
            // formData.answer = u.answer
            // formData.password = u.password
            // formData.contact = u.contact
            // formData.address = u.address
            // if(formData.status == 'Approved'){
            //     formData.approvedAt = Date();
            // }else{
            //     formData.approvedAt = u.approvedAt
            // }

            console.log('formData', formData)
            axios.put(`/faq/${update}`, formData).then((res) => {
                const newQuestion = res.data.faq.res[0]
                setfaqs([formData].concat(removeElementById(faqs, newQuestion.id)))
            }).catch((error) => {
                console.log(error)
            })
            router.reload('/customer/faq')

            onClickCancel();
        } else {
            // let u = findElementById(faqs)[0];
            // formData.question = u.question
            // formData.answer = u.answer
            console.log(formData)
            axios.post(`/faq`, formData).then((res) => {
                const newQuestion = res.data.faqs
                console.log('userData', userData)
                setfaqs([formData].concat(removeElementById(faqs, newQuestion)))
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
        const user_ = JSON.parse(localStorage.getItem('user'))

        if (user_) {
            // setUser(user_)
            axios.get(`/user/${user_.userid}`).then((res) => {
                setUser(user_)
            })
        }


        axios.get("/faq").then((res) => {
            // console.log('faqs', res)
            // console.log('user', user_.userid)
            let allfaqs = res.data.faqs
            allfaqs.forEach(q => {
                if (user_.userid == q.userid) {
                    // console.log("q", q)
                    setfaqs(faq => [...faq, q]);
                }
            });


            // if (user_.userid == res.data.faqs.userid) {
            //     setfaqs(res.data.faqs);

            // }
            // setfaqs(faqs);
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


    // const session = getSession();
    // console.log('session user', session.user)

    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="faq" />
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
                                                            <tr id={a._id} key={a._id}>
                                                                <td>{a.question}</td>
                                                                <td>{a.answer == null ? <span className='text-info'>We will get to you soon... </span> : a.answer}</td>
                                                                <td>
                                                                    {a.answer == null ? <button className='btn' onClick={(e) => { onClickUpdate(a._id) }}>
                                                                        <FaEdit />
                                                                    </button> : ' '}

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
                                                {(btn == "update") && (<div className='card-header'> Update Question</div>)}
                                                <div className='card-body'>
                                                    <form onSubmit={handleSubmit(onSubmit)} className='form' id='userform' >
                                                        <div className='form-group'>
                                                            <label htmlFor='fname' hidden>Question: </label>

                                                            {(btn == 'update') && (
                                                                <>
                                                                    <input className='form-control mb-4' type="text"
                                                                        name='question' id='question' placeholder='Enter Your Question'
                                                                        disabled={(btn == 'create') && (true)}
                                                                        {...register("question", { required: true })} />
                                                                </>
                                                            )}
                                                            {(btn == 'create') && (
                                                                <>

                                                                    <input className='form-control mb-4' type="text"
                                                                        name='userid' id='userid' placeholder={user.userid} value={user.userid}
                                                                        disabled={(btn == 'update') && (true)}
                                                                        {...register("userid", { required: true })} hidden />
                                                                    <input className='form-control mb-4' type="text"
                                                                        name='question' id='question' placeholder='Enter Your Question'
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