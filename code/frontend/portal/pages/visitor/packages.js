import React from 'react'
import VisitorH from '../../components/header/visitor'
import VisitorF from '../../components/footer/visitor'
function packages() {
    return (
        <>

            <div className="site-wrap">
                <VisitorH />
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12 mb-5">
                                        <div className="float-md-left mb-6">
                                            <div className="col-md-7">
                                                <h2>Our Packages</h2>
                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <div className="dropdown mr-1 ml-md-auto">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm dropdown-toggle"
                                                    id="dropdownMenuOffset"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Packages
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                                    <a className="dropdown-item" href="#general_packages">
                                                        General
                                                    </a>
                                                    <a className="dropdown-item" href="#coperate_packages">
                                                        Corporate
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm dropdown-toggle"
                                                    id="dropdownMenuReference"
                                                    data-toggle="dropdown"
                                                >
                                                    Events
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                                    <a className="dropdown-item" href="#">
                                                        Relevance
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Name, A to Z
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Name, Z to A
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="#">
                                                        Price, low to high
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Price, high to low
                                                    </a>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row" id='general_packages'>
                                    <div className="col-md-12">
                                        <div className="row mb-5">
                                            <h2 className="text-black h5">Generel Packages</h2>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div
                                                className="col-sm-6 col-lg-3 mb-3"
                                                data-aos="fade"
                                                data-aos-delay=""
                                            >
                                                <a className="block-2-item text-decoration-none" href="#">
                                                    <figure className="image">
                                                        <img src="../images/general_anivesary.jpg" alt="" className="img-fluid" />
                                                    </figure>
                                                    <div className="text text-dark">
                                                        <span className="text-uppercase">Anivesary</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div
                                                className="col-sm-6 col-lg-3 mb-3"
                                                data-aos="fade"
                                                data-aos-delay=""
                                            >
                                                <a className="block-2-item text-decoration-none" href="#">
                                                    <figure className="image">
                                                        <img src="../images/birthday.jpg" alt="" className="img-fluid" />
                                                    </figure>
                                                    <div className="text text-dark">
                                                        <span className="text-uppercase">Birthday</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div
                                                className="col-sm-6 col-lg-3 mb-3"
                                                data-aos="fade"
                                                data-aos-delay=""
                                            >
                                                <a className="block-2-item text-decoration-none" href="#">
                                                    <figure className="image">
                                                        <img src="../images/bridal_shower.jpg" alt="" className="img-fluid" />
                                                    </figure>
                                                    <div className="text text-dark">
                                                        <span className="text-uppercase">Bridal Shower</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div
                                                className="col-sm-6 col-lg-3 mb-3"
                                                data-aos="fade"
                                                data-aos-delay=""
                                            >
                                                <a className="block-2-item text-decoration-none" href="#">
                                                    <figure className="image">
                                                        <img src="../images/family_events.jpg" alt="" className="img-fluid" />
                                                    </figure>
                                                    <div className="text text-dark">
                                                        <span className="text-uppercase">Family Events</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div
                                                className="col-sm-6 col-lg-3 mb-3"
                                                data-aos="fade"
                                                data-aos-delay=""
                                            >
                                                <a className="block-2-item text-decoration-none" href="#">
                                                    <figure className="image">
                                                        <img src="../images/social_gatherings.jpg" alt="" className="img-fluid" />
                                                    </figure>
                                                    <div className="text text-dark">
                                                        <span className="text-uppercase">Social Gathering</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div
                                                className="col-sm-6 col-lg-3 mb-3"
                                                data-aos="fade"
                                                data-aos-delay=""
                                            >
                                                <a className="block-2-item text-decoration-none" href="#">
                                                    <figure className="image">
                                                        <img src="../images/weddings.jpg" alt="" className="img-fluid" />
                                                    </figure>
                                                    <div className="text text-dark">
                                                        <span className="text-uppercase">Weddings</span>
                                                    </div>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row" id='coperate_packages'>
                                    <div className="col-md-12">
                                        <div className="row mb-5">
                                            <h2 className="text-black h5">Coperate Packages</h2>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-sm-6 col-lg-3 mb-3" data-aos="fade"
                                                data-aos-delay=""
                                            >
                                                <a className="block-2-item text-decoration-none" href="#">
                                                    <figure className="image">
                                                        <img src="../images/celebrations.jpg" alt="" className="img-fluid" />
                                                    </figure>
                                                    <div className="text text-dark">
                                                        <span className="text-uppercase">Celebrations</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-sm-6 col-lg-3 mb-3" data-aos="fade"
                                                data-aos-delay=""
                                            >
                                                <a className="block-2-item text-decoration-none" href="#">
                                                    <figure className="image">
                                                        <img src="../images/conference.jpg" alt="" className="img-fluid" />
                                                    </figure>
                                                    <div className="text text-dark">
                                                        <span className="text-uppercase">Conferences</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-sm-6 col-lg-3 mb-3" data-aos="fade"
                                                data-aos-delay=""
                                            >
                                                <a className="block-2-item text-decoration-none" href="#">
                                                    <figure className="image">
                                                        <img src="../images/product_launch.jpg" alt="" className="img-fluid" />
                                                    </figure>
                                                    <div className="text text-dark">
                                                        <span className="text-uppercase">Product Launch</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <VisitorF />

            </div>
        </>
    )
}

export default packages