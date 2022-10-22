import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../../utils/product';
import { CartContext, CartDispatchContext } from '../../context/productContext';
import axios from '../../utils/axios'
import React, { useContext, useState,useEffect } from 'react'

const service = (router,count,handleClicks,services,handlePrice) =>{

  const [setCart, setPrices,setTotalCount] = useContext(CartDispatchContext);
  const [cart,prices,TotalCount]= useContext(CartContext);
  
  const increaseCount = (count) => {
        setTotalCount(1)
        console.log(TotalCount)
      };
      const decreaseCount = (count) => {
        setTotalCount(count-1)
      };

    return(
        <div class="container">
                  
               <div class="row mb-5">
                 <div class="col-md-9 order-2">
       
                   <div class="row">
                     <div class="col-md-12 mb-5">
                       <div class="float-md-left mb-4"><h2 class="text-black h5">Select Services</h2></div>
                       <div class="d-flex float-md-right">
                         <div class=" mr-1 ml-md-auto float-right">
                         <button onClick={() => increaseCount(count)} type="button" class="btn btn-secondary btn-sm float-right"  aria-haspopup="true" aria-expanded="false">
                             Next
                           </button>
                         </div>
                         
                       </div>
                     </div>
                   </div>
                   <div class="row mb-5">
                   {services.map((item, i) => (
                     <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={i}>
                       <div class="block-4 text-center border">
                         <figure class="block-4-image">
                           <a href="shop-single.html"><img src={item.image_path} style={{objectFit: "cover",height: "250px"}} layout='fill' alt="Image placeholder" class="img-fluid" /></a>
                         </figure>
                         <div class="block-4-text p-4">
                           <h3><a href="shop-single.html">{item.name}</a></h3>
                           <p class="mb-0">{item.description}</p>
                           <p class="text-primary font-weight-bold">${item.price}</p>
                         </div>
                         <div class="d-flex justify-content-between mb-2" style={{ marginTop: "20px"}}>
                           {/* <button type="button" class="w-100 btn btn-outline-dark" onClick={() => handleClick(item)}>Booking Service</button> */}
                           <Link href=" "><button type="button" class="w-100 btn btn-dark" onClick={() => router.push(`/service/${item._id}`)}>View More</button></Link>
                           <Link href=" "><button type="button" class="w-100 btn btn-dark" onClick={() => handleClicks(item,handlePrice)}>Add To Cart</button></Link>
                         </div>
                       </div>
                     </div>
                     ))
                   }
       
                     
       
                   </div>
                   {/* <div class="row" data-aos="fade-up">
                     <div class="col-md-12 text-center">
                       <div class="site-block-27">
                         <ul>
                           <li><a href="#">&lt;</a></li>
                           <li class="active"><span>1</span></li>
                           <li><a href="#">2</a></li>
                           <li><a href="#">3</a></li>
                           <li><a href="#">4</a></li>
                           <li><a href="#">5</a></li>
                           <li><a href="#">&gt;</a></li>
                         </ul>
                       </div>
                     </div>
                   </div> */}
                 </div>
       
                 <div class="col-md-3 order-1 mb-5 mb-md-0">
                   <div class="border p-4 rounded mb-4">
                     <h3 class="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                     <ul class="list-unstyled mb-0">
                     {/* <li class="mb-1"><a href="#" onClick={() => setProducts(productsAll)} class="d-flex"><span>All</span> <span class="text-black ml-auto"> &nbsp;({productsAll.length})</span></a></li>
                       <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'clothing'))} class="d-flex"><span>Clothing</span> <span class="text-black ml-auto"> &nbsp;({filterByCategory(productsAll,'clothing').length})</span></a></li>
                       <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'food'))} class="d-flex"><span>Food</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll,'food').length})</span></a></li>
                       <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'decor'))} class="d-flex"><span>Decor</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll,'decor').length})</span></a></li> */}
                     </ul>
                   </div>
       
                   <div class="border p-4 rounded mb-4">
                     
                       <h3 class="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                     <ul class="list-unstyled mb-0"> 
                       {/* <li class="mb-1"><a href="#" onClick={() => setProducts(productsAll)} class="d-flex"><span>Any Price</span> </a></li>
                       <li class="mb-1"><a href="#" onClick={() => setProducts(filterByPrice(productsAll,0,1000))} class="d-flex"><span>Under Rs.1000</span> </a></li>
                       <li class="mb-1"><a href="#" onClick={() => setProducts(filterByPrice(productsAll,1000,5000))} class="d-flex"><span>Rs.1000 to Rs.5000</span> </a></li>
                       <li class="mb-1"><a href="#" onClick={() => setProducts(filterByPrice(productsAll,5000,10000))} class="d-flex"><span>Rs.5000 to Rs.10,000</span> </a></li>
                       <li class="mb-1"><a href="#" onClick={() => setProducts(filterByPrice(productsAll,10000,10000000))} class="d-flex"><span>Above Rs.10,000</span></a></li> */}
                     </ul>
                     
       
                   </div>
                       <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white" disabled="" />
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
                               <img src="images/weddings.jpg" style={{objectFit: "cover", height: "700px"}} layout='fill' alt="" class="img-fluid" />
                             </figure>
                             <div class="text">
                               <span class="text-uppercase">Collections</span>
                               <h3>Venue</h3>
                             </div>
                           </a>
                         </div>
                         <div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                           <a class="block-2-item" href="#">
                             <figure class="image">
                               <img src="images/bridal_shower.jpg" style={{objectFit: "cover", height: "700px"}} layout='fill' alt="" class="img-fluid" />
                             </figure>
                             <div class="text">
                               <span class="text-uppercase">Collections</span>
                               <h3>Decor</h3>
                             </div>
                           </a>
                         </div>
                         <div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
                           <a class="block-2-item" href="#">
                             <figure class="image">
                               <img src="images/lunch_food.jfif" style={{objectFit: "fill", height: "700px"}} layout='fill' alt="" class="img-fluid" />
                             </figure>
                             <div class="text">
                               <span class="text-uppercase">Collections</span>
                               <h3>Caterings</h3>
                             </div>
                           </a>
                         </div>
                       </div>
                     
                   </div>
                 </div>
               </div> */}
               </div>
               
             
    
    )
}

export default service;