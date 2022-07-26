import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";

import Link from 'next/link';
import { FaMeetup, FaUserAlt, FaTachometerAlt, FaCogs, FaCashRegister, FaDollarSign, FaCalendar, FaHatCowboy, FaBoxes, FaShopware, FaShoppingBag } from 'react-icons/fa';

export default function sidebar(props) {
    const newLocal = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion h-100";

    useEffect(()=>{
        const changeActiveLink = () => {
            document.getElementById(props.linkId).classList.add("active")
        }

        changeActiveLink();
    },[])

  return (
    <div>
       {/* Sidebar */}
       <ul className={newLocal} id="accordionSidebar">

        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/admin">
            <div className="sidebar-brand-icon" >
                {/* <FaHatCowboy fontSize="2rem" /> */}
                <br />
                <img src="/images/evento-logo.jpeg" style={{borderRadius:"50%", height:"4rem"}} />
                <br/>
            </div>
            {/* <div className="sidebar-brand-text mx-3">EVENTO</div> */}
        </a>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li className="nav-item ml-2" id='dashboard' >
            <Link href="/admin">
            <a className="nav-link">
                <FaTachometerAlt />
                <span className='m-1'> Dashboard</span>
            </a>
            </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />


        <li className="nav-item ml-2" id='account' >
            <Link href="/admin/account">
            <a className="nav-link">
                <FaUserAlt />
                <span className='m-1'> Accounts</span>
            </a>
            </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        <li className="nav-item ml-2" id='events' >
            <Link href="/admin/events">
            <a className="nav-link">
                <FaCalendar />
                <span className='m-1'> Events </span>
            </a>
            </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        <li className="nav-item ml-2" id='shoppings' >
            <Link href="/admin/shoppings">
            <a className="nav-link">
                <FaShoppingBag />
                <span className='m-1'> Shopping </span>
            </a>
            </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        <li className="nav-item ml-2" id='cashflow' >
            <Link href="/admin/cashflow">
            <a className="nav-link">
                <FaDollarSign />
                <span className='m-1'> Event Cashflow </span>
            </a>
            </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        <li className="nav-item ml-2" id='packages' >
            <Link href="/admin/packages">
            <a className="nav-link">
                <FaBoxes />
                <span className='m-1'> Packages </span>
            </a>
            </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        <li className="nav-item ml-2" id='settings' >
            <Link href="/admin/settings">
            <a className="nav-link">
                <FaCogs />
                <span className='m-1'> Settings </span>
            </a>
            </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Heading */}
        {/* <div className="sidebar-heading">
            Events
        </div> */}

        {/* Nav Item - Pages Collapse Menu */}
        {/* <li className="nav-item" id='event'>
            <Link href="/event">
            <a className="nav-link" href="#">
                <span>Events</span>
            </a>
            </Link>
        </li> */}

        </ul>
        {/* End of Sidebar */} 
            </div>
  )
}