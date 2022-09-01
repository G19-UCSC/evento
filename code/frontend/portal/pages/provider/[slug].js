
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../../utils/product';
import { CartContext, CartDispatchContext } from '../../context/productContext';
import axios from '../../utils/axios'
import React, { useContext, useState, useEffect } from 'react'

export default function Product() {
    // const [setCart, setPrices] = useContext(CartDispatchContext);
    //  const [cart, prices] = useContext(CartContext);


    const [products, setProducts] = useState([])
    const [productsAll, setProductsAll] = useState([])
    // const [cart, setCart] = useState([])
    const router = useRouter()



    useEffect(() => {
        axios.get("/product").then((res) => {
            setProducts(res.data.products)
            setProductsAll(res.data.products)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }, [])

    // const handleClick = (item) => {
    // item.amount = 1
    //  if (cart.indexOf(item) !== -1) return;
    //  setCart([...cart, item]);
    //   router.push("/cart")
    // };


    return (



        <div class="site-wrap">

            <Header />


            <section class="h-100 gradient-custom-2">

                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-lg-9 col-xl-7">
                            <div class="card">
                                <div class="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#000" }, { height: "200px" }} >
                                    <div class="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                            alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2" style={{ width: "150px" }} />

                                    </div>
                                    <div class="ms-3" style={{ marginTop: "130px" }}>
                                        <h5>Andy Horwitz</h5>
                                        <p>New York</p>
                                    </div>
                                </div>
                                <div class="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
                                    <div class="d-flex justify-content-end text-center py-1">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="site-section">
                    <div class="container">

                        <div class="row mb-5">
                            <div class="col-md-9 order-2">

                                <div class="row">
                                    <div class="col-md-12 mb-5">
                                        <div class="float-md-left mb-4"><h2 class="text-black h5">Products</h2></div>
                                        <div class="d-flex">
                                            <div class="dropdown mr-1 ml-md-auto">
                                                <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Latest
                                                </button>
                                                {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                      <a class="dropdown-item" href="#">Men</a>
                      <a class="dropdown-item" href="#">Women</a>
                      <a class="dropdown-item" href="#">Children</a>
                    </div> */}
                                            </div>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                                    <a class="dropdown-item" href="#">Relevance</a>
                                                    <a class="dropdown-item" href="#">Name, A to Z</a>
                                                    <a class="dropdown-item" href="#">Name, Z to A</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="#">Price, low to high</a>
                                                    <a class="dropdown-item" href="#">Price, high to low</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-5">
                                    {products.map((item, i) => (
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
                                                <div class="d-flex justify-content-between mb-2" style={{ marginTop: "20px" }}>
                                                    <button type="button" class="w-100 btn btn-outline-dark" onClick={() => handleClick(item)}>Add to cart</button>
                                                    <Link href=" "><button type="button" class="w-100 btn btn-dark">View Product</button></Link>
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
                                        <li class="mb-1"><a href="#" onClick={() => setProducts(productsAll)} class="d-flex"><span>All</span> <span class="text-black ml-auto"> &nbsp;({productsAll.length})</span></a></li>
                                        <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll, 'clothing'))} class="d-flex"><span>Clothing</span> <span class="text-black ml-auto"> &nbsp;({filterByCategory(productsAll, 'clothing').length})</span></a></li>
                                        <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll, 'food'))} class="d-flex"><span>Food</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll, 'food').length})</span></a></li>
                                        <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll, 'decor'))} class="d-flex"><span>Decor</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll, 'decor').length})</span></a></li>
                                    </ul>
                                </div>

                                <div class="border p-4 rounded mb-4">

                                    <h3 class="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                                    <ul class="list-unstyled mb-0">
                                        <li class="mb-1"><a href="#" onClick={() => setProducts(productsAll)} class="d-flex"><span>Any Price</span> </a></li>
                                        <li class="mb-1"><a href="#" onClick={() => setProducts(filterByPrice(productsAll, 0, 1000))} class="d-flex"><span>Under Rs.1000</span> </a></li>
                                        <li class="mb-1"><a href="#" onClick={() => setProducts(filterByPrice(productsAll, 1000, 5000))} class="d-flex"><span>Rs.1000 to Rs.5000</span> </a></li>
                                        <li class="mb-1"><a href="#" onClick={() => setProducts(filterByPrice(productsAll, 5000, 10000))} class="d-flex"><span>Rs.5000 to Rs.10,000</span> </a></li>
                                        <li class="mb-1"><a href="#" onClick={() => setProducts(filterByPrice(productsAll, 10000, 10000000))} class="d-flex"><span>Above Rs.10,000</span></a></li>
                                    </ul>


                                </div>
                                <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white" disabled="" />
                            </div>

                        </div>
                    </div>
                </div>

                <div class="row">
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
                </div>



            </section>
            <Footer />
        </div>



    )
}