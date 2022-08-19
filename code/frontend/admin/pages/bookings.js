import "bootstrap/dist/css/bootstrap.css";
import Header from  "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";
import Footer from "../components/dashboard/footer";

export default function bookings() {
    return(
        <>
            <div id="wrapper">
                <Sidebar linkId="bookings" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            This is bookings page
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}