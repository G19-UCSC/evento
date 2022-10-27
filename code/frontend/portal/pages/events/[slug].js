
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"
import { useRouter } from 'next/router'


import React, {  useContext,useState,useEffect} from "react";
import axios from '../../utils/axios'
import { CartContext, CartDispatchContext } from '../../context/productContext';
import { filterByCategory } from '../../utils/product';
import Link from "next/link";
export default function Product() {
  const router = useRouter()
  const slug = router.query.slug
  const [setCart, setPrices] = useContext(CartDispatchContext);
  const [cart,prices]= useContext(CartContext);
  const [data, setData] = useState({ name: 0 });

  const [products,setProducts] = useState([])
  const [services,setServices] = useState([])
  const [pack,setPack] = useState({})

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
    cart.map((item) => (ans += item.amount * (item.price  * (100-item.discount)/100)));
    setPrices(ans);
  };
  
  
  useEffect(() => {
    
    const getEventProviders = ()=>{
        return(axios.get(`/packageproduct`))
      }
    
      const getProducts = ()=>{
        return(axios.get(`/product`))
      }
    
      const getServices = ()=>{
        return(axios.get(`/service`))
      }

      const getPackage = (slug)=>{
        return(axios.get(`/package/${slug}`))
      }
    
      Promise.all([getEventProviders(),getProducts(),getServices(),getPackage(slug)]).then((res)=>{
        let eventProvider = res[0].data.packageproducts;
        let products = res[1].data.products;
        let services = res[2].data.service;
        eventProvider = eventProvider.filter(element=>element.packageid == slug);
        setPack(res[3].data.package)
        eventProvider.forEach(e=>{
          products.forEach(p=>{
            if(e.productid == p._id){
              e.name = p.name;
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
                e.name = p.name;
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
},[slug])


  return (

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
                
              </tr>
            </thead>
            <tbody>
            {products.map((item) => (
              <tr>
              
                <td class="product-thumbnail">
                  <img src={item.image_path} layout='fill' alt="Image" class="img-fluid" />
                </td>
                <td class="product-name">
                  <h2 class="h5 text-black">{item.name}</h2>
                </td>
                <td>{item.price}</td>
                <td class="product-name">
                  <div class="input-group mb-2 ml-4" style={{maxWidth: "120px"}}>
                    <div class="input-group-prepend">
                      <button onClick={() => handleChange(item, -1)} class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                    </div>
                    <input type="text" class="form-control text-center" value={1} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <div class="input-group-append">
                      <button onClick={() => handleChange(item, 1)} class="btn btn-outline-primary " type="button">+</button>
                    </div>
                  </div>
                  

                </td>
                
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
        <div class="col-md-6 mb-3 mb-md-0">
                <Link href='/events/create' ><button class="btn btn-primary btn-sm btn-block">Create Your Own Package</button></Link>
              </div>
        </div>
      </div>
      <div class="col-md-6 pl-5">
        
        <div class="row justify-content-end">
          <div class="col-md-7">
            <br />
            <div class="row">
              <div class="col-md-12 text-right mb-5">
              <h3 class="text-black h5 text-uppercase">Name: {pack.name}</h3>
                <h3 class="text-black h5 text-uppercase">Price: {pack.price}</h3>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
              <Link href={{pathname:"/checkout"}}><button class="btn btn-primary btn-lg py-3 btn-block" >Proceed To Checkout</button></Link>
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
                          <Link href=" "><button type="button" class="w-100 btn btn-dark" onClick={() => handleClicks(item)}>Add To Cart</button></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                    {products.map((item, i) => (
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
                  }
                  </div>
                </div>
    
                  </div>
                
    
  </div>
</div>


<Footer/>
</div>

  )
}
