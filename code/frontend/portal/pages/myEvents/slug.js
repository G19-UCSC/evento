
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"
import { useRouter } from 'next/router'

import React, {  useContext,useState,useEffect} from "react";
import axios from '../../utils/axios'
import { CartContext, CartDispatchContext } from '../../context/productContext';
import { filterByCategory } from '../../utils/product';
export default function Product() {
  const router = useRouter()
  const slug = router.query.slug
  const [setCart, setPrices] = useContext(CartDispatchContext);
  const [cart,prices]= useContext(CartContext);

  const [product,setProduct] = useState([])
  const [category,setCategory] = useState('wash')
  
  
  useEffect(() => {
    
    const getEventProviders = ()=>{
        return(axios.get(`/eventProvider`))
      }
    
      const getProducts = ()=>{
        return(axios.get(`/product`))
      }
    
      const getServices = ()=>{
        return(axios.get(`/service`))
      }
    
      Promise.all([getEventProviders(),getProducts(),getServices()]).then((res)=>{
        let eventProvider = res[0].data.eventProviders;
        let products = res[1].data.products;
        let services = res[2].data.service;
        console.log(res)
        eventProvider = eventProvider.filter(element=>element.eventid == slug);
        console.log(slug)
        eventProvider.forEach(e=>{
          products.forEach(p=>{
            if(e.productid == p._id){
              e.productName = p.name;
              e.description = p.description;
              e.price = p.price;
              e.category = p.category;
              e.image_path = p.image_path
            }
          })
        })
        eventProvider.forEach(e=>{
            services.forEach(p=>{
              if(e.productid == p._id){
                e.productName = p.name;
                e.description = p.description;
                e.price = p.price;
                e.category = p.category;
                e.image_path = p.image_path
              }
            })
          })
        setProduct(eventProvider);
        console.log(eventProvider)
      })

  
  // setProductAll(filterByCategory(productAll,category))
},[slug])


  return (
     <div class="site-wrap">
     <Header />
    
     <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="index.html">Product</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Shop</strong></div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        {console.log(product)}
        {product.map((item, i) => (
        <div class="row">
          <div class="col-md-6">
            <img src={item.image_path} alt="Image" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h2 class="text-black">{item.name}</h2>
            <p>{item.description}</p>
            
            <p><strong class="text-primary h4">{item.price}</strong></p>
           
            <div class="mb-5">

            </div>

          </div>
          
        </div>
        ))}
      </div>
      
    </div>

    <div class="site-section block-3 site-blocks-2 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 site-section-heading text-center pt-4">
            {/* <h2>Featured Products</h2> */}
          </div>
        </div>
       
        <div class="row">
          <div class="col-md-12">
            <div class="nonloop-block-3 owl-carousel">

              

            </div>
          </div>
        </div>
      
      </div>
    </div>
    
     <Footer />
   </div>

  )
}
