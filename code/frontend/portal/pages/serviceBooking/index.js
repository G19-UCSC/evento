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

export default function serviceBooking() {
    const router = useRouter()
    const [eventids, seteventid] = useState([]);
    const [btn, setBtn] = useState('null')
     const [update, setUpdate] = useState('')
    const [events, setevents] = useState([]);
    const [eventProviders, setEventProviders] = useState([]);
  

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

   

    useEffect(() => {
        //const user_ = JSON.parse(localStorage.getItem('user'))
        const table = () => {
            $(function () {
                $('#serviceBookingsTable').DataTable({
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
        <div class="site-wrap">
            <Header />

            <div class="bg-light py-3">
                <div class="container">


                    <div class="row">
                        <div class="col-md-12 mb-0">
                            <a href="index.html">Service Bookings</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Service Bookings</strong></div>
                    </div>
                </div>
            </div>


            <div class="site-section">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md-9 order-2">


                            <div class="row mb-5">
                                <h1 className="h3 mb-0 text-gray-800">Service Bookings</h1>

                            </div>

                            <div className='row'>
                                <div className='mb-4' id="serviceBookingsTableCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Service Bookings</div>
                                        <div className='card-body'>
                                            <div className='table-responsive'>
                                                <table className='table' id="serviceBookingsTable">
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
                                                                    <Link href={`servicebookings/${encodeURIComponent(a._id)}`}>
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

                            <div class="col-md-3 order-1 mb-5 mb-md-0">

                                <div class="border p-4 rounded mb-4">
                                    <a href="./provider" class="h6 list-group-item active"><FaAlignJustify color='black' fontSize="16px" padding-left='10' /><span class="p-4">Dashboard</span></a>
                                    <a href="#" class="h6 list-group-item "><FaRegPlayCircle color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Products</span></a>
                                    <a href="#" class="h6 list-group-item "><FaRegCalendarAlt color='black' fontSize="16px" padding-left='10' /><span class="p-4">Services</span></a>
                                    <a href="#" class="h6 list-group-item "><FaShoppingCart color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Purchases</span></a>
                                    <a href="#" class="h6 list-group-item "><FaDollarSign color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Bookings</span></a>
                                    <a href="#" class="h6 list-group-item "><FaQuestionCircle color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Events</span></a>

                                </div>

                            </div>
                        </div>
                    </div>
              
                </div>
            </div>
        </div>
    )
}