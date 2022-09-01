import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Image from 'next/image'
import { BsEnvelopeFill, BsFillGeoAltFill, BsTelephone, BsTelephoneFill } from 'react-icons/bs';

export default function footer() {
  return (
    <footer class="site-footer border-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="row">
            <div class="col-md-12">
              <h3 class="footer-heading mb-4">Navigations</h3>
            </div>
            <div class="col-md-6 col-lg-4">
                <ul class="list-unstyled">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li><a href="/shop">Shop</a></li>
                  <li><a href="/service">Service</a></li>
                </ul>
            </div>
            <div class="col-md-6 col-lg-4">
              <ul class="list-unstyled">
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            {/* <div class="col-md-6 col-lg-4">
              <ul class="list-unstyled">
                <li><a href="#">Point of sale</a></li>
                <li><a href="#">Hardware</a></li>
                <li><a href="#">Software</a></li>
              </ul>
            </div> */}
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="block-5 mb-5">
            <h3 class="footer-heading mb-4">Contact Info</h3>
            <ul class="list-unstyled">
              <li > <BsFillGeoAltFill/> Reid Avenue, Colombo, 07</li>
              <li > <BsTelephoneFill/> <a href="tel://+94 77 9251771">+94 77 9251771</a></li>
              <li > <BsEnvelopeFill/> evento@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row pt-5 mt-5 text-center">
        <div class="col-md-12">
          <p>
          Copyright &copy; eveto PVT LTD.
          </p>
        </div>
        
      </div>
    </div>
  </footer>
  )
}
