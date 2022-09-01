import "bootstrap/dist/css/bootstrap.css";
import Header from  "../../components/admin/header";
import Sidebar from "../../components/admin/sidebar";
import Footer from "../../components/admin/footer";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { FaEdit, FaStar } from "react-icons/fa";

var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';

export default function products() {

    const [products,setProducts] = useState([]);
    const [services,setServices] = useState([]);

    useEffect(()=>{

        const table = () => {
            $(function() {
                $('#productsTable').DataTable({
                    ordering:true,
                    select: true,
                    responsive: true,
                    buttons: [
                        'copy','excel','pdf'
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

        Promise.all([getService(),getProduct()]).then((res) => {
            let service = res[0].data.service;
            setServices(service)
            let p = res[1].data.products;
            setProducts(p);
            console.log(res);

            table();
            
        }).catch((error) => {
            console.log(error)
        })
    },[])

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
        }
    ]

    return(
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
                                                                <td>{a.name}</td>
                                                                <td>Rs. {a.price}</td>
                                                                <td>{a.category}</td>
                                                                <td>
                                                                    <FaStar color="yellow" />
                                                                    <FaStar color="yellow" />
                                                                    <FaStar color="yellow" />
                                                                    <FaStar color="" />
                                                                    <FaStar color="" />
                                                                </td>
                                                                {/* <td>
                                                                            <button className='btn' onClick={(e) => { onClickUpdate(a._id) }}>
                                                                                <FaEdit />
                                                                            </button>
                                                                        </td> */}
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