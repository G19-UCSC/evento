import "bootstrap/dist/css/bootstrap.css";
import Header from "../../components/customer/header";
import Sidebar from "../../components/customer/sidebar";
import Footer from "../../components/customer/footer";
import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaEye, FaTrash } from 'react-icons/fa';
import { useRouter } from "next/router";
export default function bookings() {
    const router = useRouter()
    const [events, setEvents] = useState([]);
    const columns = [
        {
            text: 'Event Name',
        },
        {
            text: 'Date',
        },
        {
            text: 'Location'
        },
        {
            text: 'Status'
        },
        {
            text: 'Action'
        }
    ]
    // if (btn == 'null') {
    //     createFormViewBtn = <button className="btn" onClick={e => onClickCreate()} id="createBtn"> <FaUserPlus /> Add Question </button>
    // }
    // else {
    //     createFormViewBtn = <button className="btn" onClick={e => onClickCancel()}> <FaWindowClose /> Cancel </button>
    // }

    useEffect
    const addNewEvent = (e) => {
        e.preventDefault()
        router.push('./addEvent')
    }
    const onClickUpdate = (e) => {
        e.preventDefault()
        router.push('./updateEvent')
    }

    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="bookings" />
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
                                        <div className="row card-header" >
                                            <div className="col-md-6">
                                                <div className="h5">My Events</div>
                                            </div>
                                            <div className="col-md-6  d-flex justify-content-end">
                                                <a href=""><button className="btn btn-dark" id="createBtn" onClick={addNewEvent}> <FaPlus /> Add Event</button></a>

                                            </div>
                                        </div>

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
                                                        {/* {accounts.map((a) => ( */}
                                                        {/* // id={a.userid} key={a.userid} */}
                                                        <tr >
                                                            <td>Family Gathering</td>
                                                            <td>25/08/2022 10:00</td>
                                                            <td>Plaza Hotel Hall-3</td>
                                                            <td>Approved</td>
                                                            <td>
                                                                <button className='btn' onClick={(e) => { onClickView() }}>
                                                                    <FaEye />
                                                                </button>
                                                                <button className='btn' onClick={onClickUpdate}>
                                                                    <FaEdit />
                                                                </button>
                                                                <button className='btn' onClick={(e) => { onClickCancel() }}>
                                                                    <FaTrash />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        {/* ))} */}
                                                    </tbody>
                                                    <tbody>
                                                        {/* {accounts.map((a) => ( */}
                                                        {/* // id={a.userid} key={a.userid} */}
                                                        <tr >
                                                            <td>Birthday Gathering</td>
                                                            <td>31/08/2022 10:00</td>
                                                            <td>Beach side Resort</td>
                                                            <td>Pending</td>
                                                            <td>
                                                                <button className='btn' onClick={(e) => { onClickView() }}>
                                                                    <FaEye />
                                                                </button>
                                                                <button className='btn' onClick={(e) => { onClickUpdate() }}>
                                                                    <FaEdit />
                                                                </button>
                                                                <button className='btn' onClick={(e) => { onClickCancel() }}>
                                                                    <FaTrash />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        {/* ))} */}
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