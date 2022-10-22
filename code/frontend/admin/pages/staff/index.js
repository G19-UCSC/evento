import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import "bootstrap/dist/css/bootstrap.css";

import Header from "../../components/staff/header";
import Sidebar from "../../components/staff/sidebar";
import Footer from "../../components/staff/footer";
import { FaAngleUp, FaCalendar, FaDownload, FaEllipsisH } from 'react-icons/fa';

import Cards from '../../components/staff/cards';
import axios from '../../utils/axios';

import Head from 'next/head';
// import Body from 'next/';
import Script from 'next/script'
var $ = require('jquery');

const dashboard = () => {

    // const [eventstaffs, seteventStaff] = useState([]);
    const [eventids, seteventid] = useState([]);
    // const [cancels, setCancels] = useState([]);
    const [newassigns, setnewassigns] = useState(0);
    const [totalevents, setTotalAssignedEvents] = useState(0);
    // const [cancelledevents, setCancelledevents] = useState(0);
    // const [approvedevents, setApprovedevents] = useState(0);
    const [pendingevents, setPendingevents] = useState(0);
    // const [user, setUser] = useState([]);


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
        { one: "TOTAL ASSIGNED EVENTS" },
        { two: "PENDING EVENTS" },
        { three: "NEWLY ASSIGNED" }
    ]

    useEffect(() => {
        const user_ = JSON.parse(localStorage.getItem('user'))

        axios.get("/eventstaff").then((res) => {
            let eventstaffs = res.data.alleventstaff
            let events = [];
            let newEvents = 0;
            let pendingEvents = 0;
            let date = new Date().toJSON().split('T')[0];
            // let Selectdate = date;
            // console.log('date', date)
            // console.log('Selectdate', Selectdate)
            let i = 0;
            eventstaffs.forEach(e => {
                if ((user_.userid == e.userid) && (e.status == 'Assigned')) {
                    events[i] = e.eventid;
                    i++

                    // seteventid(eventid => [...eventid, e.eventid]);
                    if ((e.createdAt.split('T')[0] == date) || (e.updatedAt.split('T')[0] == date)) {
                        newEvents++;

                    }
                    axios.get(`/event/${e.eventid}`).then((res) => {
                        let eventdetails = res.data.event
                        // console.log('eventdetails', eventdetails);
                        // console.log('eventdetails', eventdetails.status);
                        if (eventdetails.status == "Pending") {
                            pendingEvents++;
                            setPendingevents(pendingEvents);
                        }

                    })
                }

            });
            // setTotalAssignedEvents(count);
            console.log('newEvents', newEvents)
            console.log("pendingEvents", pendingEvents)
            seteventid(events);
            setTotalAssignedEvents(events.length);
            setnewassigns(newEvents);

            // setPendingevents(pendingEvents);
        }).catch((error) => {
            console.log(error)
        })

        // $("#calendar").evoCalendar();


    }, [])


    // console.log("eventstaffs", eventstaffs)
    // console.log("totalevents", totalevents)
    // console.log("eventids", eventids)
    // console.log("newassigns", newassigns)
    // console.log("Assigned ", Assigned)



    return (
        <>
            <Head><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/evo-calendar@1.1.2/evo-calendar/css/evo-calendar.min.css" /></Head>
            <Script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/evo-calendar@1.1.2/evo-calendar/js/evo-calendar.min.js"></Script>
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
                            <div className="row align-items-center  justify-content-center">
                                <Cards cardTitles={cardtitles} cardData={[totalevents, pendingevents, newassigns]} />
                            </div>

                            <div id="calendar"></div>

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
