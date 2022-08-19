import React, { useState } from 'react'
import { useRouter } from 'next/router'
import "bootstrap/dist/css/bootstrap.css";
import Header from  "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";
import Footer from "../components/dashboard/footer";
import { FaCalendar, FaDownload, FaEllipsisH } from 'react-icons/fa';

import Cards from '../components/dashboard/cards';
import Linechart from '../components/dashboard/linechart';
import Piechart from '../components/dashboard/piechart';
import Dropdown from '../components/dropdown';

const dashboard = () => {

    const options = [
        { label: 'Event', value: '<a href="/event"></a>'},
        { label: 'Option2', value: 'option2'},
        { label: 'Option3', value: 'option3'}
    ]

    const[drop, setDrop] = useState('option1');

    const handleDrop = (e) => {
        setDrop(e.target.value);
    }

   return(
   <>
    <div id="wrapper">

        {/* Sidebar */}
        
        <Sidebar linkId="dashboard" />
        {/* End of Sidebar */}

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* Main Content */}
            <div id="content">

                {/* Topbar */}
                <Header/>
                {/* End of Topbar */}

                {/* Begin Page Content */}
                <div className="container-fluid">

                    {/* Page Heading */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                            <FaDownload/> Generate Report</a> */}
                    </div>

                    {/* Content Row */}
                    <div className="row">

                        {/* Earnings (Monthly) Card Example */}
                        <Cards card_title="Earnings (Annual)" card_icon="FaCalendar" />

                        {/* Earnings (Monthly) Card Example */}
                        

                        {/* Earnings (Monthly) Card Example */}
                        
                        {/* Pending Requests Card Example */}
                        
                    </div>

                    {/* Content Row */}

                    <div className="row">

                        {/* Area Chart */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                                {/* Card Header - Dropdown */}
                                <Dropdown label="Dropdown Button" options={options} value={'option1'} />
                                {/* Card Body */}
                                <div className="card-body">
                                    <div className="chart-area">
                                        <Linechart />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pie Chart */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                {/* Card Header - Dropdown */}
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <FaEllipsisH />
                                        </a>
                                        
                                    </div>
                                </div>
                                {/* Card Body */}
                                <div className="card-body">
                                    <div className="chart-pie pt-4 pb-2">
                                        <Piechart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Row */}
                    <div className="row">

                        {/* Content Column */}
                        <div className="col-lg-6 mb-4">

                            {/* Project Card Example */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                                </div>
                                <div className="card-body">
                                    <h4 className="small font-weight-bold">Server Migration <span
                                            className="float-right">20%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}}
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Sales Tracking <span
                                            className="float-right">40%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}}
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Customer Database <span
                                            className="float-right">60%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Payout Details <span
                                            className="float-right">80%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}}
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Account Setup <span
                                            className="float-right">Complete!</span></h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}}
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* /.container-fluid */}

            </div>
            {/* End of Main Content */}

            {/* Footer */}
            <Footer/>
            {/* End of Footer */}

        </div>
        {/* End of Content Wrapper */}

    </div>
    {/* End of Page Wrapper */}

    {/* Scroll to Top Button*/}
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    {/* Logout Modal*/}
    <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
    </>)
    }

    export default dashboard;
