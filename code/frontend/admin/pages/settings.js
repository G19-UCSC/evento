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
                            <div className="row">
                            <div className='col-lg-6 mb-4' id="createCard">
                                <div className='card shadow md-4'>
                                    <div className='card-header'> Evento Details </div>
                                    <div className='card-body'>
                                        <form className='form' id='userform' >
                                            <div class="form-group row">
                                                <label for="companyName" class="col-sm-4 col-form-label">Company Name</label>
                                                <div class="col-sm-8">
                                                    <input type="text" readonly class="form-control-plaintext" id="companyName" value="Evento" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="companyEmail" class="col-sm-4 col-form-label">Company Email</label>
                                                <div class="col-sm-8">
                                                    <input type="text" readonly class="form-control-plaintext" id="companyEmail" value="email@example.com" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
                                                <div class="col-sm-8">
                                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
                                                <div class="col-sm-8">
                                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 mb-4' id="createCard">
                                <div className='card shadow md-4'>
                                    <div className='card-header'> Add Packages </div>
                                    <div className='card-body'>
                                        <form className='form' id='userform' >
                                            <div class="form-group row">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Email</label>
                                                <div class="col-sm-8">
                                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
                                                <div class="col-sm-8">
                                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
                                                <div class="col-sm-8">
                                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}