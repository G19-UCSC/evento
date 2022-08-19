import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { getAllProducts } from '../../libs/productStore';
import VisitorH from '../../components/header/visitor';
import VisitorF from '../../components/footer/visitor';
export default function Products({ products }) {
    const router = useRouter();
    const viewProductDetails = useCallback((singleproduct) => {
        router.push(`./product/${singleproduct}`);
    }, [router]
    );
    const ProductElements = products.map((product) => {
        return (
            <div key={product.slug} onClick={() => viewProductDetails(product.slug)} className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                <div className="block-4 text-center border" >
                    <figure className="block-4-image">
                        <img
                            src={product.image}
                            alt={product.slug}
                            className="img-fluid"
                        />
                    </figure>
                    <div className="block-4-text p-4">
                        <h3>
                            {product.name}
                        </h3>
                        <p className="mb-0">{product.rating}</p>
                        <p className="text-primary font-weight-bold">Rs{' '}{product.price}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="site-wrap">
            <VisitorH />
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-9 order-2">
                            <div className="row">
                                <div className="col-md-12 mb-5">
                                    <div className="float-md-left mb-4">
                                        <h2>Products</h2>
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
                                                Reference
                                            </button>
                                            <div
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuReference"
                                            >
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
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                {ProductElements}
                            </div>
                            {/* <div className="row" data-aos="fade-up">
                                <div className="col-md-12 text-center">
                                    <div className="site-block-27">
                                        <ul>
                                            <li>
                                                <a href="#">&lt;</a>
                                            </li>
                                            <li className="active">
                                                <span>1</span>
                                            </li>
                                            <li>
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#">4</a>
                                            </li>
                                            <li>
                                                <a href="#">5</a>
                                            </li>
                                            <li>
                                                <a href="#">&gt;</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-md-3 order-1 mb-5 mb-md-0">
                            <div className="border p-4 rounded mb-4">
                                {/* <div className="mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">
                                        Filter by Price
                                    </h3>
                                    <div id="slider-range" className="border-primary" />
                                    <input
                                        type="text"
                                        name="text"
                                        id="amount"
                                        className="form-control border-0 pl-0 bg-white"
                                        disabled=""
                                    />
                                </div> */}
                                <h3 className="mb-3 h6 text-uppercase text-black d-block">
                                    Categories
                                </h3>
                                <ul className="list-unstyled mb-0">

                                    <li className="mb-1">
                                        <a href="#" className="d-flex">
                                            <span>Balloons </span>{" "}
                                            <span className="text-black ml-auto">(2,550)</span>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="d-flex">
                                            <span>Cakes</span>{" "}
                                            <span className="text-black ml-auto">(2,220)</span>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="d-flex">
                                            <span>Chairs</span>{" "}
                                            <span className="text-black ml-auto">(2,124)</span>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="d-flex">
                                            <span>Decorations</span>{" "}
                                            <span className="text-black ml-auto">(2,124)</span>
                                        </a>
                                    </li><li className="mb-1">
                                        <a href="#" className="d-flex">
                                            <span>Drinks</span>{" "}
                                            <span className="text-black ml-auto">(2,124)</span>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="d-flex">
                                            <span>Lights</span>{" "}
                                            <span className="text-black ml-auto">(2,124)</span>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="d-flex">
                                            <span>Sweets</span>{" "}
                                            <span className="text-black ml-auto">(2,124)</span>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="d-flex">
                                            <span>Tables</span>{" "}
                                            <span className="text-black ml-auto">(2,124)</span>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="d-flex">
                                            <span>Tents</span>{" "}
                                            <span className="text-black ml-auto">(2,124)</span>
                                        </a>
                                    </li>

                                </ul>

                            </div>
                            {/* <div className="border p-4 rounded mb-4">

                                <div className="mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
                                    <label htmlFor="s_sm" className="d-flex">
                                        <input type="checkbox" id="s_sm" className="mr-2 mt-1" />{" "}
                                        <span className="text-black">Small (2,319)</span>
                                    </label>
                                    <label htmlFor="s_md" className="d-flex">
                                        <input type="checkbox" id="s_md" className="mr-2 mt-1" />{" "}
                                        <span className="text-black">Medium (1,282)</span>
                                    </label>
                                    <label htmlFor="s_lg" className="d-flex">
                                        <input type="checkbox" id="s_lg" className="mr-2 mt-1" />{" "}
                                        <span className="text-black">Large (1,392)</span>
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
                                    <a href="#" className="d-flex color-item align-items-center">
                                        <span className="bg-danger color d-inline-block rounded-circle mr-2" />{" "}
                                        <span className="text-black">Red (2,429)</span>
                                    </a>
                                    <a href="#" className="d-flex color-item align-items-center">
                                        <span className="bg-success color d-inline-block rounded-circle mr-2" />{" "}
                                        <span className="text-black">Green (2,298)</span>
                                    </a>
                                    <a href="#" className="d-flex color-item align-items-center">
                                        <span className="bg-info color d-inline-block rounded-circle mr-2" />{" "}
                                        <span className="text-black">Blue (1,075)</span>
                                    </a>
                                    <a href="#" className="d-flex color-item align-items-center">
                                        <span className="bg-primary color d-inline-block rounded-circle mr-2" />{" "}
                                        <span className="text-black">Purple (1,075)</span>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <VisitorF />

        </div >
    )
}
export const getServerSideProps = async () => {
    const products = await getAllProducts();
    return {
        props: {
            products,
        }
    }
}