
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../../utils/product';
import { CartContext, CartDispatchContext } from '../../context/productContext';
import axios from '../../utils/axios'
import React, { useContext, useState,useEffect } from 'react'

import Swal from 'sweetalert2'


import { FaAlignJustify,FaDollarSign, FaShoppingCart,FaRegCalendarAlt,FaRegPlayCircle,FaQuestionCircle,FaEye} from 'react-icons/fa';
var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';


export default function Dashboard() {
  const [setCart, setPrices] = useContext(CartDispatchContext);
  const [cart,prices]= useContext(CartContext);
  const[events,setEvents] = useState([]);
  const[rejectedEvents,setRejectedEvents] = useState([]);
  // const[events,setEvents] = useState([]);
  // const[cancels,setCancels] = useState([]);
  // const[totalevents,setTotalevents] = useState(0);
  // const[cancelledevents,setCancelledevents] = useState(0);
  // const[approvedevents,setApprovedevents] = useState(0);
  // const[pendingevents,setPendingevents] = useState(0);

  
  // const [cart, setCart] = useState([])
  const router = useRouter()
  
  const months = Array.from({length: 12}, (item, i) => {
    return new Date(0, i).toLocaleString('en-US',{month: 'long'})
});

const findElementByMonth = (arr, month) => arr.filter(element => element.createdAt.getMonth == month);
const findElementByStatus = (arr, status) => arr.filter(element => element.status == status);

const cardtitles= [
    { one: "TOTAL BOOKINGS"},
    { two: "PENDING BOOKINGS"},
    { three: "TOTAL INCOME"},
    { four: "TOTAL PAYABLE"}
]

  useEffect(() => {
    const table2 = () => {
      $(function() {
          $('#rejectedTable').DataTable({
              ordering:true,
              select: true,
              responsive: true,
              buttons: [
                  'copy','excel','pdf'
              ]
          });
      });
    }
    const table1 = () => {
      $(function() {
          $('#bookingsTable').DataTable({
              ordering:true,
              select: true,
              responsive: true,
              buttons: [
                  'copy','excel','pdf'
              ]
          });
      });
    }
    axios.get("/event").then((res)=>{
      setEvents(res.data.events);
      table1();
    }).catch((error) => {
      console.log(error)
  })
  
  

}, [])

const handleClick = (item) => {
  item.amount = 1
  if (cart.indexOf(item) !== -1) return;
  setCart([...cart, item]);
  router.push("/cart")
};

const showEvent= () => {
  Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}
  return (
     <div class="site-wrap">
     <Header />
    
     <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0">
            <a href="index.html">My Events</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">My Events</strong></div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">

        <div class="row mb-5">
          <div class="col-md-9 order-2">

            <div class="row mb-5 border p-4 rounded">
                {/* Content Row */}
                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                <strong >Rejected Events</strong></div>
                <br />

                <table className='table' id="rejectedTable">
                  <thead>
                      <tr>
                          {/* {columns.map((c) => ( */}
                              {/* <th key={c.text} >{c.text}</th> */}
                              <th>Event Id</th>
                              <th>Event Name</th>
                              <th>Event Status</th>
                              <th>Paid Amount</th>
                              <th>Pending Amount</th>
                              <th></th>
                          {/* ))} */}
                      </tr>
                  </thead>
                  <tbody>
                  {/* {events.map((a) => ( */}
                  {events.map((item, i) => (
                    (item.status=="Rejected")?(
                      <tr key={i}>
                              <td>{item._id}</td>
                              <td>{item.title}</td>
                              <td>{item.status}</td>
                              <td>{item.price}</td>
                              <td>{item.finalPay}</td>
                              <td onClick={showEvent}><FaEye color='black' fontSize="16px" padding-left='10'/></td>
                              
                          </tr>
                    ):(null)
                             
                      ))} 
                  </tbody>
              </table>
            </div>
            <div class="row mb-5 border p-4 rounded">
                {/* Content Row */}
               <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
               <strong > All Events</strong></div>
                <table className='table' id="bookingsTable">
                  <thead>
                      <tr>
                          {/* {columns.map((c) => ( */}
                              {/* <th key={c.text} >{c.text}</th> */}
                              <th>Event Id</th>
                              <th>Event Name</th>
                              <th>Event Status</th>
                              <th>Paid Amount</th>
                              <th>Pending Amount</th>
                              <th></th>
                          {/* ))} */}
                      </tr>
                  </thead>
                  <tbody>
                  {/* {events.map((a) => ( */}
                  {events.map((item, i) => (
                            <tr key={i}>
                              <td>{item._id}</td>
                              <td>{item.title}</td>
                              <td>{item.status}</td>
                              <td>{item.price}</td>
                              <td>{item.finalPay}</td>
                              <td onClick={showEvent}><FaEye color='black' fontSize="16px" padding-left='10'/></td>
                              
                          </tr> 
                      ))} 
                  </tbody>
              </table>
            </div>
          </div>

          <div class="col-md-3 order-1 mb-5 mb-md-0">

          <div class="border p-4 rounded mb-4">
              
              <a href="./dashboard" class="h6 list-group-item "><FaAlignJustify color='black' fontSize="16px" padding-left='10'/><span class="p-4">Dashboard</span></a>
              <a href="#" class="h6 list-group-item active"><FaRegPlayCircle color='black' fontSize="16px" padding-left='10'/> <span class="p-4">My Events</span></a>
              <a href="#" class="h6 list-group-item "><FaRegCalendarAlt color='black' fontSize="16px" padding-left='10'/><span class="p-4">My Bookings</span></a>
              <a href="#" class="h6 list-group-item "><FaShoppingCart color='black' fontSize="16px" padding-left='10'/> <span class="p-4">My Purchases</span></a>
              <a href="#" class="h6 list-group-item "><FaDollarSign color='black' fontSize="16px" padding-left='10'/> <span class="p-4">My Payments</span></a>
              <a href="#" class="h6 list-group-item "><FaQuestionCircle color='black' fontSize="16px" padding-left='10'/> <span class="p-4">FAQ</span></a>
              
            </div>

            
                <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white" disabled="" />
              </div>

            </div>
          </div>
      </div>

   </div>
   

  )
}
