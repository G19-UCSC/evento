import "bootstrap/dist/css/bootstrap.css";
import Header from  "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";
import Footer from "../components/dashboard/footer";

export default function settings() {

    return(
        <>
            <div id="wrapper">
                <Sidebar linkId="settings" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            This is settings page
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}