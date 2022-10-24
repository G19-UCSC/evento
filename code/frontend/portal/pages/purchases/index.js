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

export default function purchase() {
    const [btn, setBtn] = useState('null')
    const [update, setUpdate] = useState('')
    const [purchases, setPurchases] = useState([])
    const [rpurchases, setRpurchases] = useState([])
    const { register, handleSubmit, watch, control, reset, setValue, formState: { errors } } = useForm();
    const [providers, setProviders] = useState([]);


    const columns = [
        {
            text: 'Product',
        },
        {
            text: 'Customer',
        },

        {
            text: 'Date'
        },
        {
            text: 'Price'
        },
        {
            text: 'Quantity'
        },
    ]


    useEffect(() => {

        const table = () => {
            $(function () {
                $('#purchasesTable').DataTable({
                    ordering: true,
                    select: true,
                    responsive: true,
                    buttons: [
                        'copy', 'excel', 'pdf'
                    ]
                });
            });
        }

        const getPurchases = () => {
            return axios.get("/purchase");
        }

        const getProviders = () => {
            return axios.get("/provider");
        }

        Promise.all([getPurchases(), getProviders()]).then((res) => {
            let purchases = res[0].data.purchases;
            let providers = res[1].data.providers;
            purchases.forEach(p => {
                providers.forEach(pr => {
                    if (p._id == pr._id) {
                        p.name = pr.name;
                    }
                })
            });
            console.log(purchases);
            setPurchases(purchases);
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
                            <a href="index.html">Purchases</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Purchases</strong></div>
                    </div>
                </div>
            </div>


            <div class="site-section">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md-9 order-2">


                            <div class="row mb-5">
                                <h1 className="h3 mb-0 text-gray-800">Purchases</h1>

                            </div>

                            <div className='row'>
                                <div className='mb-4' id="purchasesCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Purchases</div>
                                        <div className='card-body'>
                                            <div className='table-responsive'>
                                                <table className='table' id="purchasesTable">
                                                    <thead>
                                                        <tr>
                                                            {columns.map((c) => (
                                                                <th key={c.text} >{c.text}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {events.map((a) => (
                                                            {
                                                                purchases.map((a) => (
                                                                    <tr id={a._id} key={a._id}>
                                                                        <td>{a.product}</td>
                                                                        <td>{a.name}</td>
                                                                        <td>{a.date}</td>
                                                                        <td>{a.price}</td>
                                                                        <td>{a.quantity}</td>
                                                                
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