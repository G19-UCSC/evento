import "bootstrap/dist/css/bootstrap.css";
import Header from "../../../components/admin/header";
import Sidebar from "../../../components/admin/sidebar";
import Footer from "../../../components/admin/footer";
import { useEffect, useRef, useState } from "react";
import axios from "../../../utils/axios";
import { useRouter } from "next/router";
import { FaCheckCircle, FaCross, FaEye, FaMinus, FaPlus, FaSpinner, FaTimesCircle, FaUserPlus } from "react-icons/fa";
import RevoCalendar from 'revo-calendar'
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

var $ = require('jquery');

export default function event() {

    const router = useRouter()
    const { event } = router.query
    const [eventDetails, setEventDetails] = useState([]);
    const [userDetails, setUserDetails] = useState([]);
    const [packDetails, setPackDetails] = useState([]);
    const [eventProvider, setEventProvider] = useState([]);
    const [staff, setStaff] = useState([]);
    const [eventStaff, setEventStaff] = useState([]);
    const [allestaff, setAllestaff] = useState([]);
    const [pending, setPending] = useState(0);
    const [staffAssign, setStaffAssign] = useState(false);
    const [staffView, setStaffView] = useState(false);
    const rowOne = useRef(null);
    const rowTwo = useRef(null);
    const [currentUser, setCurrentUser] = useState([]);

    var Data = []
    const [data, setData] = useState(Data);

    function getPendingAmount(eventdetail) {
        let amount = parseFloat(eventdetail.price, 10) + parseFloat(eventdetail.serviceCharge, 10);
        (eventdetail.advanceStatus == "Received") ? amount = -parseFloat(eventdetail.advance, 10) : amount;
        (eventdetail.finalPayStatus == "Received") ? amount = -parseFloat(eventdetail.finalPay, 10) : amount;
        return amount;
    }

    function getDateOnly(string) {
        return (string).split('T')[0];
    }

    function staffBtnClicked(e) {
        if (staffAssign) {
            setStaffAssign(false);
            setStaffView(false);
            rowOne.current.style.overflowY = "auto"
            rowOne.current.style.height = "100%"
        }
        else {
            setStaffAssign(true);
            rowOne.current.style.overflowY = "scroll"
            rowOne.current.style.height = "200px"
        }
    }

    function viewStaffEvent(userid) {
        setStaffView(true)
        let data = allestaff.filter(element => element.userid == userid)
        console.log(data)
        setData(data);
    }

    function assignStaff(id) {
        let newStaff = {
            userid: id,
            eventid: event,
            firstname: staff.filter(element => element.userid == id)[0].firstname,
            lastname: staff.filter(element => element.userid == id)[0].lastname,
            name: eventDetails.title,
            date: eventDetails.start_date,
            eventend: eventDetails.start_date,
            eventend: eventDetails.end_date,
            eventmax: eventDetails.maxPeople,
            status: "Assigned",

        }

        axios.post(`/eventStaff/`, newStaff).then((res)=>{
            console.log(res)
            setAllestaff([newStaff], ...allestaff)
            let allstaff = staff.filter(element => element.userid != id)
            console.log(allstaff);
            setStaff(allstaff);
            alert('Staff assigned Sucessfully')
        }).catch((err)=>{
            console.log(err)
        })

    }

    function removeStaff (id){
        let updateStaff = allestaff.filter(element => element.userid == id)[0];
        updateStaff.status = "Removed"
        console.log(updateStaff)
        let estaff = allestaff.filter(element=> element.userid != id)
        setAllestaff(estaff)
        setStaff([updateStaff], ...staff) 
    }

    useEffect(() => {

        const user_ = JSON.parse(localStorage.getItem('user'))

        const getCurrentUser = () => {
            return (axios.get(`/user/${user_.userid}`))
        }

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

        Promise.all([getEventProvider(), getProduct(), getService(), getEvent(), getProvider(), getRUsers(), getEventStaff(), getUsers(), getAllEvents(), getCurrentUser()]).then((res) => {
            let all = res[0].data.eventProviders;
            let eventproviders = all.filter(element => element.eventid == event);
            let products = res[1].data.products;
            let services = res[2].data.service;
            let eventdetail = res[3].data.event;
            let providers = res[4].data.providers;
            let rusers = res[5].data.users;
            let users = res[7].data.users;
            let allevents = res[8].data.events;
            let currentuser = res[9].data.user;
            console.log(eventproviders);
            console.log(products)
            console.log(services)
            console.log(eventdetail)
            console.log(providers)
            console.log(users);
            setCurrentUser(currentuser);
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
            let allestaff = res[6].data.alleventstaff.filter(element => element.status == "Assigned");
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
                staff = staff.filter(element => element.userid != e.userid);
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
    
    function generateReport(e) {
        let doc = new jsPDF();
        //PDF Header
        doc.addImage(('/images/evento-logo.jpeg'), 'JPEG', 20, 20, 0, 30, 50);
        doc.setFontSize(20)
        doc.text(65, 32, 'Evento Event Management');
        doc.setFontSize(8)
        doc.text(125, 5, Date())
        doc.setFontSize(12)
        doc.text(55, 43, `${eventDetails.title}`);
        doc.text(140, 43, 'By:' + ` ${currentUser.firstname}` + ' ' + `${currentUser.lastname}`);
        //PDF Header

        //PDF Content

        //Event Details
        doc.setFont(undefined, 'bold').text(20, 60, 'Event Details');
        doc.setFontSize(10)
        doc.setFont(undefined, 'bold').text(20, 70, 'Event Title:').setFont(undefined, 'normal').text(55, 70, `${eventDetails.title}`);
        doc.setFont(undefined, 'bold').text(20, 75, 'Scheduled User:').setFont(undefined, 'normal').text(55, 75, ` ${userDetails.firstname}` + `${userDetails.lastname}`);
        doc.setFont(undefined, 'bold').text(20, 80, 'Event Duration:').setFont(undefined, 'normal').text(55, 80, ` ${eventDetails.start_date}` + '-' + `${eventDetails.end_date}`);
        doc.setFont(undefined, 'bold').text(20, 85, 'Booked Date:').setFont(undefined, 'normal').text(55, 85, ` ${eventDetails.createdAt}`);
        doc.setFont(undefined, 'bold').text(20, 90, 'Location:').setFont(undefined, 'normal').text(55, 90, ` ${eventDetails.location}`);
        doc.setFont(undefined, 'bold').text(20, 95, 'Status:').setFont(undefined, 'normal').text(55, 95, ` ${eventDetails.status}`);

        //Payment Details
        doc.setFontSize(12).setFont(undefined, 'bold').text(125, 60, 'Payment Details');
        doc.setFontSize(10)
        doc.setFont(undefined, 'bold').text(125, 70, 'Advance Payment');
        doc.setFont(undefined, 'bold').text(125, 80, 'Payment:').setFont(undefined, 'normal').text(150, 80, `${eventDetails.advance}`);
        doc.setFont(undefined, 'bold').text(125, 85, 'Date:').setFont(undefined, 'normal').text(150, 85, ` ${userDetails.advanceDate}`);
        doc.setFont(undefined, 'bold').text(125, 95, 'Final Payment');
        doc.setFont(undefined, 'bold').text(125, 100, 'Payment:').setFont(undefined, 'normal').text(150, 100, `${eventDetails.finalPay}`);
        doc.setFont(undefined, 'bold').text(125, 105, 'Date:').setFont(undefined, 'normal').text(150, 105, ` ${userDetails.finalPayDate}`);

        //Package Details
        doc.setFontSize(12).setFont(undefined, 'bold').text(20, 125, 'Package Details');
        doc.setFontSize(10)
        doc.setFont(undefined, 'bold').text(20, 135, 'Name:').setFont(undefined, 'normal').text(55, 135, `${packDetails.name}`);
        doc.setFont(undefined, 'bold').text(20, 140, 'Type:').setFont(undefined, 'normal').text(55, 140, ` ${packDetails.category}`);
        doc.setFont(undefined, 'bold').text(20, 150, 'Products and Services');
        autoTable(doc, { html: '#my-table', theme: 'plain', startY: 155, })

        //Managed By
        let finalY = doc.lastAutoTable.finalY;
        doc.setFont(undefined, 'bold').text(20, finalY + 10, 'Managed By')
        autoTable(doc, { html: '#managed-by', theme: 'plain', startY: finalY + 15, });

        //PDF Content

        //PDF Footer
        doc.line(205, 275, 5, 275);
        doc.setFontSize(8)
        doc.text(65, 280, 'Address: No.35 Reid Avanue, Colombo 7, Sri Lanka');
        doc.text(60, 285, 'Email: evento@mail.com')
        doc.text(110, 285, 'Contact no: 011 - 000 0000')
        //PDF Footer
        doc.save('EventReport.pdf')
    }

    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="events" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">{eventDetails.title + "-" + userDetails.firstname +
                                    " " + userDetails.lastname}</h1>
                                <button className="btn btn-primary" onClick={e => generateReport(e)}> Generate Report </button>
                                <button className="btn btn-dark"> Cancel </button>
                            </div>
                            <div className="row" id="rowOne" ref={rowOne} style={{ height: "100%", overflow: "auto" }}>
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
                                            <table className="table" id="my-table">
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
                                            <span className="mr-4">
                                                <button className="btn" onClick={(e) => (staffBtnClicked())}><FaUserPlus /></button>
                                            </span>
                                        </div>
                                        <div className="card-body">
                                            <table className="table" id="managed-by">
                                                <tbody>
                                                    {(eventStaff.length != 0) && (eventStaff.map(s => (
                                                        <tr key={s.userid}>
                                                            <td>{s.firstname + " " + s.lastname}</td>
                                                            <td className="text-right mr-4">
                                                                <button className="btn" onClick={(e) => (removeStaff(s.userid))}>
                                                                <FaMinus color="red" /></button></td>
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
                            {(staffAssign) && (
                                <>
                                    <div className="row text-right mr-4">
                                        <div style={{ borderTop: "1px solid" }}>
                                            <button className="btn" onClick={(e) => (staffBtnClicked())}><FaTimesCircle /></button>
                                        </div>
                                    </div>
                                    <div className="row" id="rowTwo" ref={rowTwo} style={{ overflow: "auto" }}>
                                        <div className='mb-4 col-lg-4' id="staffDetailsCard">
                                            <div className="card shadow md-4">
                                                <div className='card-header d-flex justify-content-between'> <b>Available Staff</b></div>
                                                <div className="card-body">
                                                    <table className="table">
                                                        <tbody>
                                                        {(staff.length != 0) && (staff.map(s => (
                                                            <tr key={s.userid}>
                                                                <td>{s.firstname + " " + s.lastname}</td>
                                                                <td><button className="btn" onClick={(e) => { viewStaffEvent(s.userid) }}><FaEye /></button></td>
                                                                <td><button className="btn" onClick={(e) => { assignStaff(s.userid) }}><FaPlus /></button></td>
                                                            </tr>
                                                        )))}
                                                        {(staff.length == 0) && (
                                                            <tr><td>No Staff Available</td></tr>
                                                        )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mb-4 col-lg-8' id="staffDetailsCard">
                                            <div className="card shadow md-4">
                                                <div className='card-header'> <b>Calendar</b></div>
                                                <div className="card-body">
                                                    {(staffView) ? (
                                                        <RevoCalendar
                                                            events={data}
                                                            lang="en"
                                                            highlightToday={true}
                                                            style={{
                                                                height: "100%"
                                                            }}
                                                            primaryColor="#024fde"
                                                            secondaryColor="#D7E6EE"
                                                        />
                                                    ) : (
                                                        <p className="card-text">No Staff Selected</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
