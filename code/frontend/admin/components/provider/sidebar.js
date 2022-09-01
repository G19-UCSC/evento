import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";

import Link from 'next/link';
import { FaMeetup, FaUserAlt, FaTachometerAlt, FaCogs, FaCashRegister, FaDollarSign, FaCalendar, FaHatCowboy, FaSquareFull } from 'react-icons/fa';
import { BsFillCheckCircleFill, BsFillBagFill, BsSquare } from 'react-icons/bs';
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
                    <Link href="/provider">
                        <a className="nav-link">
                            <FaTachometerAlt />
                            <span className='m-1'> Dashboard</span>
                        </a>
                    </Link>
                </li>


                {/* Divider */}
                <hr className="sidebar-divider" />


                <li className="nav-item ml-2" id='product' >
                    <Link href="/provider/product">
                        <a className="nav-link">
                            <FaSquareFull />
                            <span className='m-1'> Products/Services</span>
                        </a>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                <li className="nav-item ml-2" id='bookings' >
                    <Link href="/provider/events">
                        <a className="nav-link">
                            <BsFillCheckCircleFill />
                            <span className='m-1'> Events </span>
                        </a>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                <li className="nav-item ml-2" id='bookings' >
                    <Link href="/provider/bookings">
                        <a className="nav-link">
                            <BsFillBagFill />
                            <span className='m-1'> Purchases/Bookings </span>
                        </a>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                <li className="nav-item ml-2" id='settings' >
                    <Link href="/provider/settings">
                        <a className="nav-link">
                            <FaCogs />
                            <span className='m-1'> Settings </span>
                        </a>
                    </Link>
                </li>

                {/* Divider */}

                {/* <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <a className="collapse-item" href="buttons.html">Buttons</a>
                    <a className="collapse-item" href="cards.html">Cards</a>
                </div>
            </div> */}


            </ul>
            {/* End of Sidebar */}
        </div>
    )
}