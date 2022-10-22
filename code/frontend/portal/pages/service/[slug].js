
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"
import { useRouter } from 'next/router'
// import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import React, {  useContext,useState,useEffect} from "react";
import axios from '../../utils/axios'
// import DatePicker from "react-datepicker";
import { CartContext, CartDispatchContext } from '../../context/productContext';

import { useForm } from 'react-hook-form';


export default function Service() {
  const [value, setValue] = React.useState(dayjs('2022-04-07'));
    const router = useRouter()
    const [setCart, setPrices] = useContext(CartDispatchContext);
    const [cart,prices]= useContext(CartContext);
    const [service, setService] = useState([])
    // const [date, setDate] = useState('')
    // // const [time, setTime] = useState([
    //   '00:12'
    // ])

    const{
      register,
      handleSubmit,
      
      } = useForm();

    useEffect(() => {
        const slug = router.query.slug
        console.log(router.query.slug)
        axios.get(`/service/${slug}`).then((res)=>{
          setService(res.data.service)
        
      }).catch((error) => {
        console.log(error)
      })
      
    },[])
//   const router = useRouter()
//   const [setCart, setPrices] = useContext(CartDispatchContext);
//   const [cart,prices]= useContext(CartContext);

  
//   const [productAll,setProductAll] = useState({})
//   const [category,setCategory] = useState('wash')
  
  
//   useEffect(() => {
//     const slug = router.query.slug
//     axios.get(`/product/${slug}`).then((res)=>{
//     setProduct(res.data.product)
    
//   }).catch((error) => {
//     console.log(error)
//   })
  
//   // setProductAll(filterByCategory(productAll,category))
// },[])

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
          <div class="col-md-12 mb-0"><a href="index.html">Service</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Shop</strong></div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row">
          
          <div class="col-md-6">
          <img src={service.image_path} alt="Image" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h2 class="text-black">{service.name}</h2>
            <p>{service.description}</p>
            
            <p><strong class="text-primary h4">{service.price}</strong></p>
           
            <div class="mb-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  {/* <DateTimePicker
                    renderInput={(params) => <TextField {...params} />}
                    label="Ignore date and time"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    minDateTime={dayjs('2022-04-02T12:00')}
                  /> */}
                  <DateTimePicker
                    renderInput={(params) => <TextField {...params} />}
                    label="Ignore time in each day"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    minDate={dayjs('2022-02-14')}
                    minTime={dayjs('2022-02-14T08:00')}
                    maxTime={dayjs('2022-02-14T18:45')}
                  />
                </Stack>
    </LocalizationProvider>
                                  <p><a  class="buy-now btn btn-sm btn-primary"  onClick={() => handleClick(service)}>Add To Cart</a></p>

                      {/* </form> */}

                </div>
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

              

            </div>
          </div>
        </div>
      
      </div>
    </div>
    
     <Footer />
   </div>

  )
}
