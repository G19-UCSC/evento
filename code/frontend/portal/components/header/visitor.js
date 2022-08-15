import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
function VisitorH() {
    return (
        <div><Head><>
            <title>Evento — Make it memoriable</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Mukta:300,400,700"
            />
            <link rel="stylesheet" href="../fonts/icomoon/style.css" />
            <link rel="stylesheet" href="../css/bootstrap.min.css" />
            <link rel="stylesheet" href="../css/magnific-popup.css" />
            <link rel="stylesheet" href="../css/jquery-ui.css" />
            <link rel="stylesheet" href="../css/owl.carousel.min.css" />
            <link rel="stylesheet" href="../css/owl.theme.default.min.css" />
            <link rel="stylesheet" href="../css/aos.css" />
            <link rel="stylesheet" href="../css/style.css" />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        </>
        </Head>
            <header className="site-navbar" role="banner">
                <div className="site-navbar-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                                <form action="" className="site-block-top-search">
                                    <span className="icon icon-search2" />
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        placeholder="Search"
                                    />
                                </form>
                            </div>
                            <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                                <div className="site-logo">
                                    <Link href="/" className="js-logo-clone">
                                        Evento
                                    </Link>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                                <div className="site-top-icons">
                                    <ul>
                                        <li>
                                            <a href="/visitor/cart" className="site-cart">
                                                <span className="icon icon-shopping_cart" />
                                                <span className="count">2</span></a>
                                        </li>
                                        <li>
                                            <Link href="#login">Login</Link>
                                        </li>
                                        <li>
                                            <Link href="/visitor/signup">Signup</Link>
                                        </li>
                                        <li className="d-inline-block d-md-none ml-md-0">
                                            <Link href="#" className="site-menu-toggle js-menu-toggle">
                                                <span className="icon-menu" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="site-navigation text-right text-md-center" role="navigation">
                    <div className="container">
                        <ul className="site-menu js-clone-nav d-none d-md-block">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li className="has-children">
                                <a>We Offer</a>
                                <ul className="dropdown">
                                    <li>
                                        <Link href="/visitor/packages">Packages</Link>
                                    </li>
                                    <li>
                                        <Link href="/vistor/products">Products</Link>
                                    </li>
                                    <li>
                                        <Link href="/visitor/services">Services</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/visitor/packages">Our Providers</Link>
                            </li>
                            <li>
                                <Link href="/visitor/packages">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/visitor/packages">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default VisitorH