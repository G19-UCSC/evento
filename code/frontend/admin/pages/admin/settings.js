import "bootstrap/dist/css/bootstrap.css";
import Header from  "../../components/admin/header";
import Sidebar from "../../components/admin/sidebar";
import Footer from "../../components/admin/footer";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";

export default function settings() {

    const [system,setSystem] = useState([]);
    const [contact,setContact] = useState('');
    const [penaltyrate,setPenaltyrate] = useState(0);
    const [servicerate,setServicerate] = useState(0);
    const [advancerate,setAdvancerate] = useState(0);
    const [product,setProduct] = useState([]);
    // const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm();

    const handleSubmit = async (e)=> {
        e.preventDefault();
        let newSystem = {
            location: system.location,
            contact_no: contact,
            penalty_rate: penaltyrate,
            servicerate,
            advancerate
        }

        console.log(newSystem);
        console.log(penaltyrate);
    }

    useEffect(()=>{
        axios.get('/system').then((res)=>{
            setSystem(res.data.systems[0]);
        }).catch((error)=>{
            console.error();
        })

        console.log(system);
        
    },[])

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
                                        <form className='form' encType="multipart/form-data" id='systemform' onSubmit={handleSubmit} >
                                            <h6 className="mb-0 text-gray-800 mb-2">Basic Details</h6>
                                            <div class="form-group row">
                                                <label for="companyName" class="col-sm-4 col-form-label">Company Name</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control-plaintext" 
                                                    id="companyName" defaultValue="Evento" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="contactNumber" class="col-sm-4 col-form-label">Contact Number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" value={system.contact_no}
                                                    id="contactNumber" placeholder="1123456789"
                                                    onChange={e=>setContact(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="penaltyRate" class="col-sm-4 col-form-label">Penalty Rate</label>
                                                <div class="col-sm-8">
                                                    <input type="number" class="form-control" max={100} min={0}
                                                    id="penaltyRate" placeholder="" value={system.penalty_rate}
                                                    onChange={(e)=>setPenaltyrate(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="serviceRate" class="col-sm-4 col-form-label">Service Rate</label>
                                                <div class="col-sm-8">
                                                    <input type="number" class="form-control" max={100} min={0}
                                                    id="serviceRate" placeholder="" value={system.service_rate}
                                                    onChange={(e)=>setServicerate(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="advanceRate" class="col-sm-4 col-form-label">Advance Rate</label>
                                                <div class="col-sm-8">
                                                    <input type="number" class="form-control" max={100} min={0}
                                                    id="advanceRate" placeholder="" value={system.advance_rate}
                                                    onChange={(e)=>setAdvancerate(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div className="col-lg-10">
                                                <input className="w-100" type="submit" value={"Save and Update"} />
                                                </div>
                                            </div>
                                        </form>
                                        <div className="packageView mt-4">
                                            <h6 className="mb-0 text-gray-800">Packages</h6>
                                            <div className="table">
                                                <table className="table table-hover p-2 mt-2" >
                                                    <tbody>
                                                        <tr><td>Package1</td></tr>
                                                        <tr><td>Package1</td></tr>
                                                        <tr><td>Package1</td></tr>
                                                    </tbody>
                                                </table>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 mb-4' id="createCard">
                                <div className='card shadow md-4'>
                                    <div className='card-header'> Add Packages </div>
                                    <div className='card-body'>
                                        <div className="packageView">
                                            <h6 className="mb-0 text-gray-800">Products and Providers</h6>
                                        </div>
                                        <form className='form' id='userform' >
                                            <div class="form-group row">
                                                <label for="staticEmail" class="col-sm-4 col-form-label">Email</label>
                                                <div class="col-sm-8">
                                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" defaultValue="email@example.com" />
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