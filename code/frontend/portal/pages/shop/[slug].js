
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"
import { useRouter } from 'next/router'

import React, {  useContext,useState,useEffect} from "react";
import axios from '../../utils/axios'
import { CartContext, CartDispatchContext } from '../../context/productContext';
import { filterByCategory } from '../../utils/product';

import StarRatings from 'react-star-ratings';

export default function Product() {
  const router = useRouter()
  const [setCart, setPrices] = useContext(CartDispatchContext);
  const [cart,prices]= useContext(CartContext);

  const [product,setProduct] = useState({})
  const [productAll,setProductAll] = useState({})
  const [category,setCategory] = useState('wash')
  const [reviews, setReviews] = useState([])
  const [reviewsAll, setReviewsAll] = useState([])
  const [treviews, setTreviews] = useState(0)
  const [users, setUsers] = useState([])


  const findElementByProductId = (arr, id) => arr.filter(element => element.productid == id);
  const findElementByUserId = (a, b) => b.filter(element => element.userid == b._id)
  const findAverageRating = (arr) => arr.reduce((total, next) => total + next.rating, 0)
  const removeElementById = (arr, id) => arr.filter(element => element._id !== id);

  useEffect(() => {
    const slug = router.query.slug
    axios.get(`/product/9832b50d-1ac1-440d-8e09-2934ad448766`).then((res)=>{
    setProduct(res.data.product)
    console.log(res.data.product)
    
  }).catch((error) => {
    console.log(error)
  })

  axios.get("/review").then((res) => {
    setReviews(findElementByProductId(res.data.reviews,product._id))
    setTreviews(findAverageRating(findElementByProductId(res.data.reviews,product._id))/2)
    setReviewsAll(res.data.reviews)
  }).catch((error) => {
      console.log(error)
  })

  axios.get("/user").then((res) => {
    setUsers(res.data.users)
  }).catch((error) => {
      console.log(error)
  })

  // reviews.forEach((x,i)={})
  
},[])

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
          <div class="col-md-12 mb-0"><a href="index.html">Product</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Shop</strong></div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src={product.image_path} style={{width:'500px'}}alt="Image" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h2 class="text-black">{product.name}</h2>
            <p>{product.description}</p>
            
            <p><strong class="text-primary h4">Rs. {product.price}</strong></p>
           
            <div class="mb-5">
              <div style={{display:'flex', justifyContent:'space-between'}}></div>
              <div class="input-group mb-3" style={{maxWidth: "300 px"}}>
              <div style={{display:'flex', justifyContent:'space-between'}}>
              <StarRatings rating={treviews} starRatedColor="#ffd700" starDimension="20px" starSpacing="1px" /> &nbsp; &nbsp;{treviews} ({reviews.length})
              </div>
            </div>

            </div>
            <p><a  class="buy-now btn btn-sm btn-primary"  onClick={() => handleClick(product)}>Add To Cart</a></p>

          </div>
          
        </div>
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
            {/* {productAll.map((item, i) => (
              <div class="item" key={i}>
                <div class="block-4 text-center">
                  <figure class="block-4-image">
                    <img src= {item.image_path}alt="Image placeholder" class="img-fluid" />
                  </figure>
                  <div class="block-4-text p-4">
                    <h3><a href="#">{item.name}</a></h3>
                    <p class="mb-0">{item.description}</p>
                    <p class="text-primary font-weight-bold">{item.price}</p>
                  </div>
                </div>
              </div>
            ))} */}

            <div class="row">
                        <div class="col-md-8">
                            {reviews.map((item, i) => (
                                <div key={i}>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <div class="float-md-left"><p class="h5" style={{ color: "#7971EA" }}><strong>{item.userid}</strong></p></div>
                                    <div class="float-md-left"><p style={{ color: "#7971EA" }}>{item.updatedAt.split('T')[0]}</p></div>
                                    </div>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <div class="float-md-left mb-4"><p class="h6" style={{ color: "#808080" }}>{item.review}</p></div>
                                    <StarRatings rating={item.rating} starRatedColor="#ffd700" starDimension="20px" starSpacing="1px"
      />                            </div>
                                </div>
                            ))}

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
