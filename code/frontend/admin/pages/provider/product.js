import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import { FaEdit, FaUserPlus, FaWindowClose } from 'react-icons/fa';
import Sidebar from "../../components/provider/sidebar";
import Footer from "../../components/provider/footer"
import Header from "../../components/provider/header"


var $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs4';
import axios from '../../utils/axios';
import { useForm } from 'react-hook-form';

export default function product() {

    const [btn, setBtn] = useState('null')
    const [update, setUpdate] = useState('')
    const [products, setProducts] = useState([])
    const [rproducts, setRproducts] = useState([])
    const { register, handleSubmit, watch, control, reset, setValue, formState: { errors } } = useForm();

    const columns = [{
        text: 'Name'
    }, {
        text: 'Description'
    }, {
        text: 'Price'
    }, {
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
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Add/Update Product </button>
    }
    else if (btn == 'update') {
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Update Product </button>
    }

    const findElementById = (arr, id) => arr.filter(element => element.productid == id);
    const removeElementById = (arr, id) => arr.filter(element => element.id !== id);

    const setForm = (id) => {
        const product = findElementById(products, id)[0];
        console.log(product);
        setValue('name', product.name);
        setValue('description', product.description);
        setValue('price', product.price);
        setValue('category', product.category);
        setValue('comission', product.comission);
        setValue('count', product.count);
        setValue('image_path', product.image_path);
        setUpdate(product.id)
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

        if (btn == 'update' && update != '') {
            let u = findElementById(products, update)[0];
            formData.id = u._id

            console.log(formData)
            axios.put(`/product/${update}`, formData).then((res) => {
                const newProduct = res.data.product.res[1]
                setProducts([formData].concat(removeElementById(products, newProduct._productid)))
            }).catch((error) => {
                console.log(error)
            })

            onClickCancel();
        } else {
            console.log(formData)
            axios.post(`/product/`, formData).then((res) => {
                const newProduct = res.data.product.res[1]
                setProducts([formData].concat(removeElementById(products, newProduct._productid)))
            }).catch((error) => {
                console.log(error)
            })

            onClickCancel();
        }
    }

    useEffect(() => {
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

    }, []);

    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="product" />
                <div id="content-wrapper" className='d-flex flex-column'>
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Products</h1>
                                {createFormViewBtn}
                            </div>
                            <div className='row'>
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
                                                            <tr id={a.productid} key={a.productid}>
                                                                <td>
                                                                    <img src={a.image_path} width="40px" height="40px" /> <br />
                                                                    {a.name}</td>
                                                                <td>{a.description}</td>
                                                                <td>{a.price}</td>
                                                                <td>{a.category}</td>
                                                                <td>{a.comission}</td>
                                                                <td>{a.count}</td>
                                                                <td>
                                                                    <button className='btn' onClick={(e) => { onClickUpdate(a.productid) }}>
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
                                                            <input className='form-control mb-4' type="text"
                                                                name='description' id='description' placeholder='Description'
                                                                {...register("description", { required: true })} />
                                                            <input className='form-control mb-4' type="text"
                                                                name='count' id='count' placeholder='Max Quantity'
                                                                {...register("count", { required: true })} />



                                                            <input className='form-control mb-4' type="text"
                                                                name='price' id='price' placeholder='Price'
                                                                {...register("price", { required: true })} />
                                                            <input className='form-control mb-4' type="text"
                                                                name='category' id='category' placeholder='Category'
                                                                {...register("category", { required: true })} />
                                                            <input className='form-control mb-4' type="number"
                                                                name='comission' id='comission' placeholder='Commission'
                                                                {...register("comission", { required: true })} />
                                                            <input className='form-control mb-4' type="text"
                                                                name='image_path' id='image_path' placeholder='image'
                                                                {...register("image_path", { required: true })} />




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
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}