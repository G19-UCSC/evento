import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

import Link from 'next/link';
import { FaCog } from 'react-icons/fa';

export default function sidebar() {
    const newLocal = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion";
  return (
    <div>
       {/* Sidebar */}
       <ul className={newLocal} id="accordionSidebar">

        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">YIT</div>
        </a>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
            <Link href="/">
            <a className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
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
        <li className="nav-item">
            <Link href="/event">
            <a className="nav-link" href="#">
                <span>Events</span>
            </a>
            </Link>
            {/* <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <a className="collapse-item" href="buttons.html">Buttons</a>
                    <a className="collapse-item" href="cards.html">Cards</a>
                </div>
            </div> */}
        </li>

        

        {/* Sidebar Message */}
        {/* <div className="sidebar-card d-none d-lg-flex">
            <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
            <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div> */}

        </ul>
        {/* End of Sidebar */} 
            </div>
  )
}