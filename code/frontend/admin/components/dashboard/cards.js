import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { FaCalendar, FaClipboard, FaDollarSign, FaDownload } from 'react-icons/fa';

export default function Cards (props) {

    return(
        <>
        <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Earnings (Annual)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                    </div>
                    <div className="col-auto mr-4">
                        <FaCalendar color='grey' fontSize="48px" />
                    </div>
                </div>
            </div>
        </div>
        </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Earnings (Annual)</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                            </div>
                            <div className="col-auto mr-4">
                                <FaDollarSign color='grey' fontSize="48px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col ml-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                </div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">50%</div>
                                    </div>
                                    <div className="col">
                                        <div className="progress progress-sm mr-2">
                                            <div className="progress-bar bg-info w-50" role="progressbar"
                                                style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0}
                                                aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto mr-4">
                                <FaClipboard color='grey' fontSize="48px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Pending Requests</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}