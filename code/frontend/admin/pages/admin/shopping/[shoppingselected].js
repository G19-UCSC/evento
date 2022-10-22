import "bootstrap/dist/css/bootstrap.css";
import Header from "../../../components/admin/header";
import Sidebar from "../../../components/admin/sidebar";
import Footer from "../../../components/admin/footer";
import { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import { useRouter } from "next/router";
import { FaCheckCircle, FaCross, FaMinus, FaSpinner, FaTimesCircle, FaUserPlus, FaStar } from "react-icons/fa";

export default function shoppingselected() {

    const router = useRouter()
    const { shoppingselected } = router.query
    const [productDetails, setProductDetails] = useState([]);
    const [reviewDetails, setReviewDetails] = useState([]);

    const columns = [{
        text: 'Customer'
    }, {
        text: 'Shopping Date'
    }, {
        text: 'Customer Payment'
    }, {
        text: 'Provider Payment'
    }, {
        text: 'Action'
    },];

    useEffect(() => {

        // console.log(shoppingselected)
        const getProduct = () => { return (axios.get(`/product/${shoppingselected}`)) }

        const getProductReview = () => { return (axios.get('/review')) }

        const getProvider = () => {
            return (axios.get(`/provider/`))
        }

        // const getProduct = () => {
        //     return (axios.get(`/product/`))
        // }

        // const getService = () => {
        //     return (axios.get(`/service/`))
        // }

        Promise.all([getProduct(), getProductReview(), getProvider()]).then((res) => {
            let Product = res[0].data.product;
            let allReviews = res[1].data.reviews
            let Reviews = allReviews.filter(element => element.productid == shoppingselected);
            let allProviders = res[2].data.reviews;
            // let Provider = allReviews.filter(element => element.userid == allProviders.userid);
            setProductDetails(Product)
            setReviewDetails(Reviews)
            console.log('allReviews', allReviews)
            console.log('Reviews', Reviews)

        }).catch((error) => {
            console.log(error)
        })

    }, [shoppingselected])
    // console.log(reviewDetails);
    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="shoppings" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                {/* <h1 className="h3 mb-0 text-gray-800">{eventDetails.title + "-" + userDetails.firstname +
                                    " " + userDetails.lastname}</h1> */}
                                <h1 className="h3 mb-0 text-gray-800">{productDetails.name} - Provider name</h1>
                                {/* <button className="btn btn-primary"> Generate Report </button> */}
                            </div>
                            <div className="row container-fluid">
                                <div className='mb-4 col-lg-4' id="eventDetailsCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'> <b>Info</b> </div>
                                        <div className="card-body">
                                            <p><strong>{productDetails.name}</strong>{' '}{productDetails.description} </p>
                                            {/* <p>{eventDetails.title}</p> */}
                                            <p>Posted On {productDetails.createdAt}</p>
                                            {/* <p>Event Date {(eventDetails.start_date).split('T')[0] + " to "
                                             + (eventDetails.end_date).split('T')[0]}</p> */}
                                            <p>Price Rs.{productDetails.price}</p>
                                            <p>Commision rate {productDetails.comission}%</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='mb-4 col-lg-4' id="packageDetailsCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'> <b>Review</b></div>
                                        <div className="card-body">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th>Comment</th>
                                                        <th>Rating</th>

                                                    </tr>
                                                    {reviewDetails.map((a, i) => (

                                                        <tr id={a._id} key={i}>

                                                            <td >{a.review == null ? <span>No Comments</span> : a.review}</td>
                                                            <td >
                                                                {(a.rating == 5) && (
                                                                    <>
                                                                        <FaStar color="yellow" />
                                                                        <FaStar color="yellow" />
                                                                        <FaStar color="yellow" />
                                                                        <FaStar color="yellow" />
                                                                        <FaStar color="yellow" />
                                                                    </>
                                                                )}
                                                                {(a.rating == 4) && (
                                                                    <>
                                                                        <FaStar color="yellow" />
                                                                        <FaStar color="yellow" />
                                                                        <FaStar color="yellow" />
                                                                        <FaStar color="yellow" />
                                                                        <FaStar />
                                                                    </>
                                                                )}
                                                                {(a.rating == 3) && (
                                                                    <>
                                                                        <FaStar color="yellow" />
                                                                        <FaStar color="yellow" />
                                                                        <FaStar color="yellow" />
                                                                        <FaStar />
                                                                        <FaStar />
                                                                    </>
                                                                )}
                                                                {(a.rating == 2) && (
                                                                    <>
                                                                        <FaStar color="yellow" />
                                                                        <FaStar color="yellow" />
                                                                        <FaStar />
                                                                        <FaStar />
                                                                        <FaStar />
                                                                    </>
                                                                )}
                                                                {(a.rating == 1) && (
                                                                    <>
                                                                        <FaStar color="yellow" />
                                                                        <FaStar />
                                                                        <FaStar />
                                                                        <FaStar />
                                                                        <FaStar />
                                                                    </>
                                                                )}
                                                                {(a.rating == 0 || a.rating == null) && (
                                                                    <>
                                                                        No Ratings
                                                                    </>
                                                                )}
                                                            </td>

                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 col-lg-4' id="providerDetailsCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>
                                            <b>Provider</b>
                                        </div>
                                        <div className="card-body">
                                            <p>Provider Name and description</p>
                                            {/* <p>{eventDetails.title}</p> */}
                                            <p>Joined On 2022-05-18</p>

                                        </div>
                                        <div className='card-header'>
                                            <b>Review</b>
                                        </div>
                                        <div className="card-body">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th>Comment</th>
                                                        <th>Rating</th>

                                                    </tr>
                                                    <tr>
                                                        <td>Comment goes here</td>
                                                        <td><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100">
                                    <table className='table' id="shoppingHistory">
                                        <thead>
                                            <tr className="card-header">
                                                {columns.map((c) => (
                                                    <th key={c.text} >{c.text}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="card-body">
                                                <td>
                                                    Sandali Boteju
                                                </td>
                                                <td>
                                                    18-08-2022
                                                </td>
                                                <td>
                                                    <FaCheckCircle />
                                                    Rs. 2500
                                                </td>
                                                <td>
                                                    <FaSpinner />
                                                    Rs.2000
                                                </td>
                                                <td>
                                                    <button className="btn btn-outline-dark">Pay</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
 // let eventproviders = all.filter(element => element.productid == shoppingselected);
            // let products = res[1].data.products;
            // let services = res[2].data.service;
            // let eventdetail = res[3].data.event;
            // let providers = res[4].data.providers;