
import "bootstrap/dist/css/bootstrap.css";
import Header from "../../components/provider/header";
import Sidebar from "../../components/provider/sidebar";
import Footer from "../../components/provider/footer";
import { useEffect, useState, useCallback } from "react";
import axios from "../../utils/axios";
import { useRouter } from "next/router";
import { FaMeetup, FaUserAlt, FaTachometerAlt, FaCogs, FaCashRegister, FaDollarSign, FaCalendar, FaHatCowboy, FaSquareFull, FaDotCircle, FaUserPlus, FaMinus } from 'react-icons/fa';

var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';


import { useForm } from 'react-hook-form';

export default function bookings() {
    const router = useRouter()
    const [eventids, seteventid] = useState([]);
    // const [btn, setBtn] = useState('null')
    // const [update, setUpdate] = useState('')
    // const [faqs, setfaqs] = useState([])
    // const [eventstaff, seteventStaff] = useState([]);
    const [events, setevents] = useState([]);
    const [eventProviders, setEventProviders] = useState([]);
    // const [registered_accounts, setRegistered_accounts] = useState([])
    // const { register, handleSubmit, watch, control, reset, setValue, formState: { errors } } = useForm();

    const columns = [{
        text: 'Name',
    },
    {
        text: 'Customer',
    },
    {
        text: 'Event Date'
    },
    {
        text: 'Booked Date'
    },
    {
        text: 'Location'
    },
    {
        text: 'Status'
    },
    {
        text: 'Action'
    }];

    //const viewEventDetails = useCallback((singleevent) => {
    // router.push(`./bookings/${singleevent}`);
    //}, [router]
    //);


    useEffect(() => {
        //const user_ = JSON.parse(localStorage.getItem('user'))
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


        const getEventProviders = () => {
            return axios.get("/eventprovider");
        }
        Promise.all([getEvents(), getEventProviders()]).then((res) => {

            let events = res[0].data.events;
            let eventProviders = res[1].data.eventProviders;
            events.forEach(e => {
                eventProviders.forEach(eventP => {
                    if (e._id == eventP._id) {
                        e.eventid = eventP.eventid;
                    }
                })
            });
            console.log(events);
            setEvents(events);
            table();

        }).catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="bookings" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Bookings</h1>
                            </div>
                            <div className='row'>
                                <div className='mb-4' id="bookingsTableCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Event Bookings</div>
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
                                                        {events.map((a) => (
                                                            <tr id={a._id} key={a._id}>
                                                                <td>{a.title}</td>
                                                                <td>{a.userName}</td>
                                                                <td>{(a.start_date).split('T')[0] + " to " + (a.end_date).split('T')[0]}</td>
                                                                <td>{a.createdAt}</td>
                                                                <td>{a.location}</td>
                                                                <td>
                                                                    {(a.status == "Pending") && (
                                                                        <>
                                                                            <h4 className="small font-weight-bold">{a.status}
                                                                                <span className="float-right">25%</span></h4>
                                                                            <div className="progress mb-4">
                                                                                <div className="progress-bar bg-warning" role="progressbar"
                                                                                    style={{ width: '20%' }}></div>
                                                                            </div>
                                                                        </>
                                                                    )}

                                                                    {(a.status == "Approved") && (
                                                                        <>
                                                                            <h4 className="small font-weight-bold">{a.status}
                                                                                <span className="float-right">50%</span></h4>
                                                                            <div className="progress mb-4">
                                                                                <div className="progress-bar bg-primary" role="progressbar"
                                                                                    style={{ width: '50%' }}></div>
                                                                            </div>
                                                                        </>
                                                                    )}

                                                                    {(a.status == "Paid") && (
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
                                                                                <div className="progress-bar bg-info" role="progressbar"
                                                                                    style={{ width: '100%' }}></div>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    {/* <button className='btn' onClick={(e) => { onClickUpdate(a._id) }}>
                                                                        <FaEdit />
                                                                    </button> */}
                                                                    <Link href={`bookings/${encodeURIComponent(a._id)}`}>
                                                                        <FaEdit />
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
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}