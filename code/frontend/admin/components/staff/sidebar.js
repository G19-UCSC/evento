import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";

import Link from 'next/link';
import { FaUserAlt, FaCalendar, FaHatCowboy } from 'react-icons/fa';

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
                    <Link href="/staff">
                        <a className="nav-link">
                            <FaCalendar />
                            <span className='m-1'> Dashboard</span>
                        </a>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />


                <li className="nav-item ml-2" id='bookings' >
                    <Link href="/staff/bookings">
                        <a className="nav-link">
                            <FaUserAlt />
                            <span className='m-1'> Bookings</span>
                        </a>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />


            </ul>
            {/* End of Sidebar */}
        </div>
    )
}