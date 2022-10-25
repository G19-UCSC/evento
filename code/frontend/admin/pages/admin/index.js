import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import "bootstrap/dist/css/bootstrap.css";
import Header from "../../components/admin/header";
import Sidebar from "../../components/admin/sidebar";
import Footer from "../../components/admin/footer";
import { FaAngleUp, FaCalendar, FaDownload, FaEllipsisH } from 'react-icons/fa';

import Cards from '../../components/admin/cards';
import Linechart from '../../components/admin/linechart';
import Piechart from '../../components/admin/piechart';
import Dropdown from '../../components/dropdown';
import axios from '../../utils/axios';
var $ = require('jquery');

const dashboard = () => {

    const [events, setEvents] = useState([]);
    const [cancels, setCancels] = useState([]);
    const [totalevents, setTotalevents] = useState(0);
    const [cancelledevents, setCancelledevents] = useState(0);
    const [approvedevents, setApprovedevents] = useState(0);
    const [pendingevents, setPendingevents] = useState(0);
    const [purchases, setPurchases] = useState([])
    const [bookings, setBookings] = useState([])
    const [pendingProductPayment, setPendingProductPayment] = useState(0)
    const [pendingServicePayment, setPendingServicePayment] = useState(0)
    const [pendingEventPayment, setPendingEventPayment] = useState(0)
    const [productIncome, setProductIncome] = useState(0)
    const [serviceIncome, setServiceIncome] = useState(0)
    const [eventIncome, setEventIncome] = useState(0)

    const events2 = [
        {
            _id: '',
            start_date: '',
            end_date: '',
            location: '',
            userid: '',
            packageid: '',
            created_date: '',
            status: '',
            serviceCharge: '',
            price: '',
            advance: '',
            advanceStatus: '',
            advanceDate: '',
            finalPay: '',
            finalPayStatus: '',
            finalPayDate: ''
        }
    ]

    const event_cancel = [
        {
            _id: '',
            eventid: '',
            userid: '',
            cancelledOn: '',
            paymentRetrun: '',
            returnStatus: '',
            penalty: '',
            penaltyStatus: ''
        }
    ]

    const months = Array.from({ length: 12 }, (item, i) => {
        return new Date(0, i).toLocaleString('en-US', { month: 'long' })
    });

    const findElementByMonth = (arr, month) => arr.filter(element => element.createdAt.getMonth == month);
    const findElementByStatus = (arr, status) => arr.filter(element => element.status == status);

    function getPendingPayment(all) {
        let pending = all.filter(element => element.ProviderPayStatus == "Pending")
        let payment = 0;
        pending.forEach(p => {
            payment += (p.price - p.price * p.commission)
        })
        return payment
    }

    function getIncome(all) {
        let received = all.filter(element => element.CusPayStatus == "Received")
        received.forEach(p => {
            income += (p.price)
        })
        return received
    }

    const cardtitles = [
        { one: "TOTAL EVENTS" },
        { two: "PENDING EVENTS" },
        { three: "TOTAL INCOME" },
        { four: "PENDING PAYMENTS" }
    ]

    useEffect(() => {
        axios.get("/event").then((res) => {
            let events = res.data.events
            let bookingCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let cancellationCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let today = new Date();
            events.forEach(e => {
                let year = (e.createdAt.split('T')[0].split('-')[0]);
                let month = (e.createdAt.split('T')[0].split('-')[1]);
                if (year == today.getFullYear()) {
                    switch (month) {
                        case '01': bookingCount[0] += 1; break;
                        case '02': bookingCount[1] += 1; break;
                        case '03': bookingCount[2] += 1; break;
                        case '04': bookingCount[3] += 1; break;
                        case '05': bookingCount[4] += 1; break;
                        case '06': bookingCount[5] += 1; break;
                        case '07': bookingCount[6] += 1; break;
                        case '08': bookingCount[7] += 1; break;
                        case '09': bookingCount[8] += 1; break;
                        case '10': bookingCount[9] += 1; break;
                        case '11': bookingCount[10] += 1; break;
                        default: bookingCount[11] += 1; break;
                    }
                }
            })
            let pending = findElementByStatus(events, "Pending")
            let approved = findElementByStatus(events, "Approved")
            setEvents(bookingCount);
            setCancels(cancellationCount);
            setTotalevents(events.length);
            setPendingevents(pending.length);
            setApprovedevents(approved.length);

        }).then(async () => {
            await axios.get(`/productPayment`).then((res) => {
                let purchases = res.data.payments;
                console.log(purchases)
                setPurchases(purchases)
                let payment = 0;
                payment = getPendingPayment(purchases)
                // let pending = purchases.filter(element => element.ProviderPayStatus == "Pending")
                // pending.forEach(p => {
                //     payment += (p.price - p.price * p.commission)
                // })
                let income = 0;
                income = getIncome(purchases)
                // let received = purchases.filter(element => element.CusPayStatus == "Received")
                // received.forEach(p => {
                //     income += (p.price)
                // })
                setProductIncome(income)
                setPendingProductPayment(payment)
            }).catch((err) => {
                console.log(err)
            })
        }).then(async () => {
            await axios.get(`/serviceBooking`).then((res) => {
                let bookings = res.data.services;
                console.log(bookings)
                setBookings(bookings)
                let payment = 0;
                payment = getPendingPayment(bookings)
                // let pending = bookings.filter(element => element.ProviderPayStatus == "Pending")
                // pending.forEach(p => {
                //     payment += (p.price - p.price * p.commission)
                // })
                let income = 0;
                income = getIncome(bookings)
                // let received = bookings.filter(element => element.CustPayStatus == "Received")
                // received.forEach(p => {
                //     income += (p.price)
                // })
                setServiceIncome(income)
                setPendingServicePayment(payment)
            }).catch((err) => {
                console.log(err)
            })
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <>
            <div id="wrapper">

                {/* Sidebar */}

                <Sidebar linkId="dashboard" />
                {/* End of Sidebar */}

                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* Main Content */}
                    <div id="content">

                        {/* Topbar */}
                        <Header />
                        {/* End of Topbar */}

                        {/* Begin Page Content */}
                        <div className="container-fluid">

                            {/* Page Heading */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                            <FaDownload/> Generate Report</a> */}
                            </div>

                            {/* Content Row */}
                            <div className="row">
                                <Cards cardTitles={cardtitles}
                                    cardData={[totalevents, pendingevents, pendingProductPayment + pendingServicePayment + pendingEventPayment,
                                        productIncome + serviceIncome + eventIncome]} />
                            </div>

                            {/* Content Row */}
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <Linechart
                                        cardTitle="Bookings vs Time" xData={months} name1="Booked Events" name2="Cancelled Events"
                                        series1={events} series2={cancels}
                                    />
                                </div>

                                {/* Pie Chart */}
                                <div className="col-xl-4 col-lg-5">
                                    <Piechart
                                        cardTitle="Event Bookings" names={["Booked Events", "Pending Events", "Approved Events", "Cancelled Events"]}
                                        series={[totalevents, pendingevents, approvedevents, cancelledevents]}
                                    />
                                </div>
                            </div>

                            {/* Content Row */}
                            {/* <div className="row">
                               <div className="col-xl-8 col-lg-7">
                                   <Linechart
                                       cardTitle="Cashflow vs Time" xData={months} name1="Income" name2="Payments"
                                       series1={events} series2={cancels}
                                   />
                               </div>

                               <div className="col-xl-4 col-lg-5">
                                   <Piechart 
                                       cardTitle="All Income" names={["Income", "Payments"]}
                                       series={[totalevents, pendingevents]}
                                   />
                               </div>
                    </div> */}

                        </div>
                        {/* /.container-fluid */}

                    </div>
                    {/* End of Main Content */}

                    {/* Footer */}
                    <Footer />
                    {/* End of Footer */}

                </div>
                {/* End of Content Wrapper */}

            </div>
            {/* End of Page Wrapper */}

            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
                <FaAngleUp />
            </a>

            {/* Logout Modal*/}
            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default dashboard;
