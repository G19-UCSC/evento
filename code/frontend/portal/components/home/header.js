import React,{ useState, useEffect, useContext } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { BsFillCartFill, BsHeart, BsPersonFill } from "react-icons/bs";
import { useRouter } from 'next/router'

import 'antd/dist/antd.css';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';

import { CartContext, CartDispatchContext } from '../../context/productContext';

export default function header() {
  const [user, setUser] = useState(null);
  const [cart,prices]= useContext(CartContext);
  const { push } = useRouter();

  useEffect(() => {
      const user_ = JSON.parse(localStorage.getItem('user'))
      if (user_) {
          setUser(user_)
      }
  }, [])

  const signout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    push('/')
  };

  const menu = (
    <Menu
      items={[
        {
          label: <a href='/signin'>Dashboard</a>,
          key: '1',
        },
        {
          label:  <a href='/' onClick={signout}>Signout</a>,
          key: '2',
        }
      ]}
    />
  );

  return (
    <header class="site-navbar" role="banner">
      <div class="site-navbar-top">
        <div class="container">
          <div class="row align-items-center">

            <div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
              {/* <form action="" class="site-block-top-search">
                <span class="icon icon-search2"></span>
                <input type="text" class="form-control border-0" placeholder="Search" />
              </form> */}
            </div>

            <div class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
              <div class="site-logo">
                <a href="index.html" class="js-logo-clone">evento</a>
              </div>
            </div>

            <div class="col-6 col-md-4 order-3 order-md-3 text-right">
              <div class="site-top-icons" style={{float: 'right'}}>
                <ul class="site-menu js-clone-nav d-none d-md-block">
                <li>
                  <Dropdown.Button style={{marginTop:'20px', marginRight:'10px'}} overlay={menu} placement="top" icon={<UserOutlined />}>
                {user?(user.username):('user')}
              </Dropdown.Button>
                  </li>
                  <li><a href="#"><span class="icon icon-heart-o"><BsHeart /></span></a></li>
                  <li>
                    <a href="cart.html" class="site-cart">
                      <span class="icon icon-shopping_cart"><BsFillCartFill /></span>
                      <span class="count">{cart.length}</span>
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
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/service">Service</a></li>
            {/* <li><a href="/event">Event</a></li> */}
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
            {user ?(<li><a href="/" onclick={signout}>Signout</a></li>):(<li><a href="/signin">Signin</a></li>)}
            
          </ul>
        </div>
      </nav>
    </header>
  )
}