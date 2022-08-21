import "bootstrap/dist/css/bootstrap.css";
import Header from  "../../components/admin/header";
import Sidebar from "../../components/admin/sidebar";
import Footer from "../../components/admin/footer";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { FaEdit } from "react-icons/fa";

export default function bookings() {

    const [events,setEvents] = useState([]);

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
            text: 'Status'
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

        const getUsers = () => {
            return axios.get("/user");
        }

        Promise.all([getEvents(),getUsers()]).then((res) => {
            let events = res[0].data.events;
            let users = res[1].data.users;
            events.forEach(e=>{
                users.forEach(u =>{
                    if(e.userid == u._userid){
                        e.userName = u.firstname + " " + u.lastname;
                    }
                })
            });
            console.log(events);
            console.log(users);
            setEvents(events);
        }).catch((error) => {
            console.log(error)
        })
        
    },[])

    return(
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
                                                        {events.map((a) => (
                                                            <tr id={a._id} key={a._id}>
                                                                <td>{a.title}</td>
                                                                <td>{a.userName}</td>
                                                                <td>{(a.start_date).split('T')[0] + " to " + (a.end_date).split('T')[0]}</td>
                                                                <td>{a.location}</td>
                                                                <td>{a.status}</td>
                                                                <td></td>
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