// import React, { useState,useEffect } from 'react'
// import Link from 'next/link';
// // Styles
// import "bootstrap/dist/css/bootstrap.css";
// import "react-datepicker/dist/react-datepicker.css";
// import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// // Components
// import Header from  "../components/dashboard/header";
// import Sidebar from "../components/dashboard/sidebar";
// import Footer from "../components/dashboard/footer";
// // Table
// import BootstrapTable from 'react-bootstrap-table-next';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// // Form
// import { Controller,useForm } from "react-hook-form";
// import DatePicker from "react-datepicker";
// // API
// import axios from '../utils/axios'


// const event = () => {

//     const [events, setEvents] = useState([])
//     const [update, setUpdate] = useState('')
//     const { register, handleSubmit, watch, control,reset, setValue, formState: { errors } } = useForm();
  

//     const findElementById = (arr, id) => arr.filter(element => element._id == id);
//     const removeElementById = (arr, id) => arr.filter(element => element._id !== id);

//     const setForm = (_id) => {
//         const event = findElementById(events, _id)[0];
//         setValue("title", event.title);
//         setValue("location", event.location);
//         setValue("category", event.category);
//         setValue("date", Date.parse(event.date));
//         setUpdate(_id)
//     }

//     let submitButton;

//     if(update){
//         submitButton = <button type="submit" className="w-50 btn btn-primary btn-lg">Update</button>
//     }else{
//         submitButton = <button type="submit" className="w-50 btn btn-success btn-lg">Create</button>
//     }

//     const cancel = () => {
//         if(update){
//             setUpdate(false)

//         }
//         reset({
//             title:'',
//             location:'',
//             category:'',
//             date:''
//           })
//     }

//     const onSubmit = (formData) => {

//         if (update != ''){
//             axios.put(`/event/${update}`, formData).then((res)=>{
//                 const newEvent = res.data.event.res[1]
//                 setEvents([newEvent].concat(removeElementById(events,newEvent._id)))
//             }).catch((error) => {
//                 console.log(error)
//             })
//         } else{
//             axios.post("/event",formData).then((res)=>{
//                 // toast.success("Post created successfully!")
//                 // navigate(`/topic/${res.data._id}`)
//                 const newEvent = res.data.event.res
//                 setEvents([newEvent].concat(events))
//             }).catch((error) => {
//                 console.log(error)
//               })
//         }
//         reset({
//             title:'',
//             location:'',
//             category:'',
//             date:''
//           })
//     }

//     const deleteEvent = (_id)=>{
//         axios.delete(`/event/${_id}`).then((res)=>{
//             setEvents(removeElementById(events,_id))    
//         }).catch((error) => {
//           console.log(error.response.data)
//         })}

//     const { SearchBar } = Search;

//     const columns = [{
//         dataField: 'title',
//         text: 'Title'
//       }, {
//         dataField: 'location',
//         text: 'Location'
//       }, {
//         dataField: 'category',
//         text: 'Category'
//       },{
//           dataField: 'date',
//           text: 'Date',
//           formatter: (cellContent, row) => {
//             return <>
//             {row.date}
//             </>
//     },
//         },           {
//             dataField: "_id",
//             text: "Actions",
//             formatter: (cellContent, row) => {
//                     return <>
//                     &nbsp;
//                     <a style={{color:'blue', cursor:'pointer'}} onClick={(e) => setForm(row._id)}><FaEdit /></a>
//                     &nbsp; &nbsp;
//                     <a style={{color:'red', cursor:'pointer'}} onClick={(e) => deleteEvent(row._id)}><FaTrash /></a>
//                     </>
//             },
//         },];
 
//     useEffect(() => {
//         axios.get("/event").then((res)=>{
//         setEvents(res.data.events.reverse())
//     }).catch((error) => {
//         console.log(error.response.data)
//     })}, [])


//    return(
//    <>
//     <div id="wrapper">

//         {/* Sidebar */}
//         <Sidebar linkId="event"/>
//         {/* End of Sidebar */}

//         {/* Content Wrapper */}
//         <div id="content-wrapper" className="d-flex flex-column">

//             {/* Main Content */}
//             <div id="content">

//                 {/* Topbar */}
//                 <Header />
//                 {/* End of Topbar */}

//                 {/* Begin Page Content */}
//                 <div className="container-fluid">

//                     {/* Page Heading */}
//                     <div className="d-sm-flex align-items-center justify-content-between mb-4">
//                         <h1 className="h3 mb-0 text-gray-800">Events</h1>
//                         <Link href="event/create"><a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
//                                 className="fas fa-download fa-sm text-white-50"></i> Create Event</a></Link>
//                     </div>

//                     {/* Content Row */}
//                     <div className="row">

