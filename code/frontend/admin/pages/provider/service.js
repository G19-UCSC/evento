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

export default function service() {

    const [btn, setBtn] = useState('null')
    const [update, setUpdate] = useState('')
    const [services, setServices] = useState([])
    const [rservices, setRservices] = useState([])
    const { register, handleSubmit, watch, control, reset, setValue, formState: { errors } } = useForm();

    const columns = [{
        text: 'Name'
    }, {
        text: 'Description'
    },
    //{
    //text: 'Venue'
    //},
    //{
    // text: 'Time Slot'
    //  },
    {
        text: 'Price'
    }, {
        text: 'Category'
    }, {
        text: 'Commission Rate'
    }, {
        text: 'Max Quantity'
    }, {
        text: 'Refund Rate'
    }, {
        text: 'Action'
    },
    ];

    let createFormViewBtn;

    if (btn == 'null') {
        createFormViewBtn = <button className="btn" onClick={e => onClickCreate()} id="createBtn"> <FaUserPlus /> Add/Update Service </button>
    }
    else {
        createFormViewBtn = <button className="btn" onClick={e => onClickCancel()}> <FaWindowClose /> Cancel </button>
    }

    let submitBtn;

    if (btn == 'create') {
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Add/Update Service </button>
    }
    else if (btn == 'update') {
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Update Service </button>
    }

    const findElementById = (arr, id) => arr.filter(element => element._id == id);
    const removeElementById = (arr, id) => arr.filter(element => element._id !== id);

    const setForm = (id) => {
        const service = findElementById(services, id)[0];
        console.log(service);
        setValue('name', service.name);
        setValue('description', service.description);
        setValue('price', service.price);
        setValue('category', service.category);
        setValue('comission', service.comission);
        setValue('count', service.count);
        setValue('refundRate', service.refundRate);
        setValue('image_path', service.image_path);
        setUpdate(service._id)
    }

    function onClickCreate(e) {
        if (btn == 'null') {
            setBtn('create');
            document.getElementById("servicesTableCard").classList.toggle("col-lg-6");
        }
    }

    function onClickUpdate(id) {
        console.log(id)
        if (btn == 'null' && id != '') {
            setBtn('update');
            setForm(id);
            document.getElementById("servicesTableCard").classList.toggle("col-lg-6");
        }

    }

    function onClickCancel(e) {
        setBtn('null');
        document.getElementById("servicesTableCard").classList.toggle("col-lg-6");
        reset({
            name: '',
            description: '',
            price: '',
            category: '',
            comission: '',
            count: '',
            refundrate: '',
            image_path: ''
        })
    }

    const onSubmit = (formData) => {

        if (btn == 'update' && update != '') {
            let u = findElementById(services, update)[0];
            formData.id = update

            console.log(formData)
            axios.put(`/service/${update}`, formData).then((res) => {
                const newService = res.data.service.res[1]
                setServices([formData].concat(removeElementById(services, newService._id)))
            }).catch((error) => {
                console.log(error)
            })

            onClickCancel();
        } else {
            console.log(formData)
            axios.post(`/service/`, formData).then((res) => {
                const newService = res.data.service.res[1]
                setServices([formData].concat(removeElementById(services, newService._id)))
            }).catch((error) => {
                console.log(error)
            })

            onClickCancel();
        }
    }

    useEffect(() => {
        const table = () => {
            $(function () {
                $('#servicesTable').DataTable({
                    ordering: true,
                    select: true,
                    responsive: true,
                    buttons: [
                        'copy', 'excel', 'pdf'
                    ]
                });
            });
        }

        const getServices = () => {
            return axios.get("/service");
        }


        Promise.all([getServices()]).then((res) => {
            console.log(res)
            setServices(res[0].data.services);
            table();
        }).catch((error) => {
            console.log(error)
        })

    }, []);

    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="service" />
                <div id="content-wrapper" className='d-flex flex-column'>
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Services</h1>
                                {createFormViewBtn}
                            </div>
                            <div className='row'>
                                <div className='mb-4' id="servicesTableCard">
                                    <div className='card shadow md-4'>
                                        <div className='card-header'>Services</div>
                                        <div className='card-body'>
                                            <div className='table-responsive'>
                                                <table className='table' id="servicesTable">
                                                    <thead>
                                                        <tr>
                                                            {columns.map((c) => (
                                                                <th key={c.text} >{c.text}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {services?.map((a) => (
                                                            <tr id={a._id} key={a._id}>
                                                                <td>
                                                                    <img src={a.image_path} width="40px" height="40px" /> <br />
                                                                    {a.name}</td>
                                                                <td>{a.description}</td>
                                                                <td>{a.price}</td>
                                                                <td>{a.category}</td>
                                                                <td>{a.comission}</td>
                                                                <td>{a.count}</td>
                                                                <td>{a.refundRate}</td>
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
                                                {(btn == "create") && (<div className='card-header'> Add Service</div>)}
                                                {(btn == "update") && (<div className='card-header'> Update Service</div>)}
                                                <div className='card-body'>
                                                    <form onSubmit={handleSubmit(onSubmit)} className='form' id='serviceform' >
                                                        <div className='form-group'>
                                                            <label htmlFor='name' hidden>Name : </label>
                                                            <input className='form-control mb-4' type="text"
                                                                name='name' id='name' placeholder='Name'
                                                                {...register("name", { required: true })} />
                                                            <input className='form-control mb-4' type="text"
                                                                name='description' id='description' placeholder='Description'
                                                                {...register("description", { required: true })} />
                                                            <input className='form-control mb-4' type="number"
                                                                name='price' id='price' placeholder='Price'
                                                                {...register("price", { required: true })} />
                                                            <input className='form-control mb-4' type="text"
                                                                name='count' id='count' placeholder='Max Quantity'
                                                                {...register("count", { required: true })} />

                                                            <input className='form-control mb-4' type="text"
                                                                name='category' id='category' placeholder='Category'
                                                                {...register("category", { required: true })} />
                                                            <input className='form-control mb-4' type="number"
                                                                name='comission' id='comission' placeholder='Commission'
                                                                {...register("comission", { required: true })} />
                                                            <input className='form-control mb-4' type="number"
                                                                name='refundRate' id='refundRate' placeholder='Refund Rate'
                                                                {...register("refundRate", { required: true })} />
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