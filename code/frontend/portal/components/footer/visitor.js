import React from 'react'
import Script from 'next/script'
function VisitorF() {
    return (
        <div><footer className="site-footer border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="block-5 mb-5">
                            <h3 className="footer-heading mb-4">Contact Info</h3>
                            <ul className="list-unstyled">
                                <li className="address">
                                    203 Fake St. Mountain View, San Francisco, California, USA
                                </li>
                                <li className="phone">
                                    <a href="tel://23923929210">+2 392 3929 210</a>
                                </li>
                                <li className="email">emailaddress@domain.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0 justify-content-center">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="footer-heading mb-4">Navigations</h3>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Packages</a>
                                    </li>
                                    <li>
                                        <a href="#">Products</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">Our Providers</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <label className="footer-heading">Contact Us</label>
                        <div className="block-7">
                            <form action="#" method="post">
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label htmlFor="c_fname" className="text-black">
                                            First Name <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="c_fname"
                                            name="c_fname"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="c_lname" className="text-black">
                                            Last Name <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="c_lname"
                                            name="c_lname"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <label htmlFor="c_email" className="text-black">
                                            Email <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="c_email"
                                            name="c_email"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <label htmlFor="c_message" className="text-black">
                                            Message{" "}
                                        </label>
                                        <textarea
                                            name="c_message"
                                            id="c_message"
                                            cols={10}
                                            rows={3}
                                            className="form-control"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row justify-content-end">
                                    <div className="col-sm-6">
                                        <input
                                            type="submit"
                                            className="btn btn-sm btn-block btn-primary"
                                            defaultValue="Send"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <p>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | This template is made with
                            <i className="icon-heart" aria-hidden="true" /> by
                            <a
                                href="https://colorlib.com"
                                target="_blank"
                                className="text-primary"
                            >
                                Colorlib
                            </a>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                    </div>
                </div>
            </div>
        </footer>

            <Script src="../js/jquery-3.3.1.min.js"></Script>
            <Script src="../js/jquery-ui.js"></Script>
            <Script src="../js/popper.min.js"></Script>
            <Script src="../js/bootstrap.min.js"></Script>
            <Script src="../js/owl.carousel.min.js"></Script>
            <Script src="../js/jquery.magnific-popup.min.js"></Script>
            <Script src="../js/aos.js"></Script>
            <Script src="../js/main.js"></Script>
        </div>
    )
}

export default VisitorF