//                         {/* Total Card Example */}
//                         <div className="col-xl-3 col-md-6 mb-4">
//                             <div className="card border-left-primary shadow h-100 py-2">
//                                 <div className="card-body">
//                                     <div className="row no-gutters align-items-center">
//                                         <div className="col mr-2">
//                                             <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
//                                                 Total</div>
//                                             <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
//                                         </div>
//                                         <div className="col-auto">
//                                             <i className="fas fa-calendar fa-2x text-gray-300"></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Upcomming Card Example */}
//                         <div className="col-xl-3 col-md-6 mb-4">
//                             <div className="card border-left-success shadow h-100 py-2">
//                                 <div className="card-body">
//                                     <div className="row no-gutters align-items-center">
//                                         <div className="col mr-2">
//                                             <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
//                                                 Upcomming</div>
//                                             <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
//                                         </div>
//                                         <div className="col-auto">
//                                             <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Earnings (Monthly) Card Example */}
//                         <div className="col-xl-3 col-md-6 mb-4">
//                             <div className="card border-left-info shadow h-100 py-2">
//                                 <div className="card-body">
//                                     <div className="row no-gutters align-items-center">
//                                         <div className="col mr-2">
//                                             <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
//                                             </div>
//                                             <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
//                                         </div>
//                                         <div className="col-auto">
//                                             <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Pending Card Example */}
//                         <div className="col-xl-3 col-md-6 mb-4">
//                             <div className="card border-left-warning shadow h-100 py-2">
//                                 <div className="card-body">
//                                     <div className="row no-gutters align-items-center">
//                                         <div className="col mr-2">
//                                             <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
//                                                 Pending</div>
//                                             <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
//                                         </div>
//                                         <div className="col-auto">
//                                             <i className="fas fa-comments fa-2x text-gray-300"></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Content Row */}
//                     <div className="row">

//                         {/* Content Column */}
//                         <div className="col-lg-6 mb-4">

//                             {/* Events*/}
//                             <div className="card shadow mb-4">
//                                     <div className="card-header py-3">
//                                         <h6 className="m-0 font-weight-bold text-primary">Create Event</h6>
//                                     </div>
//                                     <div className="card-body">
//                                     <form onSubmit={handleSubmit(onSubmit)}>
//                                     <div className="form-group">
//                                     <label for="title">Title:</label>
//                                         <input 
//                                         className="form-control" 
//                                         rows="3"
//                                         type="text" 
//                                         id="title"
//                                         name="title"
//                                         {...register("title", { required: true })}
//                                         />
//                                         <br />
//                                         <label for="location">Location:</label>
//                                         <input 
//                                         className="form-control" 
//                                         rows="3"
//                                         type="text" 
//                                         id="location"
//                                         name="location"
//                                         {...register("location", { required: true })}
//                                         />
//                                         <br />
//                                         <label> Category:  </label>
//                                         <select className="form-control" {...register("category", { required: true })}>
//                                             <option value="Workshop">Workshop</option>
//                                             <option value="Meetup">Meetup</option>
//                                             <option value="YGC Senior">YGC Senior</option>
//                                             <option value="YGC Junior">YGC Junior</option>
//                                         </select>

//                                         <br />
//                                         <label> Date:  </label>
//                                         <Controller
//                                             control={control}
//                                             name="date"
//                                             render={({ field }) => (
//                                         <DatePicker
//                                         isClearable
//                                         className={"form-control"}
//                                                 onChange={(date) => field.onChange(date)}
//                                                 selected={field.value}
//                                         showTimeSelect
//                                         timeFormat="HH:mm"
//                                         timeIntervals={15}
//                                         timeCaption="time"
//                                         dateFormat="MM-dd-yyyy h:mm"
//                                         />
//                                             )}
//                                         />

//                                         <br />
//                                         <br />
//                                         <br />

//                                         <div className='d-flex justify-content-between'>
                                        
//                                         {submitButton}
                                                
                                        
//                                         <button onClick={cancel} className="w-50 btn btn-secondary btn-lg">
//                                         Cancel
//                                         </button>
//                                         </div>

//                                     </div>
//                                     </form>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="col-lg-6 mb-4">

//                             {/* Past Events */}
//                             <div className="card shadow mb-4">
//                                 <div className="card-header py-3">
//                                     <h6 className="m-0 font-weight-bold text-primary">Events</h6>
//                                 </div>
//                                 <div className="card-body">
//                                 <ToolkitProvider
//                                 keyField="id"
//                                 data={events}
//                                 columns={ columns }
//                                 pagination={ paginationFactory() }
//                                 >
//                                 {
//                                     props =>(
//                                         <div>
//                                         <SearchBar { ...props.searchProps } />
//                                         <hr />
                                
//                                         <BootstrapTable { ...props.baseProps } />
//                                         </div>
//                                     )
//                                 }
//                                 </ToolkitProvider>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>

//                 </div>
//                 {/* /.container-fluid */}

//             </div>
//             {/* End of Main Content */}

//             {/* Footer */}
//             <Footer />
//             {/* End of Footer */}

//         </div>
//         {/* End of Content Wrapper */}

//     </div>
//     {/* End of Page Wrapper */}

//     {/* Scroll to Top Button*/}
//     <a className="scroll-to-top rounded" href="#page-top">
//         <i className="fas fa-angle-up"></i>
//     </a>

//     {/* Logout Modal*/}
//     <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
//         aria-hidden="true">
//         <div className="modal-dialog" role="document">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
//                     <button className="close" type="button" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">×</span>
//                     </button>
//                 </div>
//                 <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
//                 <div className="modal-footer">
//                     <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
//                     <a className="btn btn-primary" href="login.html">Logout</a>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>)}

//     export default event;
