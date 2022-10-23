
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../../utils/product';
import { CartContext, CartDispatchContext } from '../../context/productContext';
import axios from '../../utils/axios'
import React, { useContext, useState,useEffect } from 'react'
<script type="text/javascript" src="../../public/js/sidebar.js"></script>
import Cards from "./cards"
import Linechart from "./linechart"
import Piechart from "./piechart"
import { FaAlignJustify,FaDollarSign, FaShoppingCart,FaRegCalendarAlt,FaRegPlayCircle,FaQuestionCircle } from 'react-icons/fa';



export default function Dashboard() {
  const [setCart, setPrices] = useContext(CartDispatchContext);
  const [cart,prices]= useContext(CartContext);

  const[events,setEvents] = useState([]);
  const[cancels,setCancels] = useState([]);
  const[totalevents,setTotalevents] = useState(0);
  const[cancelledevents,setCancelledevents] = useState(0);
  const[approvedevents,setApprovedevents] = useState(0);
  const[pendingevents,setPendingevents] = useState(0);

  
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
    axios.get("/event").then((res)=>{
        let events = res.data.events
        let bookingCount = [0,0,0,0,0,0,0,0,0,0,0,0];
        let cancellationCount = [0,0,0,0,0,0,0,0,0,0,0,0];
        events.forEach(e=>{
            let month = (e.createdAt.split('T')[0].split('-')[1]);
            switch(month){
                case '01': bookingCount[0] += 1; break;
                case '02': bookingCount[1] += 1; break;
                case '03': bookingCount[2] += 1; break;
                case '04': bookingCount[3] += 1; break;
                case '05': bookingCount[4] += 1; break;
                case '06': bookingCount[5] += 1; break;
                case '07': bookingCount[6] += 1; break;
                case '08': bookingCount[7] += 1; break;
                case '09': bookingCount[8] += 1; break;
                case '10': bookingCount[9] += 1; break;
                case '11': bookingCount[10] += 1; break;
                default: bookingCount[11] += 1; break;
            }
        })
        let pending = findElementByStatus(events,"Pending")
        let approved = findElementByStatus(events,"Approved")
        setEvents(bookingCount);
        setCancels(cancellationCount);
        console.log(events.length);
        setTotalevents(events.length);
        setPendingevents(pending.length);
        setApprovedevents(approved.length);

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


  return (
     <div class="site-wrap">
     <Header />
    
     <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0">
            <a href="index.html">Dashboard</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Dashboard</strong></div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">

        <div class="row mb-5">
          <div class="col-md-9 order-2">

            <div class="row mb-5">
                                  {/* Content Row */}
                                  <div className="row">
                        <Cards cardTitles={cardtitles} cardData={[totalevents,pendingevents]} />
                    </div>

                    {/* Content Row */}
                    <div className="row">
                               <div className="col-xl-8 col-lg-7">
                                   <Linechart
                                       cardTitle="Bookings vs Time" xData={months} name1="Booked Events" name2="Cancelled Events"
                                       series1={events} series2={cancels}
                                   />
                               </div>

                        {/* Pie Chart */}
                               <div className="col-xl-4 col-lg-5">
                                   <Piechart 
                                       cardTitle="Event Bookings" names={["Booked Events", "Pending Events", "Approved Events", "Cancelled Events"]}
                                       series={[totalevents, pendingevents, approvedevents, cancelledevents]}
                                   />
                               </div>
                    </div>
            {/* {products.map((item, i) => (
              <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={i}>
                <div class="block-4 text-center border">
                  <figure class="block-4-image">
                    <a href="shop-single.html"><img src={item.image_path} layout='fill' alt="Image placeholder" class="img-fluid" /></a>
                  </figure>
                  <div class="block-4-text p-4">
                    <h3><a href="shop-single.html">{item.name}</a></h3>
                    <p class="mb-0">{item.description}</p>
                    <p class="text-primary font-weight-bold">${item.price}</p>
                  </div>
                  <div class="d-flex justify-content-between mb-2" style={{ marginTop: "20px"}}>
                    <button type="button" class="w-100 btn btn-outline-dark" onClick={() => handleClick(item)}>Add to cart</button>
                    <Link href=" "><button type="button" class="w-100 btn btn-dark" onClick={() => router.push(`/shop/${item._id}`)}>View Product</button></Link>
                  </div>
                </div>
              </div>
              ))} 
              } */}

              

            </div>
          </div>

          <div class="col-md-3 order-1 mb-5 mb-md-0">

          <div class="border p-4 rounded mb-4">
              {/* <h3 class="h6 text-uppercase text-black d-block">Dashboard</h3>
              <h3 class="h6 text-uppercase text-black d-block">My Events</h3> */}
              <a href="#" class="h6 list-group-item active"><FaAlignJustify color='black' fontSize="16px" padding-left='10'/><span class="p-4">Dashboard</span></a>
              <a href="./myEvents" class="h6 list-group-item "><FaRegPlayCircle color='black' fontSize="16px" padding-left='10'/> <span class="p-4">My Events</span></a>
              <a href="#" class="h6 list-group-item "><FaRegCalendarAlt color='black' fontSize="16px" padding-left='10'/><span class="p-4">My Bookings</span></a>
              <a href="#" class="h6 list-group-item "><FaShoppingCart color='black' fontSize="16px" padding-left='10'/> <span class="p-4">My Purchases</span></a>
              <a href="#" class="h6 list-group-item "><FaDollarSign color='black' fontSize="16px" padding-left='10'/> <span class="p-4">My Payments</span></a>
              <a href="#" class="h6 list-group-item "><FaQuestionCircle color='black' fontSize="16px" padding-left='10'/> <span class="p-4">FAQ</span></a>
              {/* <ul class="list-unstyled mb-0">
              <li class="mb-1"><a href="#" onClick={() => setProducts(productsAll)} class="d-flex"><span>All</span> <span class="text-black ml-auto"> &nbsp;({productsAll.length})</span></a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'clothing'))} class="d-flex"><span>Past</span> <span class="text-black ml-auto"> &nbsp;({filterByCategory(productsAll,'clothing').length})</span></a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'food'))} class="d-flex"><span>Upcomming</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll,'food').length})</span></a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'decor'))} class="d-flex"><span>Decor</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll,'decor').length})</span></a></li>
              </ul> */}
            </div>

            {/* <div class="border p-4 rounded mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">My Pruchases</h3>
              <ul class="list-unstyled mb-0">
              <li class="mb-1"><a href="#" onClick={() => setProducts(productsAll)} class="d-flex"><span>All</span> <span class="text-black ml-auto"> &nbsp;({productsAll.length})</span></a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'clothing'))} class="d-flex"><span>Completed</span> <span class="text-black ml-auto"> &nbsp;({filterByCategory(productsAll,'clothing').length})</span></a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'food'))} class="d-flex"><span>Uncompleted</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll,'food').length})</span></a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'decor'))} class="d-flex"><span>Refund</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll,'decor').length})</span></a></li>
              </ul>
            </div>

            <div class="border p-4 rounded mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">My Events</h3>
              <ul class="list-unstyled mb-0">
              <li class="mb-1"><a href="#" onClick={() => setProducts(productsAll)} class="d-flex"><span>All</span> <span class="text-black ml-auto"> &nbsp;({productsAll.length})</span></a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'clothing'))} class="d-flex"><span>Past</span> <span class="text-black ml-auto"> &nbsp;({filterByCategory(productsAll,'clothing').length})</span></a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'food'))} class="d-flex"><span>Upcomming</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll,'food').length})</span></a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'decor'))} class="d-flex"><span>Decor</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll,'decor').length})</span></a></li>
              </ul>
            </div>

            <div class="border p-4 rounded mb-4">
              
                <h3 class="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
              <ul class="list-unstyled mb-0"> 
                <li class="mb-1"><a href="#" onClick={() => setProducts(productsAll)} class="d-flex"><span>Any Price</span> </a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByPrice(productsAll,0,1000))} class="d-flex"><span>Under Rs.1000</span> </a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByPrice(productsAll,1000,5000))} class="d-flex"><span>Rs.1000 to Rs.5000</span> </a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByPrice(productsAll,5000,10000))} class="d-flex"><span>Rs.5000 to Rs.10,000</span> </a></li>
                <li class="mb-1"><a href="#" onClick={() => setProducts(filterByPrice(productsAll,10000,10000000))} class="d-flex"><span>Above Rs.10,000</span></a></li>
              </ul>
              

            </div> */}
                <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white" disabled="" />
              </div>

            </div>
          </div>
      </div>

        {/* <div class="row">
          <div class="col-md-12">
            <div class="site-section site-blocks-2">
                <div class="row justify-content-center text-center mb-5">
                  <div class="col-md-7 site-section-heading pt-4">
                    <h2>Categories</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
                    <a class="block-2-item" href="#">
                      <figure class="image">
                        <img src="images/women.jpg" layout='fill' alt="" class="img-fluid" />
                      </figure>
                      <div class="text">
                        <span class="text-uppercase">Collections</span>
                        <h3>Women</h3>
                      </div>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                    <a class="block-2-item" href="#">
                      <figure class="image">
                        <img src="images/children.jpg" layout='fill' alt="" class="img-fluid" />
                      </figure>
                      <div class="text">
                        <span class="text-uppercase">Collections</span>
                        <h3>Children</h3>
                      </div>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
                    <a class="block-2-item" href="#">
                      <figure class="image">
                        <img src="images/men.jpg" layout='fill' alt="" class="img-fluid" />
                      </figure>
                      <div class="text">
                        <span class="text-uppercase">Collections</span>
                        <h3>Men</h3>
                      </div>
                    </a>
                  </div>
                </div>
              
            </div>
          </div>
        </div> */}
        
      
    
    
     {/* <Footer/> */}
   </div>
   

  )
}
