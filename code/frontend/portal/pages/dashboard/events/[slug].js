
import Footer from "../../../components/home/footer"
import Header from "../../../components/home/header"
import { useRouter } from 'next/router'


import React, { useContext, useState, useEffect, useMemo } from "react";
import axios from '../../../utils/axios'
import { CartContext, CartDispatchContext } from '../../../context/productContext';
import { filterByCategory, filterBySamePrice } from '../../../utils/product';
import Link from "next/link";


export default function Event() {
  const router = useRouter()
  const slug = router.query.slug
  const [setCart, setPrices] = useContext(CartDispatchContext);
  const [cart, prices] = useContext(CartContext);
  const [products, setProducts] = useState([])
  const [services, setServices] = useState([])
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)
  const [eventDetails, setEventDetails] = useState([])
  const [suggest, setSuggest] = useState(false)
  const [type, setType] = useState([]);

  const handleClick = (item) => {
    item.amount = 1
    if (packages.indexOf(item) !== -1) return;
    setPackages([...packages, item]);
    //   router.push("/package")
  };
  const handleClicks = (item) => {

    item.amount = 1
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    handlePrice([...cart, item])
    console.log([...cart, item])

  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    item.count ? setData({ name: 0 }) : setData({ name: 1 })
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    handlePrice([...arr])
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item._id !== id);
    setCart(arr);
    handlePrice(arr);
  };

  const handlePrice = (cart) => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * (item.price * (100) / 100)));
    setPrices(ans);
  };

  const sug = useMemo(() => {
    return 1;
  })

  useEffect(() => {

    const getEventProviders = () => {
      return (axios.get(`/eventProvider`))
    }

    const getProducts = () => {
      return (axios.get(`/product`))
    }

    const getServices = () => {
      return (axios.get(`/service`))
    }

    const getEvent = () => {
      return (axios.get(`/event/${slug}`))
    }

    Promise.all([getEventProviders(), getProducts(), getServices(), getEvent()]).then((res) => {
      let eventProvider = res[0].data.eventProviders;
      let products = res[1].data.products;
      let services = res[2].data.service;
      let eventDetails = res[3].data.event;
      setEventDetails(eventDetails);
      console.log(res)
      eventProvider = eventProvider.filter(element => element.eventid == slug);
      console.log(slug)
      eventProvider.forEach(e => {
        products.forEach(p => {
          if (e.productid == p._id) {
            console.log(p)
            if (e.status == "Accepted") {
              setCart([...cart, p])
            }
            e.productName = p.name;
            e.description = p.description;
            e.price = p.price;
            e.category = p.category;
            e.image_path = p.image_path
            e.count = p.count
          }
        })
      })
      eventProvider.forEach(e => {
        services.forEach(p => {
          if (e.productid == p._id) {
            e.productName = p.name;
            e.description = p.description;
            e.price = p.price;
            e.category = p.category;
            e.image_path = p.image_path
          }
        })
      })
      setProducts(eventProvider);
      console.log(eventProvider)
    })


    // setProductAll(filterByCategory(productAll,category))
  }, [slug])

  const suggession = (id) => {
    setSuggest(true);
    if (products.filter(element => element._id == id).length != 0) {
      let category = products.filter(element => element._id == id)[0].category;
      let price = products.filter(element => element._id == id)[0].price;
      setCategory(category)
      setPrice(price)
      setType(products)
    } else {
      let category = services.filter(element => element._id == id)[0].category;
      let price = services.filter(element => element._id == id)[0].price;
      setCategory(category)
      setPrice(price)
      setType(services)
    }
  }

  return (
    //      <div class="site-wrap">
    //      <Header />

    //      <div class="bg-light py-3">
    //       <div class="container">
    //         <div class="row">
    //           <div class="col-md-12 mb-0"><a href="index.html">Product</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Shop</strong></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="site-section">
    //       <div class="container">
    //         {console.log(product)}
    //         {product.map((item, i) => (
    //         <div class="row">
    //           <div class="col-md-6">
    //             <img src={item.image_path} alt="Image" class="img-fluid" />
    //           </div>
    //           <div class="col-md-6">
    //             <h2 class="text-black">{item.name}</h2>
    //             <p>{item.description}</p>

    //             <p><strong class="text-primary h4">{item.price}</strong></p>

    //             <div class="mb-5">

    //             </div>

    //           </div>

    //         </div>
    //         ))}
    //       </div>

    //     </div>

    //     <div class="site-section block-3 site-blocks-2 bg-light">
    //       <div class="container">
    //         <div class="row justify-content-center">
    //           <div class="col-md-7 site-section-heading text-center pt-4">
    //             {/* <h2>Featured Products</h2> */}
    //           </div>
    //         </div>

    //         <div class="row">
    //           <div class="col-md-12">
    //             <div class="nonloop-block-3 owl-carousel">



    //             </div>
    //           </div>
    //         </div>

    //       </div>
    //     </div>

    //      <Footer />
    //    </div>

    <div class="site-wrap">

      <Header />

      <div class="site-section">
        <div class="container">
          <div class="row mb-1">
            <form class="col-md-12" method="post">
              <div class="site-blocks-table">
                <table class="table table-bordered">
                  <thead >
                    <tr>
                      <th class="h6">Image</th>
                      <th class="h6">Product</th>
                      <th class="h6">Unit Price</th>
                      <th class="h6">Quantity</th>
                      <th class="h6">Status</th>
                      <th class="h6">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => (
                      <tr>

                        <td class="product-thumbnail">
                          <img src={item.image_path} layout='fill' alt="Image" class="img-fluid" />
                        </td>
                        <td class="product-name">
                          <h2 class="h5 text-black">{item.productName}</h2>
                        </td>
                        <td>{item.price}</td>
                        <td class="product-name">
                          {item.count ? (
                            <div class="input-group mb-2 ml-4" style={{ maxWidth: "120px" }}>
                              <div class="input-group-prepend">
                                <button onClick={() => handleChange(item, -1)} class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                              </div>
                              <input type="text" class="form-control text-center" value={1} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                              <div class="input-group-append">
                                <button onClick={() => handleChange(item, 1)} class="btn btn-outline-primary " type="button">+</button>
                              </div>
                            </div>) : (
                            <div>
                              {/* {setData({name : 1 })} */}
                              <p>Not Applicable</p>
                            </div>
                          )}


                        </td>

                        <td>{item.status}</td>
                        {item.status == "Rejected" ? (
                          <td><button onClick={() => suggession(item._id)} class="btn btn-primary btn-sm">Suggest</button></td>
                        ) : (
                          <td>Done</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          {(eventDetails.status == "Rejected") && (
            <div class="row">
              <div class="col-md-6">
                <div class="row mb-5">

                </div>
              </div>
              <div class="col-md-6 pl-5">
                <div class="row justify-content-end">
                  <div class="col-md-7">
                    <div class="row">
                      <div class="col-md-12 text-right border-bottom mb-5">
                        <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6">
                        <span class="text-black">Subtotal</span>
                      </div>
                      <div class="col-md-6 text-right">
                        <strong class="text-black">{prices}</strong>
                      </div>
                    </div>
                    <div class="row mb-5">
                      <div class="col-md-6">
                        <span class="text-black">Total</span>
                      </div>
                      <div class="col-md-6 text-right">
                        <strong class="text-black">{prices}</strong>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <Link href={{ pathname: "/checkout" }}><button class="btn btn-primary btn-lg py-3 btn-block" >Proceed To Checkout</button></Link>
                        {/* <Link to="/checkout"><button type="button" class="btn btn-primary" data-bs-toggle="button">Checkout</button></Link> */}
                      </div>
                    </div>


                  </div>
                </div>
              </div>


            </div>
          )}


        </div>
        <div class="container">

          <div class="row mb-5">
            <div class="col-md-9 order-2">

              <div class="row mb-5">
                {/* {services.map((item, i) => (
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
                          <Link href=" "><button type="button" class="w-100 btn btn-dark" onClick={() => router.push(`/service/${item._id}`)}>View More</button></Link>
                          <Link href=" "><button type="button" class="w-100 btn btn-dark" onClick={() => handleClicks(item)}>Add To Cart</button></Link>
                        </div>
                      </div>
                    </div>
                  ))} */}
                {/* {products.map((item, i) => (
                      <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={i}>
                        <div class="block-4 text-center border">
                          <figure class="block-4-image">
                            <a href="shop-single.html"><img src={item.image_path} style={{objectFit: "cover",height: "400px"}} layout='fill' alt="Image placeholder" class="img-fluid" /></a>
                          </figure>
                          <div class="block-4-text p-4">
                            <h3><a href="shop-single.html">{item.name}</a></h3>
                            <p class="mb-0">{item.description}</p>
                            <p class="text-primary font-weight-bold">Rs.{item.price}</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2" style={{ marginTop: "20px"}}>
                            <button type="button" class="w-100 btn btn-outline-dark" onClick={() => handleClicks(item)}>Add to cart</button>
                            <Link href=" "><button type="button" class="w-100 btn btn-dark" onClick={() => router.push(`/shop/${item._id}`)}>View Product</button></Link>
                          </div>
                        </div>
                      </div>
                    ))
                  } */}
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

            {(suggest) ? (
              <div class="col-md-3 order-1 mb-5 mb-md-0">
              <div class="border p-4 rounded mb-4">
                <h3 class="mb-3 h6 text-uppercase text-black d-block">Filters</h3>
                <ul class="list-unstyled mb-0">
                  <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(type, category))} class="d-flex">
                    <span>Same Category</span> <span class="text-black ml-auto"> &nbsp;({filterByCategory(type, category).length})</span></a>
                  </li>
                  <li class="mb-1"><a href="#" onClick={() => setProducts(filterBySamePrice(type, price))} class="d-flex">
                    <span>Same Price</span> <span class="text-black ml-auto"> &nbsp;({filterBySamePrice(type, price).length})</span></a>
                  </li>
                  {/* <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll, 'food'))} class="d-flex"><span>Food</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll, 'food').length})</span></a></li>
                  <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll, 'decor'))} class="d-flex"><span>Decor</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll, 'decor').length})</span></a></li> */}
                </ul>
              </div>
            </div>
            ) : (<></>)}
            
          </div>


        </div>
      </div>


      <Footer />
    </div>

  )
}
