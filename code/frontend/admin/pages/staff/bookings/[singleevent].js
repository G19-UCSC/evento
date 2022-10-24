import "bootstrap/dist/css/bootstrap.css";
import Header from "../../../components/staff/header";
import Sidebar from "../../../components/staff/sidebar";
import Footer from "../../../components/staff/footer";
import { useEffect, useRef, useState } from "react";
import axios from "../../../utils/axios";
import { useRouter } from "next/router";
import { FaCheckCircle, FaCross, FaEye, FaMinus, FaPlus, FaSpinner, FaTimesCircle, FaUserPlus } from "react-icons/fa";

var $ = require('jquery');

export default function event() {

    const router = useRouter()
    const event = router.query.singleevent
    console.log('event', event);
    const [eventDetails, setEventDetails] = useState([]);
    const [userDetails, setUserDetails] = useState([]);
    const [packDetails, setPackDetails] = useState([]);
    const [eventProvider, setEventProvider] = useState([]);
    const [staff, setStaff] = useState([]);
    const [eventStaff, setEventStaff] = useState([]);
    const [allestaff, setAllestaff] = useState([]);
    const [pending, setPending] = useState(0);


    function getPendingAmount(eventdetail) {
        let amount = parseFloat(eventdetail.price, 10) + parseFloat(eventdetail.serviceCharge, 10);
        (eventdetail.advanceStatus == "Received") ? amount = -parseFloat(eventdetail.advance, 10) : amount;
        (eventdetail.finalPayStatus == "Received") ? amount = -parseFloat(eventdetail.finalPay, 10) : amount;
        return amount;
    }

    function getDateOnly(string) {
        return (string).split('T')[0];
    }

    useEffect(() => {

        const user_ = JSON.parse(localStorage.getItem('user'))

        const getEvent = () => {
            return (axios.get(`/event/${event}`))
        }

        const getAllEvents = () => {
            return (axios.get(`/event/`))
        }

        const getEventProvider = () => {
            return (axios.get('/eventProvider'))
        }

        const getProvider = () => {
            return (axios.get(`/provider/`))
        }

        const getProduct = () => {
            return (axios.get(`/product/`))
        }

        const getService = () => {
            return (axios.get(`/service/`))
        }

        const getRUsers = () => {
            return (axios.get(`/ruser/`))
        }

        const getEventStaff = () => {
            return (axios.get(`/eventstaff/`))
        }

        const getUsers = () => {
            return (axios.get(`/user/`))
        }

        Promise.all([getEventProvider(), getProduct(), getService(), getEvent(), getProvider(), getRUsers(), getEventStaff(), getUsers(), getAllEvents()]).then((res) => {
            let all = res[0].data.eventProviders;
            let eventproviders = all.filter(element => element.eventid == event);
            let products = res[1].data.products;
            let services = res[2].data.service;
            let eventdetail = res[3].data.event;
            let providers = res[4].data.providers;
            let rusers = res[5].data.users;
            let users = res[7].data.users;
            let allevents = res[8].data.events;
            console.log(eventproviders);
            console.log(products)
            console.log(services)
            console.log(eventdetail)
            console.log(providers)
            console.log(users);
            eventproviders.forEach(e => {
                products.forEach(p => {
                    if (e.productid == p._id) {
                        e.productname = p.name;
                    }
                })
            })
            eventproviders.forEach(e => {
                services.forEach(p => {
                    if (e.productid == p._id) {
                        e.productname = p.name;
                    }
                })
            })
            eventproviders.forEach(e => {
                e.provider = providers.filter(element => element.userid == e.providerid)[0].businessName;
            })
            let staff = rusers.filter(element => element.role == "Staff");
            let allestaff = res[6].data.alleventstaff;
            allestaff.forEach(e => {
                e.firstname = users.filter(element => element._userid == e.userid)[0].firstname;
                e.lastname = users.filter(element => element._userid == e.userid)[0].lastname;
                e.name = allevents.filter(element => element._id == e.eventid)[0].title;
                e.date = allevents.filter(element => element._id == e.eventid)[0].start_date;
                e.eventend = allevents.filter(element => element._id == e.eventid)[0].start_date;
                e.eventend = allevents.filter(element => element._id == e.eventid)[0].end_date;
                e.eventmax = allevents.filter(element => element._id == e.eventid)[0].maxPeople;
            })
            let estaff = allestaff.filter(element => element.eventid == event);
            staff.forEach(e => {
                e.firstname = users.filter(element => element._userid == e.userid)[0].firstname;
                e.lastname = users.filter(element => element._userid == e.userid)[0].lastname;
            })
            estaff.forEach(e => {
                staff = estaff.filter(element => element.userid != e.userid);
            })
            console.log(staff)
            console.log(estaff)
            console.log(allestaff)
            eventdetail.createdAt = getDateOnly(eventdetail.createdAt);
            eventdetail.start_date = getDateOnly(eventdetail.start_date);
            eventdetail.end_date = getDateOnly(eventdetail.end_date);

            setPending(getPendingAmount(eventdetail));
            setEventDetails(eventdetail);
            setEventProvider(eventproviders);
            setStaff(staff);
            setEventStaff(estaff);
            setAllestaff(allestaff);

            return (res[3].data);
        }).then(async (data) => {
            await axios.get(`/user/${data.event.userid}`).then((res) => {
                let u = res.data.user;
                console.log(u);
                setUserDetails(u);
            }).catch((error) => {
                console.log(error)
            })
            return (data)
        }).then(async (data) => {
            await axios.get(`/package/${data.event.packageid}`).then((res) => {
                console.log(res);
                setPackDetails(res.data.package)
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
        })

    }, [event])

    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="bookings" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">{eventDetails.title + "-" + userDetails.firstname +
                                    " " + userDetails.lastname}</h1>
                                <button className="btn btn-primary"> Generate Report </button>
                            </div>
                            <div className="row" id="rowOne" style={{ height: "100%", overflow: "auto" }}>
                                <div className='mb-4 col-lg-4' id="eventDetailsCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'> <h5>Event</h5> </div>
                                        <div className="card-body">
                                            <p className="card-text">Event Title - {eventDetails.title}</p>
                                            <p className="card-text">Booked On {eventDetails.createdAt}</p>
                                            <p className="card-text">Event Date {(eventDetails.start_date) + " to "
                                                + (eventDetails.end_date)}</p>
                                            <p className="card-text">Location at {eventDetails.location}</p>
                                        </div>
                                        <div className='card-header'> <b>Advanced Payment </b>
                                            {(eventDetails.advanceStatus == "Received") && <FaCheckCircle color="green" />}
                                            {(eventDetails.advanceStatus != "Received") && <FaSpinner color="blue" />} </div>
                                        <div className="card-body">
                                            <p className="cerd-text">
                                                {(eventDetails.advanceStatus == "Received") ?
                                                    <>
                                                        <table className="table">
                                                            <td>Rs. {eventDetails.advance}</td>
                                                            <td>{eventDetails.advanceDate}</td>
                                                        </table>
                                                    </>
                                                    :
                                                    <>
                                                        <p>Pending</p>
                                                    </>
                                                }
                                            </p>
                                        </div>
                                        <div className='card-header'> <b>Final Payment </b>
                                            {(eventDetails.finalPayStatus == "Received") && <FaCheckCircle color="green" />}
                                            {(eventDetails.finalPayStatus != "Received") && <FaSpinner color="blue" />} </div>
                                        <div className="card-body">
                                            <p className="cerd-text">
                                                {(eventDetails.finalPayStatus == "Received") ?
                                                    <>
                                                        <table className="table">
                                                            <td>Rs. {eventDetails.finalPayDate}</td>
                                                            <td>{eventDetails.finalPay}</td>
                                                        </table>
                                                    </>
                                                    :
                                                    <>
                                                        <p>Pending</p>
                                                    </>
                                                }
                                            </p>
                                        </div>
                                        <div className="card-header"> <b>Pending Amount</b></div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                Rs. {pending}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 col-lg-4' id="packageDetailsCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'> <b>Package</b></div>
                                        <div className="card-body">
                                            <p>Name : {packDetails.name}</p>
                                            <p>Type : {packDetails.category}</p>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Product/Service</th>
                                                        <th>Provider</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {eventProvider.map(e => (
                                                        <tr key={e._id}>
                                                            <td>
                                                                {(e.status == "Accepted") && <FaCheckCircle color="green" />}
                                                                {(e.status == "Pending") && <FaSpinner color="blue" />}
                                                                {(e.status == "Rejected") && <FaTimesCircle color="red" />}
                                                                {" " + e.productname}</td>
                                                            <td>{e.provider}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 col-lg-4' id="staffDetailsCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header d-flex justify-content-between'>
                                            <b>Monitored By</b>
                                            {/* <span className="mr-4">
                                                <button className="btn" onClick={(e) => (staffBtnClicked())}><FaUserPlus /></button>
                                            </span> */}
                                        </div>
                                        <div className="card-body">
                                            <table className="table">
                                                <tbody>
                                                    {(eventStaff.length != 0) && (eventStaff.map(e => (
                                                        <tr key={e.userid}>
                                                            <td>{e.firstname + " " + e.lastname}</td>
                                                            <td className="text-right mr-4">
                                                            </td>
                                                        </tr>
                                                    )))}
                                                    {(eventStaff.length == 0) && (
                                                        <tr><td>No Staff Assigned</td></tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}