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

    const [packs,setPacks] = useState([]);
    const [btn, setBtn] = useState('');
    const [packupdate, setPackupdate] = useState('');
    const [userid, setUserid] = useState('admin1');
    const [products,setProducts] = useState([]);
    const [services,setServices] = useState([]);
    const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm();

    const columns = [
        {
            text: "Product Name"
        },
        {
            text: "Provider"
        },
        {
            text: "Price"
        }
    ]

    const onClickCreate = () => {
        setBtn('create');
        document.getElementById("detailsCard").classList.toggle("col-lg-6");

        function table () {
            $(function() {
                $('#productTable').DataTable({
                    ordering:true,
                    responsive: true,
                });
            });
        }    

        const getService = () => {
            return axios.get("/service");
        }

        const getProduct = () => {
            return axios.get("/product");
        }

        Promise.all([getService(),getProduct()]).then((res) => {
            let service = res[0].data.service;
            setServices(service)
            let p = res[1].data.products;
            setProducts(p);
            console.log(res);
            // table();
        }).catch((error) => {
            console.log(error)
        })

        console.log(products);
        console.log(packs);
        
    }

    const onClickUpdate = () => {
        setBtn('update');
        document.getElementById("detailsCard").classList.toggle("col-lg-6");
    }

    const onClickCancel = () => {
        setBtn('');
        document.getElementById("detailsCard").classList.toggle("col-lg-6");
    }

    const closeCreatePackage = () => {
        setBtn('');
        document.getElementById("detailsCard").classList.toggle("col-lg-6");
        reset({
            name: '',
            description: '',
            category: ''
        })
    }

    const onPackageSubmit = (formData) => {
        if(btn == 'create'){
            formData.createdBy = userid;

            axios.post(`/package`, formData).then((res)=>{
                const newPackage = res.data.system.res[1];
                // setPackages([newPackage],...packs);
                alert('Package created successfully');
                console.log(packs);
            }).catch((error) => {
                console.log(error)
            })

            closeCreatePackage();
    
        }
    }

    useEffect(()=>{

        const getPacks = () => {
            return axios.get("/package");
        }

        Promise.all([getPacks()]).then((res) => {
            let p = res[0].data.packages;
            console.log(p);
            setPacks(p);
        }).catch((error) => {
            console.log(error)
        })
        
    },[])

    return(
        <>
            <div id="wrapper">
                <Sidebar linkId="packages" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Packages</h1>
                            </div>
                            <div className="row">
                            <div className='mb-4' id="detailsCard">
                                <div className='card shadow md-4'>
                                    <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                                         Package Details 
                                         <button className="btn" onClick={e => onClickCreate()} id="createBtn">
                                                    <FaPlusCircle /> Create Package
                                        </button>
                                    </div>
                                    <div className='card-body'>
                                        <div className="mt-4" id='packageView '>
                                            <div className="table">
                                                <table className="table table-hover p-2 mt-2" id='packageTable'>
                                                    <tbody>
                                                        {console.log(packs)}
                                                        {packs.map((p)=>{
                                                            <tr key={p._id}>
                                                                <td>{p.name}</td>
                                                                <td>{p.category}</td>
                                                                <td>{p.price}</td>
                                                                {/* <td>
                                                                    <button className='btn' onClick={(e) => {onClickUpdate(p._id) }}>
                                                                        <FaEdit />
                                                                    </button>
                                                                </td> */}
                                                            </tr>
                                                        })}
                                                        {(packs.length == 0) && (<>No packages available</>)}
                                                    </tbody>
                                                </table>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 mb-4' id="createCard">
                                { btn && (
                                <div className='card shadow md-4'>
                                    <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'> 
                                        { btn=='create' && (<>Add Package</>)}
                                        { btn=='update' && (<>Update Package</>)}
                                        <button className="btn" onClick={e=>onClickCancel()}> 
                                            <FaWindowClose /> Cancel
                                        </button>
                                    </div>
                                    <div className='card-body'>
                                        <div className="packageView">
                                            <h6 className="mb-0 text-gray-800">Products and Providers</h6>
                                                    <div className='table-responsive'>
                                                        <table className='table' id='productTable'>
                                                            <thead>
                                                                <tr>
                                                                    {columns.map((c) => (
                                                                        <th key={c.text} >{c.text}</th>
                                                                    ))}
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {products.map((a,i) => (
                                                                    <tr id={a._id} key={i}>
                                                                        <td>{a.name}</td>
                                                                        <td>{a.price}</td>
                                                                        <td>{a.category}</td>
                                                                        {/* <td>
                                                                            <button className='btn' onClick={(e) => { onClickUpdate(a._id) }}>
                                                                                <FaEdit />
                                                                            </button>
                                                                        </td> */}
                                                                    </tr>
                                                                ))}
                                                                {services.map((a,i) => (
                                                                    <tr id={a._id} key={i}>
                                                                        <td>{a.name}</td>
                                                                        <td>{a.price}</td>
                                                                        <td>{a.category}</td>
                                                                        <td>
                                                                            <button className='btn' onClick={(e) => { onClickUpdate(a.userid) }}>
                                                                                <FaEdit />
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                        </div>
                                        <form className='form' id='packageform' 
                                        onSubmit={handleSubmit(onPackageSubmit)}>
                                            <h6 className="mb-0 text-gray-800 mt-2 mt-2">Package Details</h6>
                                            <div class="form-group row">
                                                <label for="name" class="col-sm-4 col-form-label">Name</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" 
                                                    id="name" {...register("name", { required: true })}/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="description" class="col-sm-4 col-form-label">Description</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="description" 
                                                    placeholder="Single line description" 
                                                    {...register("description", { required: true })}/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="price" class="col-sm-4 col-form-label">Price</label>
                                                <div class="col-sm-8">
                                                    <input type="number" class="form-control" id="price" 
                                                    placeholder="" 
                                                    {...register("price", { required: true })}/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="price" class="col-sm-4 col-form-label">Category</label>
                                                <div class="col-sm-8">
                                                    <select className='form-control mb-4' name="category" id='category'
                                                        {...register("category", { required: true })}>
                                                        <option value="Standard" >Standard</option>
                                                        <option value="Corporate">Corporate</option>
                                                    </select>
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
                                )}
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