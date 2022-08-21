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
                        <div className="col-md-12 order-2">
                            <div className="row">
                                <div className="col-md-12 mb-5">
                                    <div className="float-md-left mb-4">
                                        <h2>Providers</h2>
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
                                                    Rating, low to high
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Rating, high to low
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