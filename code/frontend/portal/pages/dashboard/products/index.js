import Footer from "../../../components/home/footer"
import Header from "../../../components/home/header"
import axios from '../../../utils/axios'
import React, { useContext, useState, useEffect, useForm } from 'react'
import { FaAlignJustify, FaDollarSign, FaShoppingCart, FaRegCalendarAlt, FaRegPlayCircle, FaQuestionCircle, FaEye } from 'react-icons/fa';
var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';


export default function Products() {
    const [product, setProduct] = useState([]);
    const [user, setUser] = useState(null);
    const [btn, setBtn] = useState(false);
    const [productid, setProductId] = useState(null);
    // const { register, handleSubmit, watch, control, reset, setValue } = useForm();

    function addReview(id) {

        setBtn(true)
        setProductId(id)
        // if(btn){
        //     setBtn(false)
        //     setProductId(id)
        // }
        // else{
        //     setBtn(true)
        //     setProductId(null)
        // }
    }

    const handleSubmit = (formData) => {
        e.preventDefault();
        formData.productid = productid
        formData.userid = user.userid
        console.log(formData)

        axios.post(`/review`, formData).then((res) => {
            const newReview = res.data.review
            console.log(res)
            setBtn(false)
        }).catch((error) => {
            console.log(error)
        })
    }


    useEffect(() => {

        const user_ = JSON.parse(localStorage.getItem('user'))
        // setUser(user_)

        const getProductPayment = () => {
            return (axios.get(`/productPayment`))
        }

        const getProducts = () => {
            return (axios.get(`/product`))
        }

        Promise.all([getProductPayment(), getProducts()]).then((res) => {
            let purchases = res[0].data.payments;
            let products = res[1].data.products;
            console.log(res)
            // purchases = purchases.filter(element => element.userid == user.userid);
            purchases.forEach(e => {
                products.forEach(p => {
                    if (e.productid == p._id) {
                        e.productName = p.name;
                        e.description = p.description;
                        e.price = p.price;
                    }
                })
            })

            // setProduct(purchases)
            // console.log(purchases)

        }).catch((err) => {
            console.log(err)
        })

    },[])

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
                                            <th>Product Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Pay Status</th>
                                            <th>Pay Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.map((item, i) => (
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
                                        <form onSubmit={(e) => { handleSubmit() }} className='form' id='userform'>
                                            <input className='form-control mb-4' type="text"
                                                name='review' id='review' placeholder="your review" required />
                                            <input className='form-control mb-4' type="number" min={0} max={5}
                                                name='rating' id='rating' required />
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
