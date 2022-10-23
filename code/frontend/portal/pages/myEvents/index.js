
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../../utils/product';
import { CartContext, CartDispatchContext } from '../../context/productContext';
import axios from '../../utils/axios'
import React, { useContext, useState,useEffect } from 'react'


import { FaAlignJustify,FaDollarSign, FaShoppingCart,FaRegCalendarAlt,FaRegPlayCircle,FaQuestionCircle } from 'react-icons/fa';
var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';


export default function Dashboard() {
  const [setCart, setPrices] = useContext(CartDispatchContext);
  const [cart,prices]= useContext(CartContext);
  const[events,setEvents] = useState([]);
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
      setEvents(res.data.events)
      table1();
    }).catch((error) => {
      console.log(error)
  })
  
    
    // axios.get("/event").then((res)=>{
    //     let events = res.data.events
    //     let bookingCount = [0,0,0,0,0,0,0,0,0,0,0,0];
    //     let cancellationCount = [0,0,0,0,0,0,0,0,0,0,0,0];
    //     events.forEach(e=>{
    //         let month = (e.createdAt.split('T')[0].split('-')[1]);
    //         switch(month){
    //             case '01': bookingCount[0] += 1; break;
    //             case '02': bookingCount[1] += 1; break;
    //             case '03': bookingCount[2] += 1; break;
    //             case '04': bookingCount[3] += 1; break;
    //             case '05': bookingCount[4] += 1; break;
    //             case '06': bookingCount[5] += 1; break;
    //             case '07': bookingCount[6] += 1; break;
    //             case '08': bookingCount[7] += 1; break;
    //             case '09': bookingCount[8] += 1; break;
    //             case '10': bookingCount[9] += 1; break;
    //             case '11': bookingCount[10] += 1; break;
    //             default: bookingCount[11] += 1; break;
    //         }
    //     })
    //     let pending = findElementByStatus(events,"Pending")
    //     let approved = findElementByStatus(events,"Approved")
    //     setEvents(bookingCount);
    //     setCancels(cancellationCount);
    //     console.log(events.length);
    //     setTotalevents(events.length);
    //     setPendingevents(pending.length);
    //     setApprovedevents(approved.length);

    // }).catch((error) => {
    //     console.log(error)
    // })

}, [])

const handleClick = (item) => {
  item.amount = 1
  if (cart.indexOf(item) !== -1) return;
  setCart([...cart, item]);
  router.push("/cart")
};


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

            <div class="row mb-5">
                                  {/* Content Row */}
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
