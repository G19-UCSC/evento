
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../../utils/product';
import { CartContext, CartDispatchContext } from '../../context/productContext';
import axios from '../../utils/axios'
import React, { useContext, useState, useEffect } from 'react'

export default function Shop() {
    const [setCart, setPrices] = useContext(CartDispatchContext);
    const [cart, prices] = useContext(CartContext);


    const [events, setProducts] = useState([])
    const [productsAll, setProductsAll] = useState([])
    // const [cart, setCart] = useState([])
    const router = useRouter()



    useEffect(() => {
        axios.get("/event:id").then((res) => {
            setProducts(res.data.events)
            setProductsAll(res.data.events)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }, [])

    const handleClick = (item) => {
        item.amount = 1
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
        router.push("/cart")
    };


    return (
        <div class="site-wrap">
            <Header />

            <div class="bg-light py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Events</strong></div>
                    </div>
                </div>
            </div>

            <div class="site-section">
                <div class="container">

                    <div class="row mb-5">
                        <div class="col-md-12 order-2">

                            <div class="row">
                                <div class="col-md-12 mb-5">
                                    <div class="d-flex">
                                        <div class="row mb-5">
                                            <div class="col-md-12">
                                                <div class="row d-flex mb-12">
                                                    <div class="col-md-6">
                                                        <h2 class="h3 mb-3 text-black">Booked Events</h2>
                                                    </div>
                                                    <div class="col-md-6 align-content-end">
                                                        <a href="/event/addEvent"><button type="button" class="btn btn-dark">Add Event</button></a>
                                                    </div>
                                                </div>


                                                <div class="p-3 p-lg-5 border">
                                                    <table class="table site-block-order-table mb-5">
                                                        <thead>
                                                            <th>Event Name</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                            <th>Action</th>
                                                        </thead>
                                                        <tbody>
                                                            {events.map((item, i) => (
                                                                // <tr key={i}>
                                                                //     <th>{item.name}<strong class="mx-2">x</strong>{item.amount}</th>
                                                                //     <td>{item.price * item.amount}</td>
                                                                // </tr>
                                                                <tr key={i}>
                                                                    <td class="text-black font-weight-bold">{item.title}</td>
                                                                    <td class="text-black font-weight-bold">{item.start_date}</td>
                                                                    <td class="text-black font-weight-bold">{item.status}</td>
                                                                    <td class="d-flex justify-content-between">
                                                                        <Link href=" "><button type="button" class=" btn btn-dark" style={{ margin: "10px" }}>View</button></Link>
                                                                        <Link href=" "><button type="button" class=" btn btn-dark" style={{ margin: "10px" }}>Update</button></Link>
                                                                        <button type="button" class="btn btn-outline-dark" onClick={() => handleClick(item)} style={{ margin: "10px" }}>Delete</button>
                                                                    </td>
                                                                </tr>

                                                            ))}
                                                            {/* <tr>
                                                                <th class="text-black font-weight-bold"><strong>Date</strong></th>
                                                                
                                                            </tr> */}

                                                            {/* 
                                                            <tr>
                                                                <th class="text-black font-weight-bold"><strong>Action</strong></th>
                                                                <div class="d-flex justify-content-between mb-2" style={{ marginTop: "20px" }}>
                                                                    <Link href=" "><button type="button" class=" btn btn-dark">Update</button></Link>
                                                                    <button type="button" class="btn btn-outline-dark" onClick={() => handleClick(item)}>Delete</button>

                                                                </div>
                                                            </tr> */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                            <Footer />
                        </div >
                    </div>
                </div>
            </div>
        </div>


    )
}
