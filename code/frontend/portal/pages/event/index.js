
import Footer from "../../components/home/footer"
import Header from "../../components/home/header"


import { CartContext } from '../../context/productContext';
import React, { useContext, useState, useEffect } from "react";
import { Controller, useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from '../../utils/axios'
export default function Checkout() {
    const [cart, price] = useContext(CartContext);
    const [user, setUser] = useState([])
    const [ruser, setRuser] = useState([])
    const [id, setId] = useState('87adfe52-d2b8-42cd-91ff-6c764e97e717')



    const {
        register,
        handleSubmit,
        setValue,
        control,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

    }
    useEffect(() => {
        axios.get(`/user/${id}`).then((res) => {
            setUser(res.data.user)
            // console.log(res.data.user.firstname)
            setValue("firstname", res.data.user.firstname);
            setValue("lastname", res.data.user.lastname);
            setValue("email", res.data.user.email);
        }).catch((error) => {
            console.log(error)
        })
        axios.get(`/ruser/${id}`).then((res) => {
            setRuser(res.data.user)
            console.log(res.data.user.address)
            setValue("address", res.data.user.address);
            setValue("contact", res.data.user.contact);

        }).catch((error) => {
            console.log(error)
        })
    }
        , [])


    return (
        <div class="site-wrap">
            <Header />

            <div class="bg-light py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Contact</strong></div>
                    </div>
                </div>
            </div>

            <div class="site-section">
                <div class="container">
                    {/* <div class="row mb-5">
                        <div class="col-md-12">
                            <div class="border p-4 rounded" role="alert">
                                Returning customer? <a href="#">Click here</a> to login
                            </div>
                        </div>
                    </div> */}
                    <div class="row">
                        <div class="col-md-6 mb-5 mb-md-0">

                            <h2 class="h3 mb-3 text-black">Create Event</h2>
                            <form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>

                                <div class="p-3 p-lg-5 border">

                                    <div class="form-group row">

                                        <div class="col-md-6">
                                            <label> Start Date:  </label>
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
                                                )}
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label> End Date:  </label>
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
                                            />
                                        </div>

                                    </div>

                                    {/* <div class="form-group row">
                <div class="col-md-12">
                  <label for="c_companyname" class="text-black">Company Name </label>
                  <input type="text" class="form-control" id="c_companyname" name="c_companyname" />
                </div>
              </div> */}

                                    <div class="form-group row">
                                        {/* <div class="col-md-12">
                                            <label for="c_address" class="text-black">Address <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" placeholder="Street address" id="address" name="address"{...register('address', { required: true })} />
                                        </div> */}
                                        <div class="col-md-12">
                                            <label for="v_email_address" class="text-black">Email Address <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="email" name="email"{...register('email', { required: true })} />
                                        </div>
                                    </div>

                                    {/* {ruser.map((items,i) => ( */}
                                    <div class="form-group row mb-5" >
                                        {/* <div class="col-md-6">
                                            <label for="c_email_address" class="text-black">Email Address <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="email" name="email"{...register('email', { required: true })} />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="c_phone" class="text-black">Phone <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" placeholder="Phone Number" id="contact" name="contact"{...register('contact', { required: true })} />
                                        </div> */}
                                        <div class="col-md-12">
                                            <label for="v_message" class="text-black">Message <span class="text-danger">*</span></label>
                                            <textarea class="form-control" id="message" placeholder="Write yout message here..." name="message"{...register('message', { required: true })} />
                                        </div>
                                    </div>
                                    {/* ))} */}
                                    {/* <div class="form-group">
                                        <label for="c_create_account" class="text-black" data-toggle="collapse" href="#create_an_account" role="button" aria-expanded="false" aria-controls="create_an_account"><input type="checkbox" value="1" id="c_create_account" /> Create an account?</label>
                                        <div class="collapse" id="create_an_account">
                                            <div class="py-2">
                                                <p class="mb-3">Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                                <div class="form-group">
                                                    <label for="c_account_password" class="text-black">Account Password</label>
                                                    <input type="email" class="form-control" id="c_account_password" name="c_account_password" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}


                                    {/* <div class="form-group">
                                        <label for="c_ship_different_address" class="text-black" data-toggle="collapse" href="#ship_different_address" role="button" aria-expanded="false" aria-controls="ship_different_address"><input type="checkbox" value="1" id="c_ship_different_address" /> Ship To A Different Address?</label>
                                        <div class="collapse" id="ship_different_address">
                                            <div class="py-2">

                                                <div class="form-group">
                                                    <label for="c_diff_country" class="text-black">Country <span class="text-danger">*</span></label>
                                                    <select id="c_diff_country" class="form-control">
                                                        <option value="1">Select a country</option>
                                                        <option value="2">bangladesh</option>
                                                        <option value="3">Algeria</option>
                                                        <option value="4">Afghanistan</option>
                                                        <option value="5">Ghana</option>
                                                        <option value="6">Albania</option>
                                                        <option value="7">Bahrain</option>
                                                        <option value="8">Colombia</option>
                                                        <option value="9">Dominican Republic</option>
                                                    </select>
                                                </div>


                                                <div class="form-group row">
                                                    <div class="col-md-6">
                                                        <label for="c_diff_fname" class="text-black">First Name <span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" id="c_diff_fname" name="c_diff_fname" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="c_diff_lname" class="text-black">Last Name <span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" id="c_diff_lname" name="c_diff_lname" />
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <div class="col-md-12">
                                                        <label for="c_diff_companyname" class="text-black">Company Name </label>
                                                        <input type="text" class="form-control" id="c_diff_companyname" name="c_diff_companyname" />
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <div class="col-md-12">
                                                        <label for="c_diff_address" class="text-black">Address <span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" id="c_diff_address" name="c_diff_address" placeholder="Street address" />
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                                                </div>

                                                <div class="form-group row">
                                                    <div class="col-md-6">
                                                        <label for="c_diff_state_country" class="text-black">State / Country <span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" id="c_diff_state_country" name="c_diff_state_country" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="c_diff_postal_zip" class="text-black">Posta / Zip <span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" id="c_diff_postal_zip" name="c_diff_postal_zip" />
                                                    </div>
                                                </div>

                                                <div class="form-group row mb-5">
                                                    <div class="col-md-6">
                                                        <label for="c_diff_email_address" class="text-black">Email Address <span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" id="c_diff_email_address" name="c_diff_email_address" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="c_diff_phone" class="text-black">Phone <span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" id="c_diff_phone" name="c_diff_phone" placeholder="Phone Number" />
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div> */}

                                    {/* <div class="form-group">
                                        <label for="c_order_notes" class="text-black">Order Notes</label>
                                        <textarea name="c_order_notes" id="c_order_notes" cols="30" rows="5" class="form-control" placeholder="Write your notes here..."></textarea>
                                    </div> */}

                                    <div class="form-group">
                                        <button class="btn btn-primary btn-md py-2 btn-block" >Send</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div class="col-md-6">

                            {/* <div class="row mb-5">
                                <div class="col-md-12">
                                    <h2 class="h3 mb-3 text-black">Coupon Code</h2>
                                    <div class="p-3 p-lg-5 border">

                                        <label for="c_code" class="text-black mb-3">Enter your coupon code if you have one</label>
                                        <div class="input-group w-75">
                                            <input type="text" class="form-control" id="c_code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" />
                                            <div class="input-group-append">
                                                <button class="btn btn-primary btn-sm" type="button" id="button-addon2">Apply</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div> */}

                            {/* <div class="row mb-5">
                                <div class="col-md-12">
                                    <h2 class="h3 mb-3 text-black">Contact Details</h2>
                                    <div class="p-3 p-lg-5 border"> */}
                            {/* <table class="table site-block-order-table mb-5">
                                            <thead>
                                                <th>Product</th>
                                                <th>Total</th>
                                            </thead>
                                            <tbody>
                                                {cart.map((item, i) => (
                                                    <tr key={i}>
                                                        <td>{item.name}<strong class="mx-2">x</strong>{item.amount}</td>
                                                        <td>{item.price * item.amount}</td>
                                                    </tr>
                                                ))}

                                                <tr>
                                                    <td class="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                                                    <td class="text-black">{price}</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-black font-weight-bold"><strong>Order Total</strong></td>
                                                    <td class="text-black font-weight-bold"><strong>{price}</strong></td>
                                                </tr>
                                            </tbody>
                                        </table> */}

                            {/* <div class="border p-3 mb-3">
                                            <h3 class="h6 mb-0"><div class="d-block" data-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank"><strong>Contact No:</strong>{' '}+94 11 546 3215</div></h3>

                                            <div class="collapse" id="collapsebank">
                                                <div class="py-2">
                                                    <p class="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border p-3 mb-3">
                                            <h3 class="h6 mb-0"><div class="d-block" data-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank"><strong>Email:</strong>{' '}eventopvtltd@slt.lk</div></h3>

                                            <div class="collapse" id="collapsebank">
                                                <div class="py-2">
                                                    <p class="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border p-3 mb-5">
                                            <h3 class="h6 mb-0"><div class="d-block" data-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank"><strong>Address:</strong>{' '}No.27,abcd Road, xyz city, Sri Lanka</div></h3>

                                            <div class="collapse" id="collapsebank">
                                                <div class="py-2">
                                                    <p class="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>

    )
}
