import "bootstrap/dist/css/bootstrap.css";
import Header from  "../../components/admin/header";
import Sidebar from "../../components/admin/sidebar";
import Footer from "../../components/admin/footer";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";

import { FaEdit, FaUserPlus, FaWindowClose } from 'react-icons/fa';

export default function cashflow() {

    const [payments,setPayments] = useState([]);

    const columns = [
        {
            text: 'Name',
        },
        {
            text: 'Customer',
        },
        {
            text: 'Date'
        },
        {
            text: 'Location'
        },
        {
            text: 'Progress'
        },
        {
            text: 'Action'
        }
    ]

    useEffect(()=>{
        const getEvents = () => {
            return axios.get("/event");
        }

        const getEvent_Staff = () => {
            return axios.get("/event");
        }

        Promise.all([getEvents()]).then((res) => {
            let payments = res[0].data.events;
            setPayments(payments)
            console.log(payments);
        })
    },[])

    return(
        <>
            <div id="wrapper">
                <Sidebar linkId="cashflow" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Bookings</h1>
                            </div>
                            <div className='row'>
                                <div className='mb-4' id="accountsTableCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Event Bookings</div>
                                        <div className='card-body'>
                                            <div className='table-responsive'>
                                                <table className='table' id="accountsTable">
                                                    <thead>
                                                        <tr>
                                                            {columns.map((c) => (
                                                                <th key={c.text} >{c.text}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {payments.map((a) => (
                                                            <tr id={a._id} key={a._id}>
                                                                <td>{a.title}</td>
                                                                <td>{a.userName}</td>
                                                                <td>{(a.start_date).split('T')[0] + " to " + (a.end_date).split('T')[0]}</td>
                                                                <td>{a.location}</td>
                                                                <td>
                                                                    {(a.status == "Pending") && (
                                                                        <>
                                                                            <h4 className="small font-weight-bold">{a.status}
                                                                                <span className="float-right">25%</span></h4>
                                                                            <div className="progress mb-4">
                                                                                <div className="progress-bar bg-warning" role="progressbar"
                                                                                    style={{ width: '20%' }}></div>
                                                                            </div>
                                                                        </>
                                                                    )}

                                                                    {(a.status == "Approved") && (
                                                                        <>
                                                                            <h4 className="small font-weight-bold">{a.status}
                                                                                <span className="float-right">50%</span></h4>
                                                                            <div className="progress mb-4">
                                                                                <div className="progress-bar bg-primary" role="progressbar"
                                                                                    style={{ width: '50%' }}></div>
                                                                            </div>
                                                                        </>
                                                                    )}

                                                                    {(a.status == "Paid") && (
                                                                        <>
                                                                            <h4 className="small font-weight-bold">{a.status}
                                                                                <span className="float-right">75%</span></h4>
                                                                            <div className="progress mb-4">
                                                                                <div className="progress-bar bg-info" role="progressbar"
                                                                                    style={{ width: '75%' }}></div>
                                                                            </div>
                                                                        </>
                                                                    )}

                                                                    {(a.status == "Completed") && (
                                                                        <>
                                                                            <h4 className="small font-weight-bold">{a.status}
                                                                                <span className="float-right">100%</span></h4>
                                                                            <div className="progress mb-4">
                                                                                <div className="progress-bar bg-info" role="progressbar"
                                                                                    style={{ width: '100%' }}></div>
                                                                            </div>
                                                                        </>
                                                                    )}

                                                                </td>
                                                                <td>
                                                                    <button className='btn' onClick={(e) => { onClickUpdate(a.userid) }}>
                                                                        <FaEdit />
                                                                    </button>
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