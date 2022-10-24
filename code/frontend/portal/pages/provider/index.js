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
import Cards from "./cards"
import Linechart from "./linechart"
import Piechart from "./piechart"
import { FaAlignJustify, FaDollarSign, FaShoppingCart, FaRegCalendarAlt, FaRegPlayCircle, FaQuestionCircle } from 'react-icons/fa';

export default function providerDash() {
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

    const cardtitles = [
        { one: "TOTAL BOOKINGS" },
        { two: "PENDING BOOKINGS" },
        { three: "TOTAL INCOME" },
        { four: "PURCHASES" }
    ]

    return (
        <div class="site-wrap">
            <Header />

            <div class="bg-light py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mb-0">
                            <a href="index.html">Dashboard</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Dashboard</strong></div>
                    </div>
                </div>
            </div>

            <div class="site-section">
                <div class="container">

                    <div class="row mb-5">
                        <div class="col-md-9 order-2">

                            <div class="row mb-5">
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

                            </div>
                        </div>

                        <div class="col-md-3 order-1 mb-5 mb-md-0">

                            <div class="border p-4 rounded mb-4">
                                <a href="#" class="h6 list-group-item active"><FaAlignJustify color='black' fontSize="16px" padding-left='10' /><span class="p-4">Dashboard</span></a>
                                <a href="./product" class="h6 list-group-item "><FaRegPlayCircle color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Products</span></a>
                                <a href="./providerservice" class="h6 list-group-item "><FaRegCalendarAlt color='black' fontSize="16px" padding-left='10' /><span class="p-4">Services</span></a>
                                <a href="./purchase" class="h6 list-group-item "><FaShoppingCart color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Purchases</span></a>
                                <a href="./servicebooking" class="h6 list-group-item "><FaDollarSign color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Bookings</span></a>
                                <a href="./providerevents" class="h6 list-group-item "><FaQuestionCircle color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Events</span></a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <Footer/> */}
        </div>


    )
}