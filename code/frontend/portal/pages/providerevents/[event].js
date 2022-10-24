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
    const [eventDetails, setEventDetails] = useState([]);
    const [eventProviders, setEventProviders] = useState([]);

    const router = useRouter()
    const { event } = router.query;

    function getDateOnly(string) {
        return (string).split('T')[0];
    }


    useEffect(() => {

        const user_ = JSON.parse(localStorage.getItem('user'))

        const getEvent = () => {
            return axios.get(`/event/${event}`);
        }

        const getEventProviders = () => {
            return axios.get("/eventprovider/");
        }

        const getProducts = () => {
            return axios.get("/product/")
        }

        const getServices = () => {
            return axios.get("/service")
		}


        Promise.all([getEvent(), getEventProviders(), getProducts(), getServices()]).then((res) => {
            let events = res[0].data.event;
            events.createdAt = getDateOnly(events.createdAt);
            events.start_date = getDateOnly(events.start_date);
            events.end_date = getDateOnly(events.end_date);
            setEventDetails(events);
            console.log(events)
            console.log(res)
            let eventproviders = res[1].data.eventProviders.filter(element => element.providerid == user_.userid);
            eventproviders = eventproviders.filter(element => element.eventid == event);
            let products = res[2].data.products;
            let services = res[3].data.services;
            eventproviders.forEach(e => {
                products.forEach(p => {
                    if (e.productid == p._id) {
                        e.productname = p.name;
                    }
                })
            })
            eventproviders.forEach(e => {
                services.forEach(p => {
                    if (e.productid == p._id) {
                        e.productname = p.name;
                    }
                })
            })
            setEventProviders(eventproviders);
            table();
        }).catch((error) => {
            console.log(error)
        })

    }, [event])

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
                                            <p className="card-text">Event Title - {eventDetails.title}</p>
                                            <p className="card-text">Booked On {eventDetails.createdAt}</p>
                                            <p className="card-text">Event Date {(eventDetails.start_date) + " to "
                                                + (eventDetails.end_date)}</p>
                                            <p className="card-text">Location at {eventDetails.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='mb-4' id="eventsTableCard">
                                    <div className='card shadow md-4'>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Product/Service</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {eventProviders.map(e => (
                                                    <tr key={e._id}>
                                                        <td>
                                                            {e.productname}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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