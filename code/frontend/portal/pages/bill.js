// import { CartContext } from '../context/productContext';
// import React, { useContext, useState, useEffect } from "react";
// import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";
// import axios from '../utils/axios'
// export default function Bill(props) {
//   const [cart, price] = useContext(CartContext);
//   const [name, setName] = useState('')
//   const [address, setAddress] = useState('')
//   const [userdetails, setUserDetails] = useState([])
//   const [invoicenumber, setInvoicenumber] = useState(0)
//   console.log(props)
//   useEffect(() => {
//     axios.get(`/user/${props.userid}`).then((res) => {
//       setName(res.data.user.firstname)
//       setUserDetails(res.data.user)

//     }).catch((error) => {
//       console.log(error)
//     })

//     axios.get(`/ruser/${props.userid}`).then((res) => {
//       setAddress(res.data.user.address)

//     }).catch((error) => {
//       console.log(error)
//     })

//     axios.get('/payment').then((res) => {
//       let payments = res.data.payments
//       setInvoicenumber(payments.length)

//     }).catch((error) => {
//       console.log(error)
//     })
//   }, [])

//   //Invoice Generation
//   var props1 = {
//     outputType: OutputType.Save,
//     returnJsPDFDocObject: true,
//     fileName: "Invoice",
//     orientationLandscape: false,
//     compress: true,
//     logo: {
//       src: "/images/evento-logo.jpeg",
//       type: 'JPEG',
//       width: 20.33,
//       height: 26.66,
//       margin: {
//         top: 0,
//         left: 0
//       }
//     },
//     business: {
//       name: "Evento",
//       address: "No.35, Reid Avenue, Colombo 7, Sri Lanka",
//       phone: "(+94) 11 000 0000",
//       email: "evento@mail.com",
//       website: "www.evento.lk",
//     },
//     contact: {
//       label: "Invoice issued for:",
//       name: [userdetails.firstname] + ' ' + [userdetails.lastname],
//       address: [userdetails.email],
//     },
//     invoice: {
//       label: "Invoice #: ",
//       num: invoicenumber + 1,
//       invDate: "Payment Date:" + Date().split('GMT')[0],
//       invGenDate: "Invoice Date: " + Date().split('GMT')[0],
//       headerBorder: false,
//       tableBodyBorder: false,
//       header: [
//         {
//           title: "#",
//           style: {
//             width: 10
//           }
//         },
//         {
//           title: "Description",
//           style: {
//             width: 80
//           }
//         },
//         { title: "Quantity" },
//         { title: "Unit price" },
//         { title: "Amount" }
//       ],
//       table: Array.from(cart, (item, index) => ([
//         index + 1,
//         [item.name],
//         [item.amount],
//         [item.price],
//         [item.amount * item.price]
//       ])),
//       additionalRows: [{
//         col1: 'Total:',
//         col2: [price].toString(),
//         col3: 'ALL',
//         style: {
//           fontSize: 14
//         }
//       },
//       {
//         col1: 'SubTotal:',
//         col2: [price].toString(),
//         col3: 'ALL',
//         style: {
//           fontSize: 10
//         }
//       }],
//       invDescLabel: "Invoice Note",
//       invDesc: "Thank you for shopping with us. Have a nice day.",
//     },
//     footer: {
//       text: "The invoice is created on a computer and is valid without the signature and stamp.",
//     },
//     pageEnable: true,
//     pageLabel: "Page ",
//   };

//   function createInvoice(e) { var pdfCreated = jsPDFInvoiceTemplate(props1); }

//   return (
//     <div class="card">
//       <div class="card-body">
//         <div class="container mb-5 mt-3">
//           <div class="row d-flex align-items-baseline">
//             <div class="col-xl-9">
//               <p style={{ color: '#7e8d9f', 'font-size': '20px' }}>Invoice <strong>ID: #123-123</strong></p>
//             </div>
//             <div class="col-xl-3 float-end" onClick={e => createInvoice(e)}>
//               <a class="btn btn-light text-capitalize border-0" data-mdb-ripple-color="dark"><i
//                 class="fas fa-print text-primary"></i> Print</a>
//               <a class="btn btn-light text-capitalize" data-mdb-ripple-color="dark"><i
//                 class="far fa-file-pdf text-danger"></i> Export</a>
//             </div>

//           </div>

//           <div class="container">
//             <div class="col-md-12">
//               <div class="text-center">
//                 <i class="fab fa-mdb fa-4x ms-0" style={{ color: "#5d9fc5 " }}></i>
//                 <p class="pt-0">Evento</p>
//               </div>

//             </div>


//             <div class="row">
//               <div class="col-xl-8">
//                 <ul class="list-unstyled">
//                   <li class="text-muted">To: <span style={{ color: "#5d9fc5" }}>{name}</span></li>
//                   <li class="text-muted">{address}</li>
//                   {/* <li class="text-muted">State, Country</li> */}
//                   <li class="text-muted"><i class="fas fa-phone"></i> 123-456-789</li>
//                 </ul>
//               </div>
//               <div class="col-xl-4">
//                 <p class="text-muted">Invoice</p>
//                 <ul class="list-unstyled">
//                   <li class="text-muted"><i class="fas fa-circle" style={{ color: "#84B0CA" }}></i> <span
//                     class="fw-bold">ID:</span>#123-456</li>
//                   <li class="text-muted"><i class="fas fa-circle" style={{ color: "#84B0CA" }}></i> <span
//                     class="fw-bold">Creation Date: </span>Jun 23,2021</li>
//                   <li class="text-muted"><i class="fas fa-circle" style={{ color: "#84B0CA" }}></i> <span
//                     class="me-1 fw-bold">Status:</span><span class="badge bg-warning text-black fw-bold">
//                       Unpaid</span></li>
//                 </ul>
//               </div>
//             </div>

//             <div class="row my-2 mx-1 justify-content-center">
//               <table class="table table-striped table-borderless">
//                 <thead style={{ "background-color": "#84B0CA" }} class="text-white">
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Description</th>
//                     <th scope="col">Qty</th>
//                     <th scope="col">Unit Price</th>
//                     <th scope="col">Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map((item, i) => (
//                     <tr>
//                       <th scope="row">1</th>
//                       <td>{item.name}</td>
//                       <td>{item.amount}</td>
//                       <td>{item.price}</td>
//                       <td>{item.price * item.amount}</td>
//                     </tr>
//                   ))}
//                 </tbody>

//               </table>
//             </div>
//             <div class="row">
//               <div class="col-xl-8">
//                 <p class="ms-3">Add additional notes and payment information</p>

//               </div>
//               <div class="col-xl-3">
//                 <ul class="list-unstyled">
//                   <li class="text-muted ms-3"><span class="text-black me-4">SubTotal</span>{price}</li>
//                   {/* <li class="text-muted ms-3 mt-2"><span class="text-black me-4">Tax(15%)</span>$111</li> */}
//                 </ul>
//                 <p class="text-black float-start"><span class="text-black me-3"> Total Amount</span><span
//                   style={{ "font-size": "25px" }}>{price}</span></p>
//               </div>
//             </div>

//             <div class="row">
//               <div class="col-xl-10">
//                 <p>Thank you for your purchase</p>
//               </div>
//               <div class="col-xl-2">
//                 <button type="button" class="btn btn-primary text-capitalize"
//                   style={{ "background-color": '#60bdf3' }}>Pay Now</button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }