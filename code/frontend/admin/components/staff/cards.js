import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { FaCalendar, FaCalendarDay, FaClock, FaClipboardList, FaComments, FaDollarSign, FaDownload, FaRegCalendar, FaRegCalendarAlt } from 'react-icons/fa';

export default function Cards(props) {

    return (
        <>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    {props.cardTitles[0].one}</div>
                                <div className="h5 mb-0 ml-4 font-weight-bold text-gray-800">
                                    {props.cardData[0]}
                                </div>
                            </div>
                            <div className="col-auto mr-4">
                                <FaCalendar color='#024fde' fontSize="30px" />
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
                                    {props.cardTitles[1].two}</div>
                                <div className="h5 mb-0 ml-4 font-weight-bold text-gray-800">
                                    {props.cardData[1]}
                                </div>
                            </div>
                            <div className="col-auto mr-4">
                                <FaClock color='#198754' fontSize="30px" />
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
                                    {props.cardTitles[2].three}
                                </div>
                                <div className="h5 mb-0 ml-4 font-weight-bold text-gray-800">3</div>
                            </div>
                            <div className="col-auto mr-4">
                                <FaClipboardList color='#ffcd03' fontSize="30px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}