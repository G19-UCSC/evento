import React from 'react'
import VisitorH from '../../../components/header/visitor'
import VisitorF from '../../../components/footer/visitor'
import { getServiceBySlug } from '../../../libs/serviceStore'
import Head from 'next/head'
const ServiceDetails = ({ details }) => {

    return (
        <><Head>

            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Mukta:300,400,700"
            />
            <link rel="stylesheet" href="../../fonts/icomoon/style.css" />
            <link rel="stylesheet" href="../../css/bootstrap.min.css" />
            <link rel="stylesheet" href="../../css/magnific-popup.css" />
            <link rel="stylesheet" href="../../css/jquery-ui.css" />
            <link rel="stylesheet" href="../../css/owl.carousel.min.css" />
            <link rel="stylesheet" href="../../css/owl.theme.default.min.css" />
            <link rel="stylesheet" href="../../css/aos.css" />
            <link rel="stylesheet" href="../../css/style.css" />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        </Head>
            <div className="site-wrap">
                <VisitorH />
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={details.image} alt={details.slug} className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-black">{details.name}</h2>
                            <p className="mb-4">
                                {details.description}
                            </p>
                            <p>
                                <strong className="text-primary h4">Rs{' '}{details.price}{' '}</strong>
                            </p>
                            <div className="mb-1 d-flex">
                                <label htmlFor="option-md" className="d-flex mr-3 mb-3">

                                    <span className="d-inline-block text-black">Status: {' '}{details.quantity > 0 ? <span class="badge badge-pill badge-success">Available</span> : < span className="badge badge-pill badge-danger">Unavailable</span>}</span>
                                </label>

                            </div>

                            <p>
                                <a href="../cart" className="buy-now btn btn-sm btn-primary">
                                    Add To Cart
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <VisitorF />

            </div >
        </>
    )
}


export default ServiceDetails
export const getServerSideProps = async (context) => {
    const serviceSlug = context.params.singleservice
    const details = await getServiceBySlug(serviceSlug);
    return {
        props: {
            details,
        }
    }
}