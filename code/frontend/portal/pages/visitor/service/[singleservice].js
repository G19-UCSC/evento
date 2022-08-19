import React from 'react'
import VisitorH from '../../../components/header/visitor'
import VisitorF from '../../../components/footer/visitor'
import { getServiceBySlug } from '../../../libs/serviceStore'

const ProductDetails = ({ details }) => {
    return (
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
                            <strong className="text-primary h4">Rs{' '}{details.price}</strong>
                        </p>
                        {/* <div className="mb-1 d-flex">
                            <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                                <span
                                    className="d-inline-block mr-2"
                                    style={{ top: "-2px", position: "relative" }}
                                >
                                    <input type="radio" id="option-sm" name="shop-sizes" />
                                </span>{" "}
                                <span className="d-inline-block text-black">Small</span>
                            </label>
                            <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                                <span
                                    className="d-inline-block mr-2"
                                    style={{ top: "-2px", position: "relative" }}
                                >
                                    <input type="radio" id="option-md" name="shop-sizes" />
                                </span>{" "}
                                <span className="d-inline-block text-black">Medium</span>
                            </label>
                            <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                                <span
                                    className="d-inline-block mr-2"
                                    style={{ top: "-2px", position: "relative" }}
                                >
                                    <input type="radio" id="option-lg" name="shop-sizes" />
                                </span>{" "}
                                <span className="d-inline-block text-black">Large</span>
                            </label>
                            <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                                <span
                                    className="d-inline-block mr-2"
                                    style={{ top: "-2px", position: "relative" }}
                                >
                                    <input type="radio" id="option-xl" name="shop-sizes" />
                                </span>{" "}
                                <span className="d-inline-block text-black"> Extra Large</span>
                            </label>
                        </div> */}
                        <div className="mb-5">
                            <div className="input-group mb-3" style={{ maxWidth: 120 }}>
                                <div className="input-group-prepend">
                                    <button
                                        className="btn btn-outline-primary js-btn-minus"
                                        type="button"
                                    >
                                        −
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    className="form-control text-center"
                                    defaultValue={1}
                                    placeholder=""
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-outline-primary js-btn-plus"
                                        type="button"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p>
                            <a href="cart.html" className="buy-now btn btn-sm btn-primary">
                                Add To Cart
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <VisitorF />

        </div >
    )
}


export default ProductDetails
export const getServerSideProps = async (context) => {
    const serviceSlug = context.params.singleservice
    const details = await getServiceBySlug(serviceSlug);
    return {
        props: {
            details,
        }
    }
}