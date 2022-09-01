import "bootstrap/dist/css/bootstrap.css";
import Header from "../../components/provider/header";
import Sidebar from "../../components/provider/sidebar";
import Footer from "../../components/provider/footer";
import { useEffect, useState } from "react";

export default function bookings() {

    const [events, setEvents] = useState([]);

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
            text: 'Price'
        },
        {
            text: 'Quantity'
        }
    ]

    useEffect

    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="bookings" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Purchases</h1>
                            </div>
                            <div className='row'>
                                <div className='mb-4' id="accountsTableCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Purchases</div>
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
                                                        {/* {accounts.map((a) => (
                                                            <tr id={a.userid} key={a.userid}>
                                                                <td>{a.firstname + " " + a.lastname}</td>
                                                                <td>{a.username}</td>
                                                                <td>{a.email}</td>
                                                                <td>{a.status}</td>
                                                                <td>
                                                                    <button className='btn' onClick={(e) => { onClickUpdate(a.userid) }}>
                                                                        <FaEdit />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))} */}
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