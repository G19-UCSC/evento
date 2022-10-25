
import Footer from "../../../components/home/footer"
import Header from "../../../components/home/header"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../../../utils/product';
import { CartContext, CartDispatchContext } from '../../../context/productContext';
import axios from '../../../utils/axios'
import React, { useContext, useState, useEffect } from 'react'

import Swal from 'sweetalert2'


import { FaAlignJustify, FaDollarSign, FaShoppingCart, FaRegCalendarAlt, FaRegPlayCircle, FaQuestionCircle, FaEye } from 'react-icons/fa';
var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';


export default function Dashboard() {
    const [setCart, setPrices] = useContext(CartDispatchContext);
    const [cart, prices] = useContext(CartContext);
    const [product, setProduct] = useState([]);
    const [events, setEvents] = useState([]);
    const [rejectedEvents, setRejectedEvents] = useState([]);
    const [user, setUser] = useState(null);
    const [btn, setBtn] = useState(false);
    const [productid, setProductId] = useState('');
    const { register, handleSubmit, watch, control, reset, setValue, formState: { errors } } = useForm();
    // const[events,setEvents] = useState([]);
    // const[cancels,setCancels] = useState([]);
    // const[totalevents,setTotalevents] = useState(0);
    // const[cancelledevents,setCancelledevents] = useState(0);
    // const[approvedevents,setApprovedevents] = useState(0);
    // const[pendingevents,setPendingevents] = useState(0);


    // const [cart, setCart] = useState([])
    const router = useRouter()
    const [event, setEvent] = useState([]);
    const [id, setId] = useState([]);

    function addReview(id){
        if(btn){
            setBtn(false)
            setProductId('')
        }
        else{
            setBtn(true)
            setProductId(id)
        }
    }

    const onSubmit = (formData) => {
            formData.productid = productid
            formData.userid = user.userid
            console.log(formData)
            axios.post(`/review`, formData).then((res) => {
                const newReview = res.data.review
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })

            onClickCancel();
    }


    useEffect(() => {
        const user_ = JSON.parse(localStorage.getItem('user'))
        if (user_) {
            setUser(user_)
        }

        const table1 = () => {
            $(function () {
                $('#bookingsTable').DataTable({
                    ordering: true,
                    select: true,
                    responsive: true,
                    buttons: [
                        'copy', 'excel', 'pdf'
                    ]
                });
            });
        }
        

        const getProductPayment = () => {
            return (axios.get(`/productPayment`))
        }

        const getProducts = () => {
            return (axios.get(`/products`))
        }

        Promise.all([getProductPayment(), getProducts()]).then((res) => {
            let purchases = res[0].data.payment;
            let products = res[1].data.products;
            purchases = purchases.filter(element => element.userid == user.userid);
            purchases.forEach(e => {
                products.forEach(p => {
                    if (e.productid == p._id) {
                        e.productName = p.name;
                        e.description = p.description;
                        e.price = p.price;
                    }
                })
            })
            setProduct(purchases);
            console.log(purchases)
        })




    }, [])

    // const showEvent = (id) => {
        // axios.get("/eventProvider").then((res)=>{
        //   return(res.data)
        // }).then(async (data)=>{
        //   await axios.get(`/product/${data.productid}`).then((res)=>{
        //     setProduct(res.data.product);
        //   }).catch((error) => {
        //     console.log(error)
        //   })
        // }).catch((error) => {
        //   console.log(error)
        // })
    return (
        <div class="site-wrap">
            <Header />

            <div class="bg-light py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mb-0">
                            <a href="index.html">My Purchases</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">My Purchses</strong></div>
                    </div>
                </div>
            </div>

            <div class="site-section">
                <div class="container">

                    <div class="row mb-5">
                        <div class="col-md-9 order-2">


                            <div class="row mb-5 border p-4 rounded">
                                {/* Content Row */}
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    <strong >All Purchases</strong></div>
                                <table className='table' id="bookingsTable">
                                    <thead>
                                        <tr>
                                            {/* {columns.map((c) => ( */}
                                            {/* <th key={c.text} >{c.text}</th> */}
                                            <th>Product Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Pay Status</th>
                                            <th>Pay Date</th>
                                            <th>Action</th>
                                            {/* ))} */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {events.map((a) => ( */}
                                        {events.map((item, i) => (
                                            <tr key={i}>
                                                <td>{item.name}</td>
                                                <td>{item.description}</td>
                                                <td>{item.price}</td>
                                                <td>{item.purchaseDate}</td>
                                                <td>{item.CusPayStatus}</td>
                                                <td>{item.CusPayDate}</td>
                                                <td onClick={addReview(item._id)}><FaEye color='black' fontSize="16px" padding-left='10' /></td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div class="row mb-5 border p-4 rounded">
                                {btn && (
                                    <>
                                    <form onSubmit={handleSubmit(onSubmit)} className='form' id='userform'>
                                  <input className='form-control mb-4' type="text"
                                  name='review' id='review' placeholder="your review" required/>
                                <input className='form-control mb-4' type="number" min={0} max={5}
                                  name='rating' id='rating' required/>
                                  <button type="submit" className="btn">Save Review</button>
                                  </form>
                                  </>
                                )}
                            </div>
                        </div>

                        <div class="col-md-3 order-1 mb-5 mb-md-0">

                            <div class="border p-4 rounded mb-4">

                                <a href="./dashboard" class="h6 list-group-item "><FaAlignJustify color='black' fontSize="16px" padding-left='10' /><span class="p-4">Dashboard</span></a>
                                <a href="#" class="h6 list-group-item active"><FaRegPlayCircle color='black' fontSize="16px" padding-left='10' /> <span class="p-4">My Events</span></a>
                                <a href="#" class="h6 list-group-item "><FaRegCalendarAlt color='black' fontSize="16px" padding-left='10' /><span class="p-4">My Bookings</span></a>
                                <a href="#" class="h6 list-group-item "><FaShoppingCart color='black' fontSize="16px" padding-left='10' /> <span class="p-4">My Purchases</span></a>
                                <a href="#" class="h6 list-group-item "><FaDollarSign color='black' fontSize="16px" padding-left='10' /> <span class="p-4">My Payments</span></a>
                                <a href="#" class="h6 list-group-item "><FaQuestionCircle color='black' fontSize="16px" padding-left='10' /> <span class="p-4">FAQ</span></a>

                            </div>


                            <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white" disabled="" />
                        </div>

                    </div>
                </div>
            </div>

        </div>


    )
}
