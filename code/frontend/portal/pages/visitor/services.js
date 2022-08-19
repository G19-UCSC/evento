import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { getAllServices } from '../../libs/serviceStore';
import VisitorH from '../../components/header/visitor';
import VisitorF from '../../components/footer/visitor';
export default function Services({ services }) {
    const router = useRouter();
    const viewServiceDetails = useCallback((singleservice) => {
        router.push(`./service/${singleservice}`);
    }, [router]
    );
    const ServiceElements = services.map((service) => {
        return (
            <div key={service.slug} onClick={() => viewServiceDetails(service.slug)} className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                <div className="block-4 text-center border" >
                    <figure className="block-4-image">
                        <img
                            src={service.image}
                            alt={service.slug}
                            className="img-fluid"
                        />
                    </figure>
                    <div className="block-4-text p-4">
                        <h3>{service.name}
                        </h3>
                        <p className="mb-0">{service.rating}</p>
                        <p className="text-primary font-weight-bold">Rs{' '}{service.price}</p>
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
                                        <h2>Services</h2>
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
                                {ServiceElements}
                            </div>

                        </div>
                        <div className="col-md-3 order-1 mb-5 mb-md-0">
                            <div className="border p-4 rounded mb-4">

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

                        </div>
                    </div>
                </div>
            </div>

            <VisitorF />

        </div >
    )
}
export const getServerSideProps = async () => {
    const services = await getAllServices();
    return {
        props: {
            services,
        }
    }
}