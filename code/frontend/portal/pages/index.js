import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import axios from '../utils/axios'

// Components
import Footer from "../components/home/footer"
import Header from "../components/home/header"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("/product").then((res) => {
      setProducts(res.data.products)
    }).catch((error) => {
      console.log(error.response.data)
    })
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (



    <div class="site-wrap">
      <Header />

      <div class="site-blocks-cover" style={{ backgroundImage: `url(${"images/home_banner.jpg"})` }} data-aos="fade">
        <div class="container">
          <div class="row align-items-start align-items-md-center justify-content-end">
            <div class="col-md-5 text-center text-md-left pt-5 pt-md-0">
              <h1 class="mb-2">Evento</h1>
              <div class="intro-text text-center text-md-left">
                <p class="mb-4">Whether you are an individual or a corporation, our goal is to help you plan the ultimate party with spectacular entertainment, delicious food, and beautiful decor. </p>
                <p>
                  <a href="/shop" class="btn btn-sm btn-primary">Book Now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="site-section site-section-sm site-blocks-1">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
              <div class="icon mr-4 align-self-start">
                <span class="icon-truck"></span>
              </div>
              <div class="text">
                <h2 class="text-uppercase">Free Delivery</h2>
                <p>Orders delivery to an eligible destination with at least the stated minimum threshold of eligible items, qualify for Free Delivery by Evento.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
              <div class="icon mr-4 align-self-start">
                <span class="icon-refresh2"></span>
              </div>
              <div class="text">
                <h2 class="text-uppercase">Free Returns</h2>
                <p>Items delivered from Evento, can be returned within 30 days of delivery, with some exceptions.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
              <div class="icon mr-4 align-self-start">
                <span class="icon-help"></span>
              </div>
              <div class="text">
                <h2 class="text-uppercase">Customer Support</h2>
                <p>Contact our customer support to gain further details and support in event bookings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section site-blocks-2">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
              <a class="block-2-item" href="#">
                <figure class="image">
                  <img src="images/weddings.jpg" style={{ objectFit: "cover", height: "600px" }} layout='fill' alt="" class="img-fluid" />
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
                  <img src="images/bridal_shower.jpg" style={{ objectFit: "cover", height: "600px" }} layout='fill' alt="" class="img-fluid" />
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
                  <img src="images/lunch_food.jfif" style={{ objectFit: "fill", height: "600px" }} layout='fill' alt="" class="img-fluid" />
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

      <div class="site-section block-3 site-blocks-2 bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7 site-section-heading text-center pt-4">
              <h2>Featured Products</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="block-3 ">
                {/* {products.map((item, i) => (
               <div class="item">
                 <div class="block-4 text-center">
                   <figure class="block-4-image">
                     <img src={item.image_path} layout='fill' alt="Image placeholder" class="img-fluid" />
                   </figure>
                   <div class="block-4-text p-4">
                     <h3><a href="#">{item.name}</a></h3>
                     <p class="mb-0">{item.description}</p>
                     <p class="text-primary font-weight-bold">{item.price}</p>
                   </div>
                 </div>
               </div>
                 ))
                } */}
                <Carousel responsive={responsive}>
                  <div class="item">
                    <div class="block-4 text-center">
                      <figure class="block-4-image">
                        <img src="/images/wedding_clothing.jfif" style={{ objectFit: "fill", height: "400px" }} layout='fill' alt="Image placeholder" class="img-fluid" />
                      </figure>
                      <div class="block-4-text p-4">
                        <h3><a href="#">Wedding Lace Dress</a></h3>
                        <p class="mb-0">The perfect dream dress for your wedding</p>
                        <p class="text-primary font-weight-bold">Rs. 20,000</p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="block-4 text-center">
                      <figure class="block-4-image">
                        <img src="/images/family_events.jpg" style={{ objectFit: "fill", height: "400px" }} layout='fill' alt="Image placeholder" class="img-fluid" />
                      </figure>
                      <div class="block-4-text p-4">
                        <h3><a href="#">Party Decorations</a></h3>
                        <p class="mb-0">Decorate your parties</p>
                        <p class="text-primary font-weight-bold">Rs. 10000</p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="block-4 text-center">
                      <figure class="block-4-image">
                        <img src="/images/vanilla_wedding_cake013.jfif" style={{ objectFit: "fill", height: "400px" }} layout='fill' alt="Image placeholder" class="img-fluid" />
                      </figure>
                      <div class="block-4-text p-4">
                        <h3><a href="#">Multi Tier Cakes</a></h3>
                        <p class="mb-0">Vanilla cake with multiple layers</p>
                        <p class="text-primary font-weight-bold">Rs. 8000</p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="block-4 text-center">
                      <figure class="block-4-image">
                        <img src="/images/rose_bouquet015.jfif" style={{ objectFit: "fill", height: "400px" }} layout='fill' alt="Image placeholder" class="img-fluid" />
                      </figure>
                      <div class="block-4-text p-4">
                        <h3><a href="#">Rose Bouquet</a></h3>
                        <p class="mb-0">Bouquet bundled with roses and white flowers</p>
                        <p class="text-primary font-weight-bold">Rs. 6000</p>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="site-section block-8">
        <div class="container">
          {/* <div class="row justify-content-center  mb-5">
           <div class="col-md-7 site-section-heading text-center pt-4">
             <h2>Big Sale!</h2>
           </div>
         </div> */}
          {/* <div class="row align-items-center">
           <div class="col-md-12 col-lg-7 mb-5">
             <a href="#"><img src="/images/blog_1.jpg" layout='fill' alt="Image placeholder" class="img-fluid rounded" /></a>
           </div>
           <div class="col-md-12 col-lg-5 text-center pl-md-5">
             <h2><a href="#">50% less in all items</a></h2>
             <p class="post-meta mb-4">By <a href="#">Carl Smith</a> <span class="block-8-sep">&bullet;</span> September 3, 2018</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
             <p><a href="#" class="btn btn-primary btn-sm">Shop Now</a></p>
           </div>
         </div> */}
        </div>
      </div>
      <Footer />
    </div>

  )
}
