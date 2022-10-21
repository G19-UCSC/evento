import React from 'react'
import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { FaBars, FaBell, FaCogs, FaEnvelope, FaFileAlt, FaListAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

import 'antd/dist/antd.css';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';

import { useRouter } from 'next/router'

export default function sidebar() {

    const [user, setUser] = useState(null);
    const { push } = useRouter();

    useEffect(() => {
        const user_ = JSON.parse(localStorage.getItem('user'))
        if (user_) {
            setUser(user_)
        } else{
            push('/')
        }
    }, [])
    

    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
      };
      
      const signout = (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        push('/')
      };

      const menu = (
        <Menu
          items={[
            {
              label: <a href='/profile'>Profile</a>,
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
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    {/* Sidebar Toggle (Topbar) */}
    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <FaBars />
    </button>

    {/* Topbar Navbar */}
    <ul className="navbar-nav ml-auto">

        {/* Nav Item - Alerts */}
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FaBell />
                {/* Counter - Alerts */}
                {/* <span className="badge badge-danger badge-counter">3+</span> */}
            </a>
            {/* Dropdown - Alerts */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">
                    Alerts Center
                </h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                        <div className="icon-circle bg-primary">
                            <FaFileAlt />
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">December 12, 2019</div>
                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                        <div className="icon-circle bg-success">
                            <i className="fas fa-donate text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">December 7, 2019</div>
                        $290.29 has been deposited into your account!
                    </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                        <div className="icon-circle bg-warning">
                            <i className="fas fa-exclamation-triangle text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">December 2, 2019</div>
                        Spending Alert: We've noticed unusually high spending for your account.
                    </div>
                </a>
                <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
            </div>
        </li>

        {/* Nav Item - Messages */}
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FaEnvelope />
                {/* Counter - Messages */}
                {/* <span className="badge badge-danger badge-counter">7</span> */}
            </a>
            {/* Dropdown - Messages */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown">
                <h6 className="dropdown-header">
                    Message Center
                </h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src=""
                            alt="..." />
                        <div className="status-indicator bg-success"></div>
                    </div>
                    <div className="font-weight-bold">
                        <div className="text-truncate">Hi there! I am wondering if you can help me with a
                            problem I've been having.</div>
                        <div className="small text-gray-500">Emily Fowler · 58m</div>
                    </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src=""
                            alt="..." />
                        <div className="status-indicator"></div>
                    </div>
                    <div>
                        <div className="text-truncate">I have the photos that you ordered last month, how
                            would you like them sent to you?</div>
                        <div className="small text-gray-500">Jae Chun · 1d</div>
                    </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src=""
                            alt="..." />
                        <div className="status-indicator bg-warning"></div>
                    </div>
                    <div>
                        <div className="text-truncate">Last month's report looks great, I am very happy with
                            the progress so far, keep up the good work!</div>
                        <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                    </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src=""
                            alt="..." />
                        <div className="status-indicator bg-success"></div>
                    </div>
                    <div>
                        <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                            told me that people say this to all dogs, even if they aren't good...</div>
                        <div className="small text-gray-500">Chicken the Dog · 2w</div>
                    </div>
                </a>
                <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
            </div>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        <li>
        <Dropdown.Button style={{marginTop:'20px', marginRight:'50px'}} overlay={menu} placement="bottomLeft" icon={<UserOutlined />}>
       {user?(user.username):('user')}
    </Dropdown.Button>
        </li>

    </ul>

</nav>
  )
}