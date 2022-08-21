import "bootstrap/dist/css/bootstrap.css";
import Header from  "../../components/admin/header";
import Sidebar from "../../components/admin/sidebar";
import Footer from "../../components/admin/footer";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { set, useForm } from "react-hook-form";
import { FaEdit, FaPlusCircle, FaWindowClose } from "react-icons/fa";

var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';

export default function settings() {

    const [system,setSystem] = useState([]);
    const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm();

    const onSystemSubmit = (formData) => {
        formData.id = system._id
        formData.location = system.location
        let id = system._id;

        axios.put(`/system/${id}`, formData).then((res)=>{
            const newSystem = res.data.system.res[1]
            setSystem(newSystem);
            alert('System Details updated successfully');
        }).catch((error) => {
            console.log(error)
        })

    }

    useEffect(()=>{

        const getSystem = () => {
            return axios.get("/system");
        }

        Promise.all([getSystem()]).then((res) => {
            let system = res[0].data.systems[0];
            setSystem(system);
        }).catch((error) => {
            console.log(error)
        })
        
    },[])

    return(
        <>
            <div id="wrapper">
                <Sidebar linkId="settings" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Settings</h1>
                            </div>
                            <div className="row">
                            <div className='mb-4' id="detailsCard">
                                <div className='card shadow md-4'>
                                    <div className='card-header'> Evento Details </div>
                                    <div className='card-body'>
                                        <form className='form' encType="multipart/form-data" id='systemform' 
                                        onSubmit={handleSubmit(onSystemSubmit)} >
                                            <h6 className="mb-0 text-gray-800 mb-2">Basic Details</h6>
                                            <div class="form-group row">
                                                <label for="companyName" class="col-sm-4 col-form-label">Company Name</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control-plaintext" 
                                                    id="companyName" defaultValue="Evento" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="contact_no" class="col-sm-4 col-form-label">Contact Number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" defaultValue={system.contact_no}
                                                    id="contact_no" placeholder="1123456789"
                                                    onChange={e=>setContact(e.target.value)}
                                                    {...register("contact_no", { required: true })}/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="penalty_rate" class="col-sm-4 col-form-label">Penalty Rate</label>
                                                <div class="col-sm-8">
                                                    <input type="number" class="form-control" max={100} min={0}
                                                    id="penalty_rate" placeholder="" defaultValue={system.penalty_rate}
                                                    onChange={(e)=>setPenaltyrate(e.target.value)}
                                                    {...register("penalty_rate", { required: true })}/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="service_rate" class="col-sm-4 col-form-label">Service Rate</label>
                                                <div class="col-sm-8">
                                                    <input type="number" class="form-control" max={100} min={0}
                                                    id="service_Rate" placeholder="" defaultValue={system.service_rate}
                                                    onChange={(e)=>setServicerate(e.target.value)}
                                                    {...register("service_rate", { required: true })}/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="advance_rate" class="col-sm-4 col-form-label">Advance Rate</label>
                                                <div class="col-sm-8">
                                                    <input type="number" class="form-control" max={100} min={0}
                                                    id="advance_rate" placeholder="" defaultValue={system.advance_rate}
                                                    onChange={(e)=>setAdvancerate(e.target.value)}
                                                    {...register("advance_rate", { required: true })}/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div className="col-lg-10 align-items-center">
                                                <input className="w-100 btn btn-secondary btn-lg" type="submit"
                                                 value={"Save and Update"} />
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