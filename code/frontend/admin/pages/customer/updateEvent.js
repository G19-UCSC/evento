import "bootstrap/dist/css/bootstrap.css";
import Header from "../../components/customer/header";
import Sidebar from "../../components/customer/sidebar";
import Footer from "../../components/customer/footer";
import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaEye, FaTrash } from 'react-icons/fa';
import { useRouter } from "next/router";
import { Controller, useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";

export default function bookings() {
    const router = useRouter()
    const [events, setEvents] = useState([]);
    const { register, handleSubmit, watch, control, reset, setValue, formState: { errors } } = useForm();
    const columns = [
        {
            text: 'Event Name',
        },
        {
            text: 'Date',
        },
        {
            text: 'Location'
        },
        {
            text: 'Status'
        },
        {
            text: 'Action'
        }
    ]
    // if (btn == 'null') {
    //     createFormViewBtn = <button className="btn" onClick={e => onClickCreate()} id="createBtn"> <FaUserPlus /> Add Question </button>
    // }
    // else {
    //     createFormViewBtn = <button className="btn" onClick={e => onClickCancel()}> <FaWindowClose /> Cancel </button>
    // }
    const [btn, setBtn] = useState('create')

    let submitBtn;

    if (btn == 'create') {
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Add Question </button>
    }
    else if (btn == 'update') {
        submitBtn = <button type='submit' className="w-100 btn btn-secondary btn-lg" > Update Account </button>
    }

    // function onClickCreate(e) {
    //     if (btn == 'null') {

    //         // document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
    //     }
    // }

    function onClickUpdate(id) {
        console.log(id)
        if (btn == 'null' && id != '') {
            setBtn('update');
            setForm(id);
            document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
        }

    }

    // function onClickCancel(e) {
    //     setBtn('null');
    //     document.getElementById("accountsTableCard").classList.toggle("col-lg-6");
    //     reset({
    //         question: ''
    //     })
    // }

    useEffect
    const addNewEvent = (e) => {
        e.preventDefault()
        router.push('/customer/addEvent')
    }
    return (
        <>
            <div id="wrapper">
                <Sidebar linkId="bookings" />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Update Event</h1>
                            </div>
                            <div className='row'>
                                <div className='col-md-12 mb-4' id="createCard">
                                    <div className='card shadow'>
                                        {(btn != "null") && (
                                            <>
                                                {(btn == "create") && (<div className='card-header'> Event Name:{' '}</div>)}
                                                {(btn == "update") && (<div className='card-header'> Update Event</div>)}
                                                <div className='card-body'>
                                                    <form className='form' id='userform' >
                                                        <div className='form-group'>
                                                            <div class="row d-flex justify-content-center">
                                                                <div className="col-md-6 ">
                                                                    <div class="form-group row">
                                                                        <div class="col-md-6">
                                                                            <label> Start Date:   <span class="text-danger">*</span></label>
                                                                            <Controller
                                                                                control={control}
                                                                                name="start_date"
                                                                                render={({ field }) => (
                                                                                    <DatePicker
                                                                                        isClearable
                                                                                        className={"form-control"}
                                                                                        onChange={(date) => field.onChange(date)}
                                                                                        selected={field.value}
                                                                                        showTimeSelect
                                                                                        timeFormat="HH:mm"
                                                                                        timeIntervals={15}
                                                                                        timeCaption="time"
                                                                                        dateFormat="MM-dd-yyyy h:mm"
                                                                                    />
                                                                                )}{...register('start_date', { required: true })}
                                                                            />
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <label> End Date:   <span class="text-danger">*</span></label>
                                                                            <Controller
                                                                                control={control}
                                                                                name="end_date"
                                                                                render={({ field }) => (
                                                                                    <DatePicker
                                                                                        isClearable
                                                                                        className={"form-control"}
                                                                                        onChange={(date) => field.onChange(date)}
                                                                                        selected={field.value}
                                                                                        showTimeSelect
                                                                                        timeFormat="HH:mm"
                                                                                        timeIntervals={15}
                                                                                        timeCaption="time"
                                                                                        dateFormat="MM-dd-yyyy h:mm"
                                                                                    />
                                                                                )}
                                                                                {...register('end_date', { required: true })}
                                                                            />
                                                                        </div>

                                                                    </div>

                                                                    <div class="form-group row" hidden>
                                                                        <div class="col-md-12">
                                                                            <label for="title" class="text-black">Event Name  <span class="text-danger">*</span></label>
                                                                            <input type="text" class="form-control" id="title" name="title"{...register('title', { required: true })} />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group row">
                                                                        <div class="col-md-12">
                                                                            <label for="location" class="text-black">Location  <span class="text-danger">*</span></label>
                                                                            <input type="text" class="form-control" id="location" name="location"{...register('location', { required: true })} />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group row">
                                                                        <div class="col-md-12">
                                                                            <label for="userid" class="text-black">Customer  <span class="text-danger">*</span></label>
                                                                            <input type="text" class="form-control" id="userid" name="userid"{...register('userid', { required: true })} />
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group row">
                                                                        <div class="col-md-12">
                                                                            <label for="packageid" class="text-black">Package  <span class="text-danger">*</span></label>
                                                                            <select class='form-control' name="advanceStatus" id='advanceStatus'>
                                                                                <option value={null} >Package</option>
                                                                                <option value="Standard">Standard</option>
                                                                                <option value="Corporate">Corporate</option>
                                                                                <option value="Customized">Customized</option>
                                                                            </select>
                                                                            {/* <input type="text" class="form-control" id="packageid" name="packageid"{...register('packageid', { required: true })} /> */}
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group row">
                                                                        <div class="col-md-12">
                                                                            <label for="maxPeople" class="text-black">No of Attendees  <span class="text-danger">*</span></label>
                                                                            <input type="text" class="form-control" id="maxPeople" name="maxPeople"{...register('maxPeople', { required: true })} />
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mb-3">
                                                                        <div class="col-md-12">
                                                                            <span class="text-black">Service Charge</span>
                                                                        </div>
                                                                        <div class="col-md-12 text-right">
                                                                            <strong class="text-black">%</strong>
                                                                            {/* {price} */}
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mb-5">
                                                                        <div class="col-md-12">
                                                                            <span class="text-black">Total</span>
                                                                        </div>
                                                                        <div class="col-md-12 text-right">
                                                                            <strong class="text-black">Rs.{' '}</strong>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row d-flex justify-content-end">
                                                                        <div class="form-group col-md-4 ">
                                                                            <button class="btn btn-primary btn-sm  btn-block" >Update Event</button>
                                                                        </div>
                                                                        {/* <Link to="/checkout"><button type="button" class="btn btn-primary" data-bs-toggle="button">Checkout</button></Link> */}

                                                                    </div>
                                                                </div>

                                                                <div class="col-md-12 pl-5">
                                                                    <div class="row justify-content-end">
                                                                        <div class="col-md-12">
                                                                            {/* <div class="row">
                                                                                    <div class="col-md-12 text-right border-bottom mb-5">
                                                                                        <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                                                                                    </div>
                                                                                </div> */}



                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row" hidden>
                                                                    <div class="col-md-12">
                                                                        <label for="created_date" class="text-black">Created Date  <span class="text-danger">*</span></label>
                                                                        <Controller
                                                                            control={control}
                                                                            name="created_date"
                                                                            render={({ field }) => (
                                                                                <DatePicker
                                                                                    isClearable
                                                                                    className={"form-control"}
                                                                                    onChange={(date) => field.onChange(date)}
                                                                                    selected={field.value}
                                                                                    showTimeSelect
                                                                                    timeFormat="HH:mm"
                                                                                    timeIntervals={15}
                                                                                    timeCaption="time"
                                                                                    dateFormat="MM-dd-yyyy h:mm"
                                                                                />
                                                                            )}
                                                                            {...register('created_date', { required: true })}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row" hidden>
                                                                    <div class="col-md-12" >
                                                                        <label for="status" class="text-black">Status  <span class="text-danger">*</span></label>
                                                                        <select class='form-control' name="advanceStatus" id='advanceStatus'{...register('status', { required: true })}>
                                                                            <option value={null} >Account Status</option>
                                                                            <option value="Pending">Pending</option>
                                                                            <option value="Approved">Approved</option>
                                                                            <option value="Paied">Paied</option>
                                                                            <option value="Completed">Completed</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <div class="col-md-12" hidden>
                                                                        <label for="serviceCharge" class="text-black">Service Charge  <span class="text-danger">*</span></label>
                                                                        <input type="text" class="form-control" id="serviceCharge" name="serviceCharge"{...register('serviceCharge', { required: true })} />
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    {/* <label for="status" class="h-2 text-black">Service Charge : {' '}5%</label> */}

                                                                    <div class="col-md-12" hidden>
                                                                        <label for="price" class="text-black">Package Price  <span class="text-danger">*</span></label>
                                                                        <input type="text" class="form-control" id="price" name="price"{...register('price', { required: true })} />
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <div class="col-md-12" hidden>
                                                                        <label for="advance" class="text-black">Advance Payment  <span class="text-danger">*</span></label>
                                                                        <input type="text" class="form-control" id="advance" name="advance"{...register('advance', { required: true })} />
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <div class="col-md-12" hidden>
                                                                        <label for="advanceStatus" class="text-black">Advance Status  <span class="text-danger">*</span></label>
                                                                        <select class='form-control' name="advanceStatus" id='advanceStatus'>
                                                                            <option value={null} >Account Status</option>
                                                                            <option value="Pending">Pending</option>
                                                                            <option value="Received">Received</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <div class="col-md-12" hidden>
                                                                        <label for="advanceDate" class="text-black">Advance Payment Date  <span class="text-danger">*</span></label>
                                                                        <Controller
                                                                            control={control}
                                                                            name="advanceDate"
                                                                            render={({ field }) => (
                                                                                <DatePicker
                                                                                    isClearable
                                                                                    className={"form-control"}
                                                                                    onChange={(date) => field.onChange(date)}
                                                                                    selected={field.value}
                                                                                    showTimeSelect
                                                                                    timeFormat="HH:mm"
                                                                                    timeIntervals={15}
                                                                                    timeCaption="time"
                                                                                    dateFormat="MM-dd-yyyy h:mm"
                                                                                />
                                                                            )}
                                                                            {...register('advanceDate', { required: true })}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <div class="col-md-12" hidden>
                                                                        <label for="finalPay" class="text-black">Final Payment  <span class="text-danger">*</span></label>
                                                                        <input type="text" class="form-control" id="finalPay" name="finalPay"{...register('finalPay', { required: true })} />
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <div class="col-md-12" hidden>
                                                                        <label for="finalPayStatus" class="text-black">Final Payment Status  <span class="text-danger">*</span></label>
                                                                        <select class='form-control' name="finalPayStatus" id='finalPayStatus'>
                                                                            <option value={null} >Account Status</option>
                                                                            <option value="Pending">Pending</option>
                                                                            <option value="Received">Received</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <div class="col-md-12" hidden>
                                                                        <label for="finalPayDate" class="text-black">Final Payment Date <span class="text-danger">*</span></label>
                                                                        <Controller
                                                                            control={control}
                                                                            name="finalPayDate"
                                                                            render={({ field }) => (
                                                                                <DatePicker
                                                                                    isClearable
                                                                                    className={"form-control"}
                                                                                    onChange={(date) => field.onChange(date)}
                                                                                    selected={field.value}
                                                                                    showTimeSelect
                                                                                    timeFormat="HH:mm"
                                                                                    timeIntervals={15}
                                                                                    timeCaption="time"
                                                                                    dateFormat="MM-dd-yyyy h:mm"
                                                                                />
                                                                            )}
                                                                            {...register('finalPayDate', { required: true })}
                                                                        />
                                                                    </div>
                                                                </div>



                                                            </div>
                                                            {/* {submitBtn} */}
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