import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import "bootstrap/dist/css/bootstrap.css";
import Header from "../../components/customer/header";
import Sidebar from "../../components/customer/sidebar";
import Footer from "../../components/customer/footer";
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

    const cardtitles = [
        { one: "TOTAL BOOKINGS" },
        { two: "PENDING BOOKINGS" },
        { three: "TOTAL INCOME" },
        { four: "TOTAL PAYABLE" }
    ]

    useEffect(() => {
        axios.get("/event").then((res) => {
            let events = res.data.events
            let bookingCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let cancellationCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            events.forEach(e => {
                let month = (e.createdAt.split('T')[0].split('-')[1]);
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
            })
            let pending = findElementByStatus(events, "Pending")
            let approved = findElementByStatus(events, "Approved")
            setEvents(bookingCount);
            setCancels(cancellationCount);
            console.log(events.length);
            setTotalevents(events.length);
            setPendingevents(pending.length);
            setApprovedevents(approved.length);

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
                                <Cards cardTitles={cardtitles} cardData={[totalevents, pendingevents]} />
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
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <Linechart
                                        cardTitle="Cashflow vs Time" xData={months} name1="Income" name2="Payments"
                                        series1={events} series2={cancels}
                                    />
                                </div>

                                {/* Pie Chart */}
                                <div className="col-xl-4 col-lg-5">
                                    <Piechart
                                        cardTitle="All Income" names={["Income", "Payments"]}
                                        series={[totalevents, pendingevents]}
                                    />
                                </div>
                            </div>

                            {/* Content Row */}
                            {/* <div className="row">

                        // Content Column
                        <div className="col-lg-6 mb-4">

                            // Project Card Example
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                                </div>
                                <div className="card-body">
                                    <h4 className="small font-weight-bold">Server Migration <span
                                            className="float-right">20%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}}
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Sales Tracking <span
                                            className="float-right">40%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}}
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Customer Database <span
                                            className="float-right">60%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Payout Details <span
                                            className="float-right">80%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}}
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Account Setup <span
                                            className="float-right">Complete!</span></h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}}
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

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
