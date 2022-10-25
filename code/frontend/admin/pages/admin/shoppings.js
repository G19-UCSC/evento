import "bootstrap/dist/css/bootstrap.css";
import Header from "../../components/admin/header";
import Sidebar from "../../components/admin/sidebar";
import Footer from "../../components/admin/footer";
import { useEffect, useState, useCallback } from "react";
import axios from "../../utils/axios";
import { FaEdit, FaStar, FaEye } from "react-icons/fa";
import { useRouter } from "next/router";

var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';

export default function products() {
    const router = useRouter()
    const [products, setProducts] = useState([]);
    const [services, setServices] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        const table = () => {
            $(function () {
                $('#productsTable').DataTable({
                    ordering: true,
                    select: true,
                    responsive: true,
                    buttons: [
                        'copy', 'excel', 'pdf'
                    ]
                });
            });
        }

        const getService = () => {
            return axios.get("/service");
        }

        const getProduct = () => {
            return axios.get("/product");
        }
        const getReview = () => {
            return axios.get("/review");
        }


        Promise.all([getService(), getProduct(), getReview()]).then((res) => {
            let service = res[0].data.service;
            setServices(service)
            let p = res[1].data.products;
            let review = res[2].data.reviews
            console.log('review', p);
            setProducts(p);
            p.forEach(e => {
                let selectedreviews = review.filter(element => element.productid == e._id)
                e.rating = 0
                selectedreviews.forEach(sr => {
                    console.log('e.rating', e.rating);
                    console.log('sr.rating', sr.rating);
                    console.log('sr.length', selectedreviews.length);
                    e.rating = (e.rating + sr.rating) / selectedreviews.length
                    // x = e.rating
                });

                setReviews(selectedreviews)
            });

            // setReviews(review)
            console.log(res);

            table();

        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const columns = [
        {
            text: "Product Name"
        },
        {
            text: "Price"
        },
        {
            text: "Category"
        },
        {
            text: "Ratings"
        },
        {
            text: ""
        }
    ]
    const viewProductDetails = useCallback((shoppingselected) => {
        router.push(`./shopping/${shoppingselected}`);
    }, [router]
    );
    console.log("reviews", products);
    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="shoppings" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Products and Services</h1>
                            </div>
                            <div className='row'>
                                <div className='mb-4' id="productsTableCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Products</div>
                                        <div className='card-body'>
                                            <div className='table-responsive'>
                                                <table className='table' id="productsTable">
                                                    <thead>
                                                        <tr>
                                                            {columns.map((c) => (
                                                                <th key={c.text} >{c.text}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {products.map((a, i) => (

                                                            <tr id={a._id} key={i}>

                                                                <td >{a.name}</td>

                                                                <td>Rs. {a.price}</td>
                                                                <td>{a.category}</td>
                                                                <td>
                                                                    {(a.rating == 5) && (
                                                                        <>
                                                                            <FaStar color="yellow" />
                                                                            <FaStar color="yellow" />
                                                                            <FaStar color="yellow" />
                                                                            <FaStar color="yellow" />
                                                                            <FaStar color="yellow" />
                                                                        </>
                                                                    )}
                                                                    {((a.rating >= 4) && (a.rating < 5)) && (
                                                                        <>
                                                                            <FaStar color="yellow" />
                                                                            <FaStar color="yellow" />
                                                                            <FaStar color="yellow" />
                                                                            <FaStar color="yellow" />
                                                                            <FaStar />
                                                                        </>
                                                                    )}
                                                                    {((a.rating >= 3) && (a.rating < 4)) && (
                                                                        <>
                                                                            <FaStar color="yellow" />
                                                                            <FaStar color="yellow" />
                                                                            <FaStar color="yellow" />
                                                                            <FaStar />
                                                                            <FaStar />
                                                                        </>
                                                                    )}
                                                                    {((a.rating >= 2) && (a.rating < 3)) && (
                                                                        <>
                                                                            <FaStar color="yellow" />
                                                                            <FaStar color="yellow" />
                                                                            <FaStar />
                                                                            <FaStar />
                                                                            <FaStar />
                                                                        </>
                                                                    )}
                                                                    {((a.rating >= 1) && (a.rating < 2)) && (
                                                                        <>
                                                                            <FaStar color="yellow" />
                                                                            <FaStar />
                                                                            <FaStar />
                                                                            <FaStar />
                                                                            <FaStar />
                                                                        </>
                                                                    )}
                                                                    {((a.rating >= 0 && a.rating < 1) || a.rating == null) && (
                                                                        <>
                                                                            No Ratings
                                                                        </>
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    <button className='btn' onClick={() => viewProductDetails(a._id)}><FaEye /></button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}