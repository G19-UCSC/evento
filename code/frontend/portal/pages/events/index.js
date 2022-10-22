
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"
import service from './service'
import shop from './shop'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../../utils/product';
import { CartContext, CartDispatchContext } from '../../context/productContext';
import axios from '../../utils/axios'
import React, { useContext, useState,useEffect } from 'react'

export default function events() {
  // const [setPackages, setCost] = useContext(CartDispatchContext);
  // const [packages,cost]= useContext(CartContext);

  const [setCart, setPrices,setTotalCount] = useContext(CartDispatchContext);
  const [cart,prices, TotalCount]= useContext(CartContext);
  
// const TotalCount = 0;

// const setTotalCount = () =>
// {
//   return TotalCount+1;
// }

  const [services, setServices] = useState([])
  // const [count, setCount] = useState(0)
  const [servicesAll, setServicesAll] = useState([])
  const [data, setData] = useState({ name: 0 });

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
  // const [cart, setCart] = useState([])
  const router = useRouter()

  const [products, setProducts] = useState([])
  const [productsAll, setProductsAll] = useState([])

  useEffect(() => {
    axios.get("/service").then((res)=>{
    setServices(res.data.service)
    console.log(res.data.service)
    setServicesAll(res.data.service)
    }).catch((error) => {
        console.log(error)
    })

if (TotalCount == 1){
  axios.get("/product").then((res)=>{
    setProducts(res.data.products)
    setProductsAll(res.data.products)
  }).catch((error) => {
    console.log(error.response.data)
  })
}
}, [])



const project = (TotalCount,router,handleClicks,services,products,productsAll,handlePrice) => {
  switch(TotalCount) {

    case 0:   return service(router,TotalCount,handleClicks,services,handlePrice);
    case 1:   return shop(router,TotalCount,handleClicks,products,productsAll,handlePrice);
    case 2: return <ComponentC />;
    case 3:  return <ComponentD />;

    default:      return <h1>No project match</h1>
  }
}


const handleClick = (item) => {
  item.amount = 1
  if (packages.indexOf(item) !== -1) return;
  setPackages([...packages, item]);
//   router.push("/package")
};
const handleClicks = (item,handlePrice) => {
    
    item.amount = 1
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    handlePrice();
    
  };
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
                    <td>
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
      

      {  
      (TotalCount == 0)?
      (project(TotalCount,router,handleClicks,services,products,productsAll,handlePrice)):(
        project(TotalCount,router,handleClicks,services,products,productsAll,handlePrice)
      )
      
      }
    </div>

    
    <Footer/>
    </div>

  
   
  
)


}
