import React, { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import { FaEdit, FaUserPlus, FaWindowClose, FaEye, FaSpinner, FaCheck } from 'react-icons/fa';
import Header from "../../../components/staff/header";
import Sidebar from "../../../components/staff/sidebar";
import Footer from "../../../components/staff/footer";
// import { getSession } from 'next-auth/client'

var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';
import axios from '../../../utils/axios';
import { useForm } from 'react-hook-form';

export default function EventDetails() {
    const router = useRouter()
    const [eventData, setEventdata] = useState([]);
    const columns = [{
        text: 'Product / Service'
    }, {
        text: 'Providers'
    }, {
        text: 'Status'
    },];

    const eventstaffID = router.query.singleevent
    // const { id } = eventstaffID.singleevent
    // console.log('params', id)
    // axios.get(`/eventstaff/${eventstaffID}`).then((res) => {
    //     // let eventData = res.data.eventData
    //     setEventdata(eventData)
    // })
    console.log('eventData', eventData)
    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="bookings" />
                <div id="content-wrapper" className='d-flex flex-column '>
                    <div id="content" >
                        <Header />
                        {/* <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Bookings</h1>
                            </div>

                        </div> */}
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='card border-secondary shadow ' style={{ maxWidth: "60rem" }}>
                                <div className='d-flex align-items-center justify-content-between card-header h4 bg-secondary text-white'>
                                    <span>Event Title</span><span>Pending</span>
                                </div>
                                <div className='card-body row d-flex align-items justify-content-between'>
                                    <div className='container col-md-4  mt-0'>
                                        <h5 class="card-title">Event Details</h5>
                                        <p class="card-text">Event Description</p>
                                        <p class="card-text">Created Date: 27-08-2022</p>
                                        <p class="card-text">Start Date: 08-09-2022</p>
                                        <p class="card-text">End Date: 08-09-2022</p>
                                        <p class="card-text">Venue: address of the place</p>
                                        <p class="card-text">No of Participants: 30</p>
                                    </div>
                                    <div className='container col-md-4  mt-0'><h5 class="card-title">Package: packagetype</h5>
                                        <div className='table-responsive'>
                                            <table className='table'>
                                                <thead>
                                                    <tr>
                                                        {columns.map((c) => (
                                                            <th key={c.text} >{c.text}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Love Cake</td>
                                                        <td>Perera and Sons</td>
                                                        <td><FaSpinner /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Reception Hall</td>
                                                        <td>Happy Venue</td>
                                                        <td><FaCheck /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className='container col-md-4  mt-0'>
                                        <h5 class="card-title">Monitored By </h5>
                                        <p class="card-text">Person who monitor it</p>
                                    </div>
                                    <div className='container col-md-4  mt-3'>
                                        <h5 class="card-title">Advance Payment</h5>
                                        <p class="card-text">Payment Status: statshere</p>
                                        <p class="card-text">Advance Amount: Rs. 5000.00</p>
                                        <p class="card-text">PaymentDate: 08-09-2022</p>
                                    </div>
                                    <div className='container col-md-4  mt-3'>
                                        <h5 class="card-title">Final Payment</h5>
                                        <p class="card-text">Payment Status: statshere</p>
                                        <p class="card-text">Final Amount: Rs. 15000.00</p>
                                        <p class="card-text">PaymentDate: 08-09-2022</p>
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

