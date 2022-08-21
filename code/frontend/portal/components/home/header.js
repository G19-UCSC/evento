import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { BsFillCartFill, BsHeart, BsPersonFill } from "react-icons/bs";
import { useRouter } from 'next/router'
import { useSession, signIn,signOut } from 'next-auth/react'

export default function header() {
  const { push} = useRouter()
  const { data: session, status } = useSession()

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callback: '/' })
      push(data.url)
  }
  return (
    <header class="site-navbar" role="banner">
      <div class="site-navbar-top">
        <div class="container">
          <div class="row align-items-center">

            <div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
              <form action="" class="site-block-top-search">
                <span class="icon icon-search2"></span>
                <input type="text" class="form-control border-0" placeholder="Search" />
              </form>
            </div>

            <div class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
              <div class="site-logo">
                <a href="index.html" class="js-logo-clone">evento</a>
              </div>
            </div>

            <div class="col-6 col-md-4 order-3 order-md-3 text-right">
              <div class="site-top-icons" style={{float: 'right'}}>
                <ul class="site-menu js-clone-nav d-none d-md-block">
                  <li class="has-children"><span class="icon icon-person"><BsPersonFill /></span>
                    <ul class="dropdown">
                    {session ? ( <li><a href="/signin" onClick={handleSignOut}>Sign Out</a></li> ):(
                    <>
                      <li><a href="/signin">Sign In</a></li>
                      <li><a href="/api/verify/signin">Sign Up</a></li>
                    </>
                    )}
                    </ul>
              

                  
                  </li>
                  <li><a href="#"><span class="icon icon-heart-o"><BsHeart /></span></a></li>
                  <li>
                    <a href="cart.html" class="site-cart">
                      <span class="icon icon-shopping_cart"><BsFillCartFill /></span>
                      <span class="count">2</span>
                    </a>
                  </li> 
                  <li class="d-inline-block d-md-none ml-md-0"><a href="#" class="site-menu-toggle js-menu-toggle"><span class="icon-menu"></span></a></li>
                </ul>
              </div> 
            </div>

          </div>
        </div>
      </div> 
      <nav class="site-navigation text-right text-md-center" role="navigation">
        <div class="container">
          <ul class="site-menu js-clone-nav d-none d-md-block">
            <li>
              <a href="/">Home</a>
              {/* <ul class="dropdown">
                <li><a href="#">Menu One</a></li>
                <li><a href="#">Menu Two</a></li>
                <li><a href="#">Menu Three</a></li>
                <li class="has-children">
                  <a href="#">Sub Menu</a>
                  <ul class="dropdown">
                    <li><a href="#">Menu One</a></li>
                    <li><a href="#">Menu Two</a></li>
                    <li><a href="#">Menu Three</a></li>
                  </ul>
                </li>
              </ul> */}
            </li>
            <li>
              <a href="/about">About</a>
              {/* <ul class="dropdown">
                <li><a href="#">Menu One</a></li>
                <li><a href="#">Menu Two</a></li>
                <li><a href="#">Menu Three</a></li>
              </ul> */}
            </li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/event">Event</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
