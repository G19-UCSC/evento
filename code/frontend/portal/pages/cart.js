
import Footer from "../components/home/footer"
import Header from "../components/home/header"


import { CartContext, CartDispatchContext } from '../context/productContext';
import React, { useContext, useState, useEffect } from "react";
import Link from 'next/link'
export default function Cart() {
  const [cart,prices]= useContext(CartContext);
  const [setCart, setPrices] = useContext(CartDispatchContext);
  // const router = useRouter()
  const [data, setData] = useState({ name: 0 });
  // const data = 0
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  // cart.map((item) => (
  //   item.count ? setData({name : 1 }) : setData({name : 0})
  // ))
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    item.count ? setData({name : 0 }) : setData({name : 1})
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item._id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrices(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
     <div class="site-wrap">
     <Header />
    
     <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="index.html">Cart</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Shop</strong></div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row mb-5">
          <form class="col-md-12" method="post">
            <div class="site-blocks-table">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="product-thumbnail">Image</th>
                    <th class="product-name">Product</th>
                    <th class="product-price">Unit Price</th>
                    <th class="product-quantity">Quantity</th>
                    
                    <th class="product-remove">Remove</th>
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
                    <td>
                      { item.count ? (
                      <div class="input-group mb-3 ml-6" style={{maxWidth: "120px"}}>
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
                  {/* <tr>
                    <td class="product-thumbnail">
                      <img src="images/cloth_2.jpg" layout='fill' alt="Image" class="img-fluid" />
                    </td>
                    <td class="product-name">
                      <h2 class="h5 text-black">Polo Shirt</h2>
                    </td>
                    <td>$49.00</td>
                    <td>
                      <div class="input-group mb-3" style={{maxWidth: "120px"}}>
                        <div class="input-group-prepend">
                          <button class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                        </div>
                        <input type="text" class="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        <div class="input-group-append">
                          <button class="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
                        </div>
                      </div>

                    </td>
                    <td>$49.00</td>
                    <td><a href="#" class="btn btn-primary btn-sm">X</a></td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </form>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="row mb-5">
              <div class="col-md-6 mb-3 mb-md-0">
                <button class="btn btn-primary btn-sm btn-block">Continue Shopping</button>
              </div>
              {/* <div class="col-md-6">
                <button class="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button>
              </div> */}
            </div>
            <div class="row">
              {/* <div class="col-md-12">
                <label class="text-black h4" for="coupon">Coupon</label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div class="col-md-8 mb-3 mb-md-0">
                <input type="text" class="form-control py-3" id="coupon" placeholder="Coupon Code" />
              </div>
              <div class="col-md-4">
                <button class="btn btn-primary btn-sm">Apply Coupon</button>
              </div> */}
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
                  <Link href={{pathname:"/checkout" ,query: data}}><button class="btn btn-primary btn-lg py-3 btn-block" >Proceed To Checkout</button></Link>
                    {/* <Link to="/checkout"><button type="button" class="btn btn-primary" data-bs-toggle="button">Checkout</button></Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
     <Footer />
   </div>

  )
}
