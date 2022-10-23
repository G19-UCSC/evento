
import "bootstrap/dist/css/bootstrap.css";
import Header from "../../components/provider/header";
import Sidebar from "../../components/provider/sidebar";
import Footer from "../../components/provider/footer";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";

var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';

export default function purchases() {

    const [purchases, setPurchases] = useState([]);
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
        <>
            <div id="wrapper">
                <Sidebar linkId="purchases" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Purchases</h1>
                            </div>
                            <div className='row'>
                                <div className='mb-4' id="purchasesTableCard">
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
                                                        {purchases.map((a) => (
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
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}