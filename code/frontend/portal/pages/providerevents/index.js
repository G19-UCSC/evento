import Footer from "../../components/home/footer"
import Header from "../../components/home/header"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../../utils/product';
import { CartContext, CartDispatchContext } from '../../context/productContext';
import axios from '../../utils/axios'
import React, { useContext, useState, useEffect } from 'react'
<script type="text/javascript" src="../../public/js/sidebar.js"></script>

import { FaAlignJustify, FaDollarSign, FaShoppingCart, FaRegCalendarAlt, FaRegPlayCircle, FaQuestionCircle, FaUserPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';
import { useForm } from 'react-hook-form';

export default function providerevent() {
const [events, setEvents] = useState([]);
const [eventProviders, setEventProviders] = useState([]);

const columns = [
    {
        text: 'Name',
    },
    {
        text: 'Event Date'
    },
    {
        text: 'Booked Date'
    },
    {
        text: 'Status'
    },
    {
        text: 'Progress'
    },
    {
        text: 'Action'
    }
    ]

    const table = () => {
        $(function () {
            $('#eventsTable').DataTable({
                ordering: true,
                select: true,
                responsive: true,
                buttons: [
                    'copy', 'excel', 'pdf'
                ]
            });
        });
    }

    useEffect(() => {

        const user_ = JSON.parse(localStorage.getItem('user'))

    

    const getEvents = () => {
        return axios.get("/event");
    }

    const getEventProviders = () => {
        return axios.get("/eventprovider");
    }


    Promise.all([getEvents(), getEventProviders()]).then((res) => {
        let events = res[0].data.events;
        let eventProviders = res[1].data.eventProviders;
        console.log('events', events)
        console.log(user_)
        let myevents = []
        events.forEach(e => {
            eventProviders.forEach(eventP => {
                if ((e._id == eventP.eventid) && (eventP.providerid == user_.userid)) {
                    e.eventid = eventP.eventid;
                    myevents.push(e);
                }
            })
        });
        console.log('myevents',myevents);
        setEvents(myevents);
        table();
    }).catch((error) => {
        console.log(error)
    })

}, [])

return (
    <div class="site-wrap">
        <Header />

        <div class="bg-light py-3">
            <div class="container">


                <div class="row">
                    <div class="col-md-12 mb-0">
                        <a href="index.html">Events</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Events</strong></div>
                </div>
            </div>
        </div>


        <div class="site-section">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-9 order-2">


                        <div class="row mb-5">
                            <h1 className="h3 mb-0 text-gray-800">Events</h1>

                        </div>

                        <div className='row'>
                            <div className='mb-4' id="eventsTableCard">
                                <div className='card shadow md-4'>
                                    <div className='card-header'>Events</div>
                                    <div className='card-body'>
                                        <div className='table-responsive'>
                                            <table className='table' id="eventsTable">
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
                                                                <Link href={`providerevents/${encodeURIComponent(a._id)}`}>
                                                                    <FaEdit />
                                                                </Link>

                                                                {/*<button className='btn' onClick={(e) => { onClickAccept() }}> Accept </button>
                                                                    <FaEdit />
                                                                </button> */}
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

                        <div class="col-md-3 order-1 mb-5 mb-md-0">

                            <div class="border p-4 rounded mb-4">
                                <a href="./provider" class="h6 list-group-item"><FaAlignJustify color='black' fontSize="16px" padding-left='10' /><span class="p-4">Dashboard</span></a>
                                <a href="./product" class="h6 list-group-item "><FaRegPlayCircle color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Products</span></a>
                                <a href="./providerservice" class="h6 list-group-item "><FaRegCalendarAlt color='black' fontSize="16px" padding-left='10' /><span class="p-4">Services</span></a>
                                <a href="./purchase" class="h6 list-group-item "><FaShoppingCart color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Purchases</span></a>
                                <a href="./servicebooking" class="h6 list-group-item "><FaDollarSign color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Bookings</span></a>
                                <a href="#" class="h6 list-group-item active"><FaQuestionCircle color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Events</span></a>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
)
}