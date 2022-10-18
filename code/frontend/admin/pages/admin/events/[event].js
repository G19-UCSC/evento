import "bootstrap/dist/css/bootstrap.css";
import Header from "../../../components/admin/header";
import Sidebar from "../../../components/admin/sidebar";
import Footer from "../../../components/admin/footer";
import { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import { useRouter } from "next/router";
import { FaCheckCircle, FaCross, FaMinus, FaSpinner, FaTimesCircle, FaUserPlus } from "react-icons/fa";

export default function event() {

    const router = useRouter()
    const { event } = router.query
    const [eventDetails, setEventDetails] = useState([]);
    const [userDetails, setUserDetails] = useState([]);
    const [packDetails, setPackDetails] = useState([]);
    const [eventProvider, setEventProvider] = useState([]);

    useEffect(() => {

        const getEvent = () => {
            return (axios.get(`/event/${event}`))
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

        Promise.all([getEventProvider(),getProduct(),getService(),getEvent(),getProvider()]).then((res) => {
            let all = res[0].data.eventProviders;
            let eventproviders = all.filter(element => element.eventid == event);
            let products = res[1].data.products;
            let services = res[2].data.service;
            let eventdetail = res[3].data.event;
            let providers = res[4].data.providers;
            console.log(eventproviders);
            console.log(products)
            console.log(services)
            console.log(eventdetail)
            console.log(providers)
            eventproviders.forEach(e => {
                products.forEach(p => {
                    if(e.productid == p._id){
                        e.productname = p.name;
                    }
                })
            })
            eventproviders.forEach(e => {
                services.forEach(p => {
                    if(e.productid == p._id){
                        e.productname = p.name;
                    }
                })
            })
            eventproviders.forEach(e => {
                e.provider = providers.filter(element => element.userid == e.providerid)[0].businessName;
            })
            setEventDetails(eventdetail);
            setEventProvider(eventproviders);
            return(res[3].data);
        }).then(async (data)=>{
            await axios.get(`/user/${data.event.userid}`).then((res)=>{
                let u = res.data.user;
                console.log(u);
                setUserDetails(u);
            }).catch((error)=>{
                console.log(error)
            })
            return(data)
        }).then(async (data)=>{
            await axios.get(`/package/${data.event.packageid}`).then((res)=>{
                console.log(res);
                setPackDetails(res.data.package)
            }).catch((error)=>{
                console.log(error)
            })
        }).catch((error)=>{
            console.log(error)
        })

    }, [event])

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
                                <button className="btn btn-primary"> Generate Report </button>
                                <button className="btn btn-dark"> Cancel </button>
                            </div>
                            <div className="row">
                                <div className='mb-4 col-lg-4' id="eventDetailsCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'> <b>Event</b> </div>
                                        <div className="card-body">
                                            <p>Event Id = {event}</p>
                                            <p>{eventDetails.title}</p>
                                            <p>Booked On {eventDetails.createdAt}</p>
                                            {/* <p>Event Date {(eventDetails.start_date).split('T')[0] + " to "
                                             + (eventDetails.end_date).split('T')[0]}</p> */}
                                            <p>Location at {eventDetails.location}</p>
                                        </div>
                                    </div>
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Advanced Payment</div>
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
                                                                {(e.status == "Accepted") && <FaCheckCircle color="green"/>}
                                                                {(e.status == "Pending") && <FaSpinner color="grey"/>}
                                                                {(e.status == "Rejected") && <FaTimesCircle color="red"/>}
                                                                {" " + e.productname}</td>
                                                            <td>{e.provider}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4 col-lg-4' id="eventDetailsCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'> 
                                            <b>Monitored By</b>
                                        </div>
                                        <div className="card-title text-right mr-4"> 
                                            <button className="btn"><FaUserPlus/></button>
                                        </div>
                                        <div className="card-body">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>Staff1</td>
                                                        <td className="text-right mr-4"><button className="btn">
                                                            <FaMinus color="red"/></button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Staff1</td>
                                                        <td className="text-right mr-4"><button className="btn">
                                                            <FaMinus color="red"/></button></td>
                                                    </tr>
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
