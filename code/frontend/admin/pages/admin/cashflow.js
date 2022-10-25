import "bootstrap/dist/css/bootstrap.css";
import Header from  "../../components/admin/header";
import Sidebar from "../../components/admin/sidebar";
import Footer from "../../components/admin/footer";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";

import { FaEdit, FaTimesCircle, FaUserPlus, FaWindowClose, FaSpinner, FaCheckCircle } from 'react-icons/fa';

export default function cashflow() {

    const [payments,setPayments] = useState([]);
    const [purchases, setPurchases] = useState([]);
    const [bookings, setBookings] = useState([]);

    const columns = [
        {
            text: 'Customer',
        },
        {
            text: 'Date'
        },
        {
            text: 'Type'
        },
        {
            text: 'Pending Income'
        },
        {
            text: 'Provider Payment'
        },
        {
            text: 'Action'
        }
    ]

    function setUserName(users, details) {
        if(typeof details === 'undefined'){
            details = []
        }
        else{
            details.forEach(d => {
                d.firstname = users.filter(element => element._userid == d.userid)[0].firstname
                d.lastname = users.filter(element => element._userid == d.userid)[0].lastname
            })
        }
        return details;
    }

    function setServicePrice(services, details) {
        details.forEach(d => {
            details.price = services.filter(element => element._id == d.productid)[0].price
        })
        return details;
    }

    function getDateOnly(string) {
        return (string).split('T')[0];
    }

    function payPurchaseProvider(id) {
        console.log(id);
        let data = purchases.filter(element => element._id == id)
        data.ProviderPayStatus = "Paid"
        data.ProviderPayDate = Date();
        console.log(data)

        if(data.eventid == null){
            axios.put(`/productPayment/${id}`,data).then((res)=>{
                console.log(res)
                alert("Provider Payment Successful")
            }).catch((err)=>{
                console.log(err)
            })
        }
        
    }

    function payServiceProvider(id) {
        console.log(id);
        let data = bookings.filter(element => element._id == id)
        data.ProviderPayStatus = "Paid"
        data.ProviderPayDate = Date();
        console.log(data)

        if(data.eventid == null){
            axios.put(`/serviceBooking/${id}`,data).then((res)=>{
                console.log(res)
                alert("Provider Payment Successful")
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

    useEffect(()=>{
        const getEvents = () => {
            return axios.get("/event");
        }

        const getPurchases = () => {
            return axios.get("/productPayment");
        }

        const getServiceBookings = () => {
            return axios.get("/serviceBooking");
        }

        const getUsers = () => {
            return axios.get("/user")
        }

        const getServices = () => {
            return axios.get("/service")
        }

        Promise.all([getEvents(),getPurchases(),getServiceBookings(),getUsers(),getServices()]).then((res) => {
            let payments = res[0].data.events;
            let purchases = res[1].data.payments;
            let bookings = res[2].data.bookings;
            let users = res[3].data.users;
            let services = res[4].data.service;
            console.log(res);
            payments = setUserName(users, payments)
            purchases = setUserName(users, purchases)
            bookings = setUserName(users, bookings)
            bookings = setServicePrice(services, bookings)
            payments.forEach(b => {
                b.start_date = getDateOnly(b.start_date)
            })
            purchases.forEach(b => {
                b.purchaseDate = getDateOnly(b.purchaseDate)
            })
            bookings.forEach(b => {
                b.timeslot = getDateOnly(b.timeslot)
            })
            setPayments(payments);
            setPurchases(purchases);
            setBookings(bookings);
        })
    },[])

    return(
        <>
            <div id="wrapper">
                <Sidebar linkId="cashflow" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800"> Evento Cashflow </h1>
                            </div>
                            <div className='row'style={{height:"250px", overflowY:"auto"}}>
                                <div className='mb-4' id="eventsTableCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Event Bookings</div>
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
                                                        {(payments.length==0)? "No Event Payments Available" : (
                                                        payments.map((a) => (
                                                           <tr id={a._id} key={a._id}>
                                                           <td>{a.firstname + " " + a.lastname}</td>
                                                           <td>{(a.start_date)}</td>
                                                           <td>{"Event"}</td>
                                                           <td><p>{(a.finalPayStatus == "Pending") && <FaSpinner color="blue" />}
                                                               {(a.finalPayStatus == "Received") &&<FaCheckCircle color="green" />}
                                                               {(a.status == "Cancelled") &&<FaTimesCircle color="red" />}
                                                                {(a.status != "Cancelled" || a.status != "Rejected") && " " + a.price}
                                                                {(a.status == "Cancelled") && "Service Cancelled"}
                                                               </p>
                                                               <p>{(a.finalPayStatus == "Received") && "Paid On : " + a.CustPayDate}
                                                               </p>
                                                           </td>
                                                       </tr> 
                                                        )))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'style={{height:"250px", overflowY:"auto"}}>
                                <div className='mb-4' id="purchasesTableCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Event Bookings</div>
                                        <div className='card-body'>
                                            <div className='table-responsive'>
                                                <table className='table' id="purchaseTable">
                                                    <thead>
                                                        <tr>
                                                            {columns.map((c) => (
                                                                <th key={c.text} >{c.text}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {(purchases.length==0)? "No Purchase Payments Available" : (
                                                        purchases.map((a) => (
                                                            <tr id={a._id} key={a._id}>
                                                                <td>{a.firstname + " " + a.lastname}</td>
                                                                <td>{(a.purchaseDate)}</td>
                                                                <td>{(a.eventid != null) ? "Event" : "Individual Purchase"}</td>
                                                                <td><p>{(a.CustPayStatus == "Pending") && <FaSpinner color="blue" />}
                                                                    {(a.CustPayStatus == "Received") &&<FaCheckCircle color="green" />}
                                                                    {" " + a.price}
                                                                    </p>
                                                                    <p>{(a.CustPayStatus == "Paid") && "Paid On : " + a.CustPayDate}
                                                                    </p>
                                                                </td>
                                                                <td><p>{(a.ProviderPayStatus == "Pending") && <FaSpinner color="blue" />}
                                                                    {(a.ProviderPayStatus == "Paid") &&<FaCheckCircle color="green" />}
                                                                    {" " + (parseFloat(a.price)-parseFloat(a.commission))}
                                                                    </p>
                                                                    <p>{(a.ProviderPayStatus == "Paid") && "Paid On : " + a.ProviderPayDate}
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <button className='btn' onClick={(e) => { payProvider(a._id) }}>
                                                                        Pay
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'style={{height:"250px", overflowY:"auto"}}>
                                <div className='mb-4' id="bookingsTableCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Event Bookings</div>
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
                                                        {(bookings.length==0) && "No Booking Payments Available" }
                                                        {bookings.map((a) => (
                                                            <tr id={a._id} key={a._id}>
                                                            <td>{a.firstname + " " + a.lastname}</td>
                                                            <td>{(a.timeslot).split('T')[0]}</td>
                                                            <td>{(a.eventid != null) ? "Event" : "Individual Service Booking"}</td>
                                                            <td><p>{(a.CustPayStatus == "Pending") && <FaSpinner color="blue" />}
                                                                {(a.CustPayStatus == "Received") &&<FaCheckCircle color="green" />}
                                                                {(a.Status == "Cancelled") &&<FaTimesCircle color="red" />}
                                                                {(a.Status != "Cancelled") && " " + a.price}
                                                                {(a.Status == "Cancelled") && "Service Cancelled"}
                                                                </p>
                                                                <p>{(a.CustPayStatus == "Paid") && "Paid On : " + a.CustPayDate}
                                                                </p>
                                                            </td>
                                                            <td><p>{(a.ProviderPayStatus == "Pending") && <FaSpinner color="blue" />}
                                                                {(a.ProviderPayStatus == "Paid") &&<FaCheckCircle color="green" />}
                                                                {(a.Status == "Cancelled") &&<FaTimesCircle color="red" />}
                                                                {(a.Status != "Cancelled") && " " + (parseFloat(a.price)-parseFloat(a.commission))}
                                                                {(a.Status == "Cancelled") && "Service Cancelled"}
                                                                </p>
                                                                <p>{(a.ProviderPayStatus == "Paid") && "Paid On : " + a.ProviderPayDate}
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <button className='btn' onClick={(e) => { payProvider(a._id) }}
                                                                disabled={(a.Status == "Cancelled")}>
                                                                    Pay
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
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}