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
            text: 'Prodent/Service',
        },
        {
            text: 'Date',
        },
        {
            text: 'Provider'
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
                                        <div className="row card-header" >
                                            <div className="col-md-6  ">
                                                <div className="h5">My Products and Services</div>
                                            </div>
                                            {/* <div className="col-md-6  d-flex justify-content-end">
                                                <a href=""><button className="btn btn-dark" id="createBtn" onClick={addNewEvent}> <FaPlus /> Add Event</button></a>

                                            </div> */}
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
                                                            <td>
                                                                <img src="https://i.ytimg.com/vi/PDxvTCFutc8/maxresdefault.jpg" style={{ width: 40, height: 40 }} />

                                                                {' '}Black Forest</td>
                                                            <td>31/08/2022 10:00</td>
                                                            <td>Yummy Bakers</td>
                                                            <td>Approved</td>
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
                                                    <tbody>
                                                        {/* {accounts.map((a) => ( */}
                                                        {/* // id={a.userid} key={a.userid} */}
                                                        <tr >
                                                            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hZ7FrQg7FD4ggqIVAZGi7JQsBZbljq3e586cTOd1cDM60_baY5GWDETMUa_DHer2lzI&usqp=CAU" style={{ width: 40, height: 40 }} />

                                                                {' '}Write Your Invite</td>
                                                            <td>26/08/2022</td>
                                                            <td>Craft Papers</td>
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
                                                    <tbody>
                                                        {/* {accounts.map((a) => ( */}
                                                        {/* // id={a.userid} key={a.userid} */}
                                                        <tr >
                                                            <td><img src="https://sc04.alicdn.com/kf/HTB1xBZQdv1H3KVjSZFBq6zSMXXaj.jpg" style={{ width: 40, height: 40 }} />

                                                                {' '}Pink Off-shoulder Dress</td>
                                                            <td>28/08/2022</td>
                                                            <td>Forever Fashion</td>
                                                            <td>Accepted</td>
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