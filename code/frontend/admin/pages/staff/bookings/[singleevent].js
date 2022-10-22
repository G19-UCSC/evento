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
    const [packageData, setpackagedata] = useState([]);
    const [packageProducts, setpackageproducts] = useState([]);
    const [packageServices, setpackageservices] = useState([]);
    const [assignedStaff, setallassignendstaff] = useState([]);
    const columns = [{
        text: 'Product / Service'
    }, {
        text: 'Providers'
    }, {
        text: 'Status'
    },];

    const eventid = router.query.singleevent
    // const { id } = eventstaffID.singleevent
    console.log('params', eventid)
    useEffect(() => {
        const user_ = JSON.parse(localStorage.getItem('user'))
        // console.log('paramss', eventid)
        axios.get(`/event/${eventid}`).then((res) => {
            let eventData = res.data.event
            setEventdata(eventData)

            const getpacakedeials = axios.get(`/package/${eventData.packageid}`);
            let getallpackageproduct = axios.get("/packageproduct");
            let getallproductdetails = axios.get("/product");
            // let getallservicedetails = axios.get("/service");
            let getalleventstaff = axios.get("/eventstaff");
            let getallusers = axios.get("/users");

            Promise.all([getpacakedeials, getallpackageproduct, getallproductdetails, getalleventstaff, getallusers]).then((res) => {
                // axios.get(`/package/${eventData.packageid}`).then((res) => {
                let pacakedetails = res[0].data.package;
                let allpackageproduct = res[1].data.packageproducts;
                let allproductdetails = res[2].data.products;
                // let allservicedetails = res[3].data.service;
                let alleventstaff = res[3].data.alleventstaff;
                console.log('alleventstaff', alleventstaff)

                let eventstaff = alleventstaff.filter(element => (element.eventid == eventid))
                let getallusers = res[5].data.users
                setpackagedata(pacakedetails)
                alleventstaff.forEach(alles => {
                    if (alles.eventid == eventid) {
                        getallusers.forEach(u => {
                            if (alles.userid == u._id) {
                                setallassignendstaff(user => [...user, u])
                            }

                        });

                    }
                });
                allpackageproduct.forEach(apac => {
                    if (apac.packageid == eventData.packageid) {

                        allproductdetails.forEach(alpro => {
                            // console.log("alpro.id", alpro._id)
                            // console.log("eventData.packageid", eventData.packageid)
                            // console.log("apac.productid", apac.productid)
                            if (alpro._id == apac.productid) {
                                setpackageproducts(product => [...product, alpro])
                            }

                        });
                        allservicedetails.forEach(alser => {
                            if (alser._id == apac.productid) {
                                setpackageservices(service => [...service, alser])
                            }

                        });

                    }

                });

            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
        })

    }, [eventid])

    console.log('eventData', eventData)

    console.log('packageServices', packageServices)


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
                                    <span>{eventData.title}</span><span>{eventData.status}</span>
                                </div>
                                <div className='card-body row d-flex align-items justify-content-between'>
                                    <div className='container col-md-4  mt-0'>
                                        <h5 className="card-title">Event Details</h5>
                                        {/* <p className="card-text">Event Description</p> */}
                                        <p className="card-text">Created Date: {eventData.createdAt}</p>
                                        <p className="card-text">Start Date: {eventData.start_date}</p>
                                        <p className="card-text">End Date: {eventData.end_date}</p>
                                        <p className="card-text">Venue:{eventData.location}</p>
                                        <p className="card-text">No of Participants: {eventData.maxPeople}</p>
                                    </div>
                                    <div className='container col-md-4  mt-0'><h5 className="card-title">Package: {packageData.category}</h5>

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
                                                    {packageProducts.map((a) => (
                                                        <tr id={a._id} key={a.i}>
                                                            <td>{a.name}</td>
                                                            <td>Perera and Sons</td>
                                                            <td><FaSpinner /></td>
                                                        </tr>
                                                    ))}
                                                    {packageServices.map((b) => (
                                                        <tr id={b._id} key={b.i}>
                                                            <td>{b.name}</td>
                                                            <td>Happy Venue</td>
                                                            <td><FaCheck /></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className='container col-md-4  mt-0'>
                                        <h5 className="card-title">Monitored By </h5>
                                        <p className="card-text">{assignedStaff.firstname + " " + assignedStaff.lastname}</p>
                                    </div>
                                    <div className='container col-md-4  mt-3'>
                                        <h5 className="card-title">Advance Payment</h5>
                                        <p className="card-text">Payment Status:{eventData.advanceStatus}</p>
                                        <p className="card-text">Advance Amount:{eventData.advance == null ? <span>Payment Pending</span> : <span>Rs.{' '}{eventData.advance}</span>}</p>
                                        <p className="card-text">PaymentDate: {eventData.advanceDate == null ? <span>Payment Pending</span> : <span>{eventData.advanceDate.split('T')[0]}</span>}</p>
                                    </div>
                                    <div className='container col-md-4  mt-3'>
                                        <h5 className="card-title">Final Payment</h5>
                                        <p className="card-text">Payment Status:{eventData.finalPayStatus}</p>
                                        <p className="card-text">Final Amount:{eventData.finalPay == null ? <span>Payment Pending</span> : <span>Rs.{' '}{eventData.finalPay}</span>}</p>
                                        <p className="card-text">PaymentDate:{eventData.finalPayDate == null ? <span>Payment Pending</span> : <span>{eventData.finalPayDate.split('T')[0]}</span>}</p>
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

