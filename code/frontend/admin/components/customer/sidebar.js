import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";

import Link from 'next/link';
import { FaMeetup, FaBoxes, FaUserAlt, FaTachometerAlt, FaCogs, FaCashRegister, FaDollarSign, FaCalendar, FaHatCowboy } from 'react-icons/fa';
import { BsFillBasketFill } from 'react-icons/bs';

export default function sidebar(props) {
    const newLocal = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion h-100";

    useEffect(() => {
        const changeActiveLink = () => {
            document.getElementById(props.linkId).classList.add("active")
        }

        changeActiveLink();
    }, [])

    return (
        <div>
            {/* Sidebar */}
            <ul className={newLocal} id="accordionSidebar">

                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <FaHatCowboy fontSize="2rem" />
                    </div>
                    <div className="sidebar-brand-text mx-3">EVENTO</div>
                </a>

                {/* Divider */}
                <hr className="sidebar-divider my-0" />

                {/* Nav Item - Dashboard */}
                <li className="nav-item ml-2" id='dashboard' >
                    <Link href="/customer">
                        <a className="nav-link">
                            <FaTachometerAlt />
                            <span className='m-1'> Dashboard</span>
                        </a>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />


                <li className="nav-item ml-2" id='bookings' >
                    <Link href="/customer/bookings">
                        <a className="nav-link">
                            <FaCalendar />
                            <span className='m-1'> Bookings </span>
                        </a>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />


                <li className="nav-item ml-2" id='bookings' >
                    <Link href="/customer/purchases">
                        <a className="nav-link">
                            <BsFillBasketFill />
                            <span className='m-1'> Products and Services </span>
                        </a>
                    </Link>
                </li>
                {/* Divider */}
                {/* <hr className="sidebar-divider" />

                <li className="nav-item ml-2" id='cashflow' >
                    <Link href="/customer/transactions">
                        <a className="nav-link">
                            <FaDollarSign />
                            <span className='m-1'> Transactions</span>
                        </a>
                    </Link>
                </li> */}
                {/* Divider */}
                <hr className="sidebar-divider" />

                <li className="nav-item ml-2" id='account' >
                    <Link href="/customer/faq">
                        <a className="nav-link">
                            <FaBoxes />
                            <span className='m-1'>FAQ</span>
                        </a>
                    </Link>
                </li>

                {/* Divider */}
                {/* <hr className="sidebar-divider" />

                <li className="nav-item ml-2" id='settings' >
                    <Link href="/customer/settings">
                        <a className="nav-link">
                            <FaCogs />
                            <span className='m-1'> Settings </span>
                        </a>
                    </Link>
                </li> */}

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
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <a className="collapse-item" href="buttons.html">Buttons</a>
                    <a className="collapse-item" href="cards.html">Cards</a>
                </div>
            </div>
                </li> */}

            </ul>
            {/* End of Sidebar */}
        </div>
    )
}