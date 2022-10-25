import Footer from "../../components/home/footer"
import Header from "../../components/home/header"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { filterByCategory, filterByPrice } from '../../utils/product';
import { CartContext, CartDispatchContext } from '../../context/productContext';
import axios from '../../utils/axios'
import React, { useContext, useState, useEffect } from 'react'
<script type="text/javascript" src="../../public/js/sidebar.js"></script>

import { FaAlignJustify, FaDollarSign, FaShoppingCart, FaRegCalendarAlt, FaRegPlayCircle, FaQuestionCircle, FaUserPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';
import { useForm } from 'react-hook-form';

export default function product() {
    const [btn, setBtn] = useState('null')
    const [update, setUpdate] = useState('')
    const [products, setProducts] = useState([])
    const [rproducts, setRproducts] = useState([])
    const { register, handleSubmit, watch, control, reset, setValue, formState: { errors } } = useForm();
    const [files, setFiles] = useState([])
    const [imgadmin, setImgadmin] = useState('');
    const [imgportal, setImgportal] = useState('');
    const [user,setUser] = useState('')

    const columns = [{
        text: 'Name'
    }, {
        text: 'Description'
    }, {
        text: 'Price'
    },
    {
        text: 'Discount'
    },
    {
        text: 'Category'
    }, {
        text: 'Commission Rate'
    }, {
        text: 'Max Quantity'
    }, {
        text: 'Action'
    },
    ];


    let createFormViewBtn;

    if (btn == 'null') {
        createFormViewBtn = <button className="btn" onClick={e => onClickCreate()} id="createBtn"> <FaUserPlus /> Add/Update Product </button>
    }
    else {
        createFormViewBtn = <button className="btn" onClick={e => onClickCancel()}> <FaWindowClose /> Cancel </button>
    }

    let submitBtn;

    if (btn == 'create') {
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Add Product </button>
    }
    else if (btn == 'update') {
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Update Product </button>
    }

    const findElementById = (arr, id) => arr.filter(element => element._id == id);
    const removeElementById = (arr, id) => arr.filter(element => element._id !== id);

    const setForm = (id) => {
        const product = findElementById(products, id)[0];
        console.log(product);
        setValue('name', product.name);
        setValue('description', product.description);
        setValue('price', product.price);
        setValue('discount', product.discount);
        setValue('category', product.category);
        setValue('comission', product.comission);
        setValue('count', product.count);
        setValue('image_path', product.image_path);
        setUpdate(product._id)
    }


    function onClickCreate(e) {
        if (btn == 'null') {
            setBtn('create');
            document.getElementById("productsTableCard").classList.toggle("col-lg-6");
        }
    }

    function onClickUpdate(id) {
        console.log(id)
        if (btn == 'null' && id != '') {
            setBtn('update');
            setForm(id);
            document.getElementById("productsTableCard").classList.toggle("col-lg-6");
        }

    }

    function onClickCancel(e) {
        setBtn('null');
        document.getElementById("productsTableCard").classList.toggle("col-lg-6");
        reset({
            name: '',
            description: '',
            price: '',
            category: '',
            comission: '',
            count: '',
            image_path: ''
        })
    }

    const onSubmit = (formData) => {

        let path;

        formData.userid = user.userid

        const fileData = new FormData();
        fileData.append("name", files[0].name)
        fileData.append("files", files[0]);
        fileData.append("filename", Date.now() + files[0].name)
        path = Date.now() + files[0].name
        for (var key of fileData.entries()) {
            console.log(key[0] + ', ' + key[1])
        }

        axios.post(`/uploadAdmin`, fileData).then((res) => {
            console.log(res)
            setImgadmin(res.data.path)
        }).catch((err) => {
            console.log(err)
        })

        axios.post(`/uploadPortal`, fileData).then((res) => {
            console.log(res)
            setImgportal(res.data.filename)
            path = res.data.filename
            console.log(path)
        }).catch((err) => {
            console.log(err)
        })

        if (btn == 'update' && update != '') {
            let u = findElementById(products, update)[0];
            formData.id = update
            formData.image_path = path;

            console.log(formData)
            axios.put(`/product/${update}`, formData).then((res) => {
                const newProduct = res.data.product.res[1]
                setProducts([formData].concat(removeElementById(products, newProduct._id)))
            }).catch((error) => {
                console.log(error)
            })

            onClickCancel();
        } else {
            formData.image_path = path;
            console.log(formData)
            axios.post(`/product/`, formData).then((res) => {
                const newProduct = res.data.product.res[1]
                setProducts([formData].concat(removeElementById(products, newProduct._id)))
            }).catch((error) => {
                console.log(error)
            })

            onClickCancel();
        }
    }

    useEffect(() => {

        const user_ = JSON.parse(localStorage.getItem('user'))
        setUser(user_);

        const table = () => {
            $(function () {
                $('#productsTable').DataTable({
                    ordering: true,
                    select: true,
                    responsive: true,
                    buttons: [
                        'copy', 'excel', 'pdf'
                    ]
                });
            });
        }

        const getProducts = () => {
            return axios.get("/product");
        }


        Promise.all([getProducts()]).then((res) => {
            console.log(res)
            setProducts(res[0].data.products);
            table();

        }).catch((error) => {
            console.log(error)
        })

    }, [])



    return (
        <div class="site-wrap">
            <Header />

            <div class="bg-light py-3">
                <div class="container">


                    <div class="row">
                        <div class="col-md-12 mb-0">
                            <a href="index.html">Products</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Products</strong></div>
                    </div>
                </div>
            </div>


            <div class="site-section">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md-9 order-2">
                            

                            <div class="row mb-5">
                                <h1 className="h3 mb-0 text-gray-800">Products</h1>
                                
                            </div>
                     
                            <div className='row'>
                                {createFormViewBtn}
                                <div className='mb-4' id="productsTableCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Products</div>
                                        <div className='card-body'>
                                            <div className='table-responsive'>
                                                <table className='table' id="productsTable">
                                                    <thead>
                                                        <tr>
                                                            {columns.map((c) => (
                                                                <th key={c.text} >{c.text}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {products.map((a) => (
                                                            <tr id={a._id} key={a._id}>
                                                                <td>
                                                                    <Image src={'/uploads/'+a.image_path} width="40px" height="40px" /> <br />
                                                                    {a.name}</td>
                                                                <td>{a.description}</td>
                                                                <td>{a.price}</td>
                                                                <td>{a.discount}</td>
                                                                <td>{a.category}</td>
                                                                <td>{a.comission}</td>
                                                                <td>{a.count}</td>
                                                                <td>
                                                                    <button className='btn' onClick={(e) => { onClickUpdate(a._id) }}>
                                                                        <FaEdit />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 mb-4' id="createCard">
                                    <div className='card shadow md-4'>
                                        {(btn != "null") && (
                                            <>
                                                {(btn == "create") && (<div className='card-header'> Add Product</div>)}
                                                {(btn == "update") && (<div className='card-header'> Update Product</div>)}
                                                <div className='card-body'>
                                                    <form onSubmit={handleSubmit(onSubmit)} className='form' id='productform' >
                                                        <div className='form-group'>
                                                            <label htmlFor='name' hidden>Name : </label>
                                                            <input className='form-control mb-4' type="text"
                                                                name='name' id='name' placeholder='Name'
                                                                {...register("name", { required: true })} />
                                                            <label htmlFor='description' hidden>Description : </label>
                                                            <input className='form-control mb-4' type="text"
                                                                name='description' id='description' placeholder='Description'
                                                                {...register("description", { required: true })} />
                                                            <label htmlFor='count' hidden>Max Quantity : </label>
                                                            <input className='form-control mb-4' type="number"
                                                                name='count' id='count' placeholder='Max Quantity'
                                                                {...register("count", { required: true })} />
                                                            <label htmlFor='price' hidden>Price : </label>
                                                            <input className='form-control mb-4' type="number"
                                                                name='price' id='price' placeholder='Price'
                                                                {...register("price", { required: true })} />
                                                            <label htmlFor='discount' hidden>Discount : </label>
                                                            <input className='form-control mb-4' type="number"
                                                                name='discount' id='discount' placeholder='Discount'
                                                                {...register("discount", { required: true })} />
                                                            <label htmlFor='category' hidden>Category : </label>
                                                            <input className='form-control mb-4' type="text"
                                                                name='category' id='category' placeholder='Category'
                                                                {...register("category", { required: true })} />
                                                            <label htmlFor='comission' hidden>Commission : </label>
                                                            <input className='form-control mb-4' type="number"
                                                                name='comission' id='comission' placeholder='Commission'
                                                                {...register("comission", { required: true })} />
                                                            <label htmlFor='Image' hidden>Image : </label>

                                                            <input className='form-control mb-4' type="file"
                                                                name='files' id='image_path' placeholder='image'
                                                                {...register("image_path", { required: true })}
                                                                onChange={e => setFiles(e.target.files)}
                                                                />




                                                            {submitBtn}
                                                        </div>
                                                    </form>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class="col-md-3 order-1 mb-5 mb-md-0">

                                <div class="border p-4 rounded mb-4">
                                    <a href="./provider" class="h6 list-group-item"><FaAlignJustify color='black' fontSize="16px" padding-left='10' /><span class="p-4">Dashboard</span></a>
                                    <a href="#" class="h6 list-group-item active"><FaRegPlayCircle color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Products</span></a>
                                    <a href="./providerservice" class="h6 list-group-item "><FaRegCalendarAlt color='black' fontSize="16px" padding-left='10' /><span class="p-4">Services</span></a>
                                    
                                    <a href="./servicebooking" class="h6 list-group-item "><FaDollarSign color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Bookings</span></a>
                                    <a href="./providerevents" class="h6 list-group-item "><FaQuestionCircle color='black' fontSize="16px" padding-left='10' /> <span class="p-4">Events</span></a>

                                </div>
                           
                            </div>
                       
                    </div>

                    {/* <Footer/> */}
                </div>
            </div>
        </div>



                )
}