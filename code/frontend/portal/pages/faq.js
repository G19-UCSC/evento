
import Footer from "../components/home/footer"
import Header from "../components/home/header"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../utils/product';
import { CartContext, CartDispatchContext } from '../context/productContext';
import axios from '../utils/axios'
import React, { useContext, useState, useEffect } from 'react'

export default function Shop() {
    const [setCart, setPrices] = useContext(CartDispatchContext);
    const [cart, prices] = useContext(CartContext);


    const [faqs, setProducts] = useState([])
    const [faqsAll, setProductsAll] = useState([])
    // const [cart, setCart] = useState([])
    const router = useRouter()



    useEffect(() => {
        axios.get("/faq").then((res) => {
            setProducts(res.data.faqs)
            setProductsAll(res.data.faqs)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }, [])

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
                        <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">FAQ</strong></div>
                    </div>
                </div>
            </div>

            <div class="site-section">
                <div class="container">
                    <div class="row">
                        <div class="float-md-left mb-4"><h2 class="text-black h5">FAQ</h2></div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            {faqs.map((item, i) => (
                                <div key={i}>
                                    <div class="float-md-left"><p class="h5 w-75" style={{ color: "#7971EA" }}><strong>Q.{' '}{item.question}</strong></p></div>
                                    <div class="float-md-left mb-4"><p class="h5 w-75" style={{ color: "#808080" }}>A.{' '}{item.answer == null ? 'We will get to you soon...' : item.answer}</p></div>
                                </div>
                            ))}
                            {/* <div class="float-md-left"><p class="h5 w-75" style={{ color: "#7971EA" }}><strong>Q. Who handles my event?</strong></p></div>
                            <div class="float-md-left mb-4"><p class="h5 w-75" style={{ color: "#808080" }}>A. We have our staff and providers to meet your every need. They handle all the planning and arrangements. On the day of your event, they will be on hand to make sure everything runs smoothly so that you can focus on having a good time with your guests.</p></div>

                            <div class="float-md-left"><p class="h5 w-75" style={{ color: "#7971EA" }}><strong>Q. Do you charge separately for your various event services?</strong></p></div>
                            <div class="float-md-left mb-4"><p class="h5 w-75" style={{ color: "#808080" }}>A. Services included in packagers come standard, in customized packagers it may vary. You can click on services to view more deatails about this each services or contact our staff</p></div>

                            <div class="float-md-left"><p class="h5 w-75" style={{ color: "#7971EA" }}><strong>Q.Is is necessary to have an account to books an event?</strong></p></div>
                            <div class="float-md-left mb-4"><p class="h5 w-75" style={{ color: "#808080" }}>A. Yes to need to have an account in order to book an event. The account will help you to keep track of you events.</p></div> */}

                        </div>
                        <div class="col-md-4">
                            <img src="./images/faq.jpg" />
                        </div>

                    </div>

                </div>

            </div>



            <Footer />
        </div>


    )
}
