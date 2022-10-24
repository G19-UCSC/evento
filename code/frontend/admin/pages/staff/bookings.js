import React, { useEffect, useState, useCallback } from 'react'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import { FaEdit, FaUserPlus, FaWindowClose, FaEye } from 'react-icons/fa';
import Header from "../../components/staff/header";
import Sidebar from "../../components/staff/sidebar";
import Footer from "../../components/staff/footer";
// import { getSession } from 'next-auth/client'

var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';
import axios from '../../utils/axios';

export default function account() {
    const [eventids, seteventid] = useState([]);
    // const [btn, setBtn] = useState('null')
    // const [update, setUpdate] = useState('')
    // const [faqs, setfaqs] = useState([])
    // const [eventstaff, seteventStaff] = useState([]);
    const [events, setevents] = useState([]);
    // const [registered_accounts, setRegistered_accounts] = useState([])
    // const { register, handleSubmit, watch, control, reset, setValue, formState: { errors } } = useForm();

    const columns = [{
        text: 'Customer'
    }, {
        text: 'Event Date'
    }, {
        text: 'Booked Date'
    }, {
        text: 'Status'
    }, {
        text: 'Progress'
    }, {
        text: 'Action'
    },];



    useEffect(() => {
        const user_ = JSON.parse(localStorage.getItem('user'))
        const table = () => {
            $(function () {
                $('#bookingsTable').DataTable({
                    ordering: true,
                    select: true,
                    responsive: true,
                    buttons: [
                        'copy', 'excel', 'pdf'
                    ]
                });
            });
        }

        const getEvents = () => {
            return axios.get("/event");
        }

        const getUsers = () => {
            return axios.get("/user");
        }
        const getEventStaff = () => {
            return axios.get("/eventstaff");
        }

        Promise.all([getEvents(), getUsers(), getEventStaff()]).then((res) => {
            let events = res[0].data.events;
            let users = res[1].data.users;
            let alleventstaff = res[2].data.alleventstaff
            let eventstaff = alleventstaff.filter(element => (element.userid == user_.userid) && (element.status == "Assigned"))
            // let selectedevents = events.filter(element => element.id == eventstaff.eventid)

            eventstaff.forEach(eventS => {
                events.forEach(e => {
                    if ((e._id == eventS.eventid) && (eventS.status == "Assigned")) {
                        users.forEach(u => {
                            if (e.userid == u._userid) {
                                e.userName = u.firstname + " " + u.lastname;
                                setevents(event => [...event, e]);
                            }
                        })
                    }

                });
            });
            // setevents(events)
            // console.log('eventstaff', eventstaff);
            // console.log('selectedevents', selectedevents);

            table();

        }).catch((error) => {
            console.log(error)
        })
        // axios.get("/eventstaff").then((res) => {
        //     let eventstaffs = res.data.alleventstaff

        //     let i = 0;
        //     eventstaffs.forEach(e => {
        //         if ((user_.userid == e.userid) && (e.status == 'Assigned')) {

        //             axios.get(`/event/${e.eventid}`).then((res) => {
        //                 let eventdetails = res.data.event
        //                 console.log('eventdetails', eventdetails);
        //                 // console.log('eventdetails', eventdetails.status);

        //                 setevents(details => [...details, eventdetails]);


        //             })
        //         }

        //     });
        // }).catch((error) => {
        //     console.log(error)
        // })


    }, [])


    console.log('eventids', eventids)
    console.log('events', events)

    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="bookings" />
                <div id="content-wrapper" className='d-flex flex-column'>
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Bookings</h1>
                                {/* {createFormViewBtn} */}
                            </div>
                            <div className='row'>
                                <div className='mb-4' id="accountsTableCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Bookings</div>
                                        <div className='card-body'>
                                            <div className='table-responsive'>
                                                <table className='table' id="bookingsTable">
                                                    <thead>
                                                        <tr>
                                                            {columns.map((c) => (
                                                                <th key={c.text} >{c.text}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* {faqs.map((a) => (
                                                            <tr id={a._id} key={a._id}>
                                                                <td>{a.question}</td>
                                                                <td>{a.answer == null ? <span className='text-info'>We will get to you soon... </span> : a.answer}</td>
                                                                <td>
                                                                    {a.answer == null ? <button className='btn' onClick={(e) => { onClickUpdate(a._id) }}>
                                                                        <FaEdit />
                                                                    </button> : ' '}

                                                                </td>
                                                            </tr>
                                                        ))} */}
                                                        {events.map((a) => (
                                                            <tr id={a._id} key={a._id}>
                                                                <td>{a.userName}</td>
                                                                <td>{a.start_date.split('T')[0]}</td>
                                                                <td>{a.createdAt.split('T')[0]}</td>
                                                                <td>{a.status}</td>
                                                                <td>
                                                                    {(a.status == "Pending") && (
                                                                        <>
                                                                            <h4 className="small font-weight-bold">{a.status}
                                                                                <span className="float-right">25%</span></h4>
                                                                            <div className="progress mb-4">
                                                                                <div className="progress-bar bg-secondary" role="progressbar"
                                                                                    style={{ width: '25%' }}></div>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                    {(a.status == "Approved") && (
                                                                        <>
                                                                            <h4 className="small font-weight-bold">{a.status}
                                                                                <span className="float-right">50%</span></h4>
                                                                            <div className="progress mb-4">
                                                                                <div className="progress-bar bg-warning" role="progressbar"
                                                                                    style={{ width: '50%' }}></div>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                    {(a.status == "Paied") && (
                                                                        <>
                                                                            <h4 className="small font-weight-bold">{a.status}
                                                                                <span className="float-right">75%</span></h4>
                                                                            <div className="progress mb-4">
                                                                                <div className="progress-bar bg-info" role="progressbar"
                                                                                    style={{ width: '75%' }}></div>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                    {(a.status == "Completed") && (
                                                                        <>
                                                                            <h4 className="small font-weight-bold">{a.status}
                                                                                <span className="float-right">100%</span></h4>
                                                                            <div className="progress mb-4">
                                                                                <div className="progress-bar bg-success" role="progressbar"
                                                                                    style={{ width: '100%' }}></div>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </td>
                                                                <td className='align-items-center justify-content-center'>
                                                                    <Link href={`bookings/${encodeURIComponent(a._id)}`}><FaEye />
                                                                    </Link>
                                                                </td>

                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='col-lg-6 mb-4' id="createCard">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}