import "bootstrap/dist/css/bootstrap.css";
import Header from  "../../components/admin/header";
import Sidebar from "../../components/admin/sidebar";
import Footer from "../../components/admin/footer";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { set, useForm } from "react-hook-form";
import { FaEdit, FaEye, FaPlus, FaPlusCircle, FaRegPlusSquare, FaWindowClose } from "react-icons/fa";

var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';

export default function settings() {
    
    const [packages,setPackages] = useState([]);
    const [packproducts,setPackproducts] = useState([]);
    const [filteredpp, setFilteredpp] = useState([]);
    const [btn, setBtn] = useState('');
    const [update, setUpdate] = useState('');
    const [userid, setUserid] = useState('88e1b9a3-520f-433a-b0f4-224a9090b062');
    const [products,setProducts] = useState([]);
    const [services,setServices] = useState([]);
    const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm();

    const columns1 = [
        {
            text: "Package Name"
        },
        {
            text: "Description"
        },
        {
            text: "Content Count"
        },
        {
            text: "Category"
        },
        {
            text: "Price"
        },
        {
            text: "Action"
        }
    ]

    const columns2 = [
        {
            text: "Name"
        },
        {
            text: "Type"
        },
        {
            text: "Category"
        },
        {
            text: "Price"
        },
        {
            text: "Action"
        }
    ]

    const columns3 = [
        {
            text: "Name"
        },
        {
            text: "Type"
        },
        {
            text: "Category"
        },
        {
            text: "Price"
        }
    ]

    const findElementById = (arr, id) => arr.filter(element => element._id == id);
    const removeElementById = (arr, id) => arr.filter(element => element._id !== id);

    const setForm = (id) => {
        const pack = findElementById(packages, id)[0];
        console.log(pack);
        setValue('name', pack.name);
        setValue('description', pack.description);
        setValue('price', pack.price);
        setValue('category', pack.category);
        setUpdate(id)
    }

    let createFormViewBtn;

    if(btn == ''){
        createFormViewBtn = 
        <button className="btn" onClick={(e) => onClickCreate()} id="createBtn"> <FaPlusCircle /> Create Package </button>
    }
    else{
        createFormViewBtn = 
        <button className="btn" onClick={e=>onClickCancel()}> <FaWindowClose /> Cancel </button>
    }

    const filterPackProduct = (id) => {
        let filtered = packproducts.filter(element => element.packageid == id);
        filtered.forEach(f => {
            products.forEach(p => {
                if(f.productid == p._id){
                    f._id = p._id;
                    f.name = p.name;
                    f.category = p.category;
                    f.price = p.price;
                    f.type = p.type;
                }
            })
        })

        filtered.forEach(f => {
            services.forEach(p => {
                if(f.productid == p._id){
                    f._id = p._id;
                    f.name = p.name;
                    f.category = p.category;
                    f.price = p.price;
                    f.type = p.type;
                }
            })
        })

        setFilteredpp(filtered);

        console.log(filtered);
    }

    const onClickCreate = () => {
        setBtn('create');
        document.getElementById("detailsCard").classList.toggle("col-lg-6");
        
    }

    const onClickUpdate = (id) => {
        setBtn('update');
        setForm(id);
        document.getElementById("detailsCard").classList.toggle("col-lg-6");
        filterPackProduct(id);
    }
    
    const onClickCancel = () => {
        setBtn('');
        setUpdate('');
        document.getElementById("detailsCard").classList.toggle("col-lg-6");
        reset({
            name: '',
            description: '',
            category: ''
        })
    }

    const onClickAdd = (id) => {
        if(btn == "add"){
            onClickCancel();
        }else{
            setBtn('add');
            setUpdate(id);
            document.getElementById("detailsCard").classList.toggle("col-lg-6");
            filterPackProduct(id);

            const table2 = () => {
                $(function() {
                    $('#productTable').DataTable({
                        ordering:true,
                        select: true,
                        responsive: true,
                        buttons: [
                            'copy','excel','pdf'
                        ]
                    });
                });
            }

            table2();
        }
    }

    const onClickAddProduct = (id) => {
        
        if( btn == "add"){
            console.log(id);
            console.log(update);

            let formData = {};
            formData.packageid = update;
            formData.productid = id;
            console.log(formData);

            axios.post(`/packageproduct`, formData).then((res)=>{
                console.log(res);
                const newpp = res.data.packageproduct.res[1];
                setPackproducts([newpp],...packproducts);
                let p = findElementById(packages,update)[0];
                p.count = p.count + 1;
                p.price = p.price + findElementById(packproducts,id)[0].price;
                setPackages([p].concat(removeElementById(packages,update)))
                alert('Product added successfully');

            }).catch((error) => {
                console.log(error)
            })
        }
    }

    const onPackageSubmit = (formData) => {
        if(btn == 'create'){
            formData.createdBy = userid;
            formData.count = 0;
            formData.price = 0;

            axios.post(`/package`, formData).then((res)=>{
                const newPackage = res.data.package.res[1];
                setPackages([newPackage],...packages);
                alert('Package created successfully');
                console.log(packages);
            }).catch((error) => {
                console.log(error)
            })
            onClickCancel();

        } else {
            formData.createdBy = userid;
            formData.id = update;
            const pack = findElementById(packages, update)[0];
            formData.count = pack.count;
            
            console.log(formData)

            axios.put(`/package/${update}`, formData).then((res)=>{
                const newPackage = res.data.package.res[1];
                alert('Package updated successfully');
                setPackages([formData].concat(removeElementById(packages,newPackage._id)))
                console.log(packages);
            }).catch((error) => {
                console.log(error)
            })
            onClickCancel();
        }
    }

    useEffect(()=>{

        const table1 = () => {
            $(function() {
                $('#packageTable').DataTable({
                    ordering:true,
                    select: true,
                    responsive: true,
                    buttons: [
                        'copy','excel','pdf'
                    ]
                });
            });
        }

        const getPackages = () => {
            return axios.get("/package");
        }

        const getPackageProduct = () => {
            return axios.get("/packageproduct");
        }

        const getService = () => {
            return axios.get("/service");
        }

        const getProduct = () => {
            return axios.get("/product");
        }

        Promise.all([getPackages(),getPackageProduct(),getProduct(),getService()]).then((res) => {
            let packages = res[0].data.packages;
            let packproducts = res[1].data.packageproducts;
            console.log(res)
            let service = res[3].data.service;
            setServices(service)
            let p = res[2].data.products;
            setProducts(p);
            console.log(packages);
            console.log(packproducts);
            packages.forEach(p => {
                let count = 0
                packproducts.forEach(pp => {
                    if(p._id == pp.packageid){
                        count++;
                    }
                })
                p.count = count;
            })
            setPackproducts(packproducts);
            setPackages(packages);
            table1();
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
                                {createFormViewBtn}
                            </div>
                            <div className="row">
                            <div className='mb-4' id="detailsCard">
                                <div className='card shadow md-4'>
                                    <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                                        <h6> Package Details </h6>
                                    </div>
                                    <div className='card-body'>
                                        <div className="packageView">
                                            <div className="table">
                                                <table className="table table-hover p-2 mt-2" vertical-alignment="middle" id='packageTable'>
                                                    <thead>
                                                        <tr>
                                                            {columns1.map((c) => (
                                                                <th key={c.text} >{c.text}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {console.log(packages)}
                                                        {packages.map((p)=>(
                                                            <tr key={p._id}>
                                                                <td> {p.name} </td>
                                                                <td> {p.description} </td>
                                                                <td> {p.count} 
                                                                    <button className='btn' style={{"border":"none"}} 
                                                                    onClick={(e) => {onClickAdd(p._id) }}
                                                                    disabled={(btn == 'add') && (true)} >
                                                                        <FaEye />
                                                                    </button>
                                                                </td>
                                                                <td> {p.category} </td>
                                                                <td> {p.price} </td>
                                                                <td>
                                                                    <button className='btn' onClick={(e) => {onClickUpdate(p._id) }}>
                                                                        <FaEdit />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        {(packages.length == 0) && (<>No packages available</>)}
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
                                        { btn=='create' && (<h6>Add Package</h6>)}
                                        { btn=='update' && (<h6>Update Package</h6>)}
                                    </div>
                                    <div className='card-body'>
                                        <div className="packageView">
                                                        { btn!='create' && (
                                                            <>
                                                            <h6 className="mb-0 text-gray-800">Package Content</h6>
                                                            <div className='table-responsive'>
                                                            <table className='table' id='filteredppTable'>
                                                            <thead>
                                                                <tr>
                                                                    {columns3.map((c) => (
                                                                        <th key={c.text} >{c.text}</th>
                                                                    ))}
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {filteredpp.map((a,i) => (
                                                                    <tr id={a._id} key={i}>
                                                                        <td>{a.name}</td>
                                                                        <td>Product</td>
                                                                        <td>{a.category}</td>
                                                                        <td>Rs. {a.price}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                            </table>
                                                            {(filteredpp.length == 0) && (<>No package content. Click to add a product or service from below. </>)}
                                                            <br/><br/>
                                                            </div>
                                                            </>
                                                        )}
                                                        { btn=='add' && (
                                                            <>
                                                            <h6 className="mb-0 text-gray-800">Products and Providers</h6>
                                                            <div className='table-responsive'>
                                                            <table className='table' id='productTable'>
                                                            <thead>
                                                                <tr>
                                                                    {columns2.map((c) => (
                                                                        <th key={c.text} >{c.text}</th>
                                                                    ))}
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {products.map((a,i) => (
                                                                    <tr id={a._id} key={i}>
                                                                        <td>{a.name}</td>
                                                                        <td>Product</td>
                                                                        <td>{a.category}</td>
                                                                        <td>Rs. {a.price}</td>
                                                                        <td>
                                                                            <button className='btn' onClick={(e) => { onClickAddProduct(a._id) }}>
                                                                                <FaPlus />
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                                {services.map((a,i) => (
                                                                    <tr id={a._id} key={i}>
                                                                        <td>{a.name}</td>
                                                                        <td>Service</td>
                                                                        <td>{a.category}</td>
                                                                        <td>Rs. {a.price}</td>
                                                                        <td>
                                                                            <button className='btn' onClick={(e) => { onClickAddProduct(a._id) }}>
                                                                                <FaPlus />
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                            </table>
                                                            </div>
                                                            </>
                                                        )}
                                                        
                                        </div>
                                        {btn != "add" && (
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
                                                {(btn != "create") &&  (
                                                    <div class="form-group row">
                                                    <label for="price" class="col-sm-4 col-form-label">Price</label>
                                                    <div class="col-sm-8">
                                                        <input type="number" class="form-control" id="price" 
                                                        placeholder="" disabled={(btn == 'update') && (true)}
                                                        {...register("price", { required: true })}/>
                                                    </div>
                                                </div>
                                                )}
                                                <div class="form-group row">
                                                    <label for="price" class="col-sm-4 col-form-label">Category</label>
                                                    <div class="col-sm-8">
                                                        <select className='form-control mb-4' name="category" id='category'
                                                        disabled={(btn == 'update') && (true)}
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
                                        )}
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