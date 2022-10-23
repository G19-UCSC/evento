
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../../utils/product';
import { CartContext, CartDispatchContext } from '../../context/productContext';
import axios from '../../utils/axios'
import React, { useContext, useState,useEffect } from 'react'

export default function events() {
  // const [setPackages, setCost] = useContext(CartDispatchContext);
  // const [packages,cost]= useContext(CartContext);

  // const [setCart, setPrices,setTotalCount] = useContext(CartDispatchContext);
  // const [cart,prices, TotalCount]= useContext(CartContext);

  const router = useRouter()

  // Products and Services
  const [cnt, setCnt] = useState(0);
  const [services, setServices] = useState([])
  const [servicesAll, setServicesAll] = useState([])
  const [products, setProducts] = useState([])
  const [productsAll, setProductsAll] = useState([])

  // Cart Functions
  const [prices, setPrices] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState({ name: 0 });

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
    item.count ? setData({name : 0 }) : setData({name : 1})
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
    let discount = 0;
    cart.map((item) => (ans += item.amount * item.price));
    cart.map((item) => (discount += item.amount * (item.price  * (item.discount)/100)));
    setPrices(ans);
    setDiscount(discount);
  };

  // Use effect
  useEffect(() => {
    axios.get("/service").then((res)=>{
      setServices(res.data.service)
      setServicesAll(res.data.service)
    }).catch((error) => {
        console.log(error)
    })
    axios.get("/product").then((res)=>{
      setProducts(res.data.products)
      setProductsAll(res.data.products)
    }).catch((error) => {
      console.log(error.response.data)
    })
}, [])

return(
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
                    
                    <th class="h6">Remove</th>
                  </tr>
                </thead>
                <tbody>
                {cart.map((item) => (
                  <tr>
                  
                    <td class="product-thumbnail">
                      <img src={item.image_path} layout='fill' alt="Image" class="img-fluid" />
                    </td>
                    <td class="product-name">
                      <h2 class="h5 text-black">{item.name}</h2>
                    </td>
                    <td>{item.price}</td>
                    <td class="product-name">
                      { item.count ? (
                      <div class="input-group mb-2 ml-4" style={{maxWidth: "120px"}}>
                        <div class="input-group-prepend">
                          <button onClick={() => handleChange(item, -1)} class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                        </div>
                        <input type="text" class="form-control text-center" value={item.amount} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
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
                    
                    <td><button onClick={() => handleRemove(item._id)} class="btn btn-primary btn-sm">X</button></td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </div>

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
                    <h3 class="text-black h4 text-uppercase">Package Budget</h3>
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
                    <span class="text-black">Discount</span>
                  </div>
                  <div class="col-md-6 text-right">
                    <strong class="text-red">({discount})</strong>
                  </div>
                </div>
                <hr ></hr>
                <div class="row mb-5">
                  <div class="col-md-6">
                    <span class="text-black">Total</span>
                  </div>
                  <div class="col-md-6 text-right">
                    <strong class="text-black">{prices-discount}</strong>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                  <Link href={{pathname:"/checkout" ,query: data}}><button class="btn btn-primary btn-lg py-3 btn-block" >Proceed To Checkout</button></Link>
                    {/* <Link to="/checkout"><button type="button" class="btn btn-primary" data-bs-toggle="button">Checkout</button></Link> */}
                  </div>
                </div>

                
              </div>
            </div>
          </div>
            
          
        </div>
        
      </div>
      <div class="container">
                  
                  <div class="row mb-5">
                    <div class="col-md-9 order-2">
          
                      <div class="row">
                        <div class="col-md-12 mb-5">
                          <div class="float-md-left mb-4"><h2 class="text-black h5">Select {(cnt === 0)? "Services":"Shop"}</h2></div>
                          <div class="d-flex float-md-right">
                            <div class=" mr-1 ml-md-auto float-right">
                            <button onClick={() => {setCnt(1)}} type="button" class="btn btn-secondary btn-sm float-right"  aria-haspopup="true" aria-expanded="false">
                                Next
                              </button>
                              <button onClick={() => {setCnt(0)}} type="button" class="btn btn-secondary btn-sm float-right"  aria-haspopup="true" aria-expanded="false">
                                Back
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row mb-5">
                      {(cnt === 0) ?
                      ( services.map((item, i) => (
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
                              <Link href=" "><button type="button" class="w-100 btn btn-dark" onClick={() => handleClicks(item)}>Add To Cart</button></Link>
                            </div>
                          </div>
                        </div>
                      ))):
                        (products.map((item, i) => (
                          <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={i}>
                            <div class="block-4 text-center border">
                              <figure class="block-4-image">
                                <a href="shop-single.html"><img src={item.image_path} style={{objectFit: "cover",height: "200px"}} layout='fill' alt="Image placeholder" class="img-fluid" /></a>
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
                        )))
                      }
                      </div>

                      
                      <div class="row" data-aos="fade-up">
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
                      </div>
                    </div>
          
                    <div class="col-md-3 order-1 mb-5 mb-md-0">
                      <div class="border p-4 rounded mb-4">
                        <h3 class="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                        <ul class="list-unstyled mb-0">
                        <li class="mb-1"><a href="#" onClick={() => setProducts(productsAll)} class="d-flex"><span>All</span> <span class="text-black ml-auto"> &nbsp;({productsAll.length})</span></a></li>
                          <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'clothing'))} class="d-flex"><span>Clothing</span> <span class="text-black ml-auto"> &nbsp;({filterByCategory(productsAll,'clothing').length})</span></a></li>
                          <li class="mb-1"><a href="#" onClick={() => setProducts(filterByCategory(productsAll,'food'))} class="d-flex"><span>Food</span> <span class="text-black ml-auto">&nbsp;({filterByCategory(productsAll,'food').length})</span></a></li>
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
                        
          
                      </div>
                          <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white" disabled="" />
                        </div>
          
                      </div>
                    
        
      </div>
    </div>

    
    <Footer/>
    </div>

  
   
  
)


}
