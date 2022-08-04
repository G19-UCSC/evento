import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { FaTachometerAlt, FaUserPlus } from 'react-icons/fa';
import Header from  "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";
import Footer from "../components/dashboard/footer";
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';

export default function account () {

    const [create,setCreate] = useState(false)

    const accounts = [{
        id: "1",
        name: "Nimal",
        email: "nimal@email.com",
        status: "blocked"
    },{
        id: "2",
        name: "Nimal",
        email: "nimal@email.com",
        status: "pending"
    },];

    const columns = [{
        dataField: 'id',
        text: 'Account ID'
    },{
        dataField: 'name',
        text: 'Name'
      }, {
        dataField: 'email',
        text: 'Email'
      }, {
        dataField: 'status',
        text: 'Status'
      },];

    return(
        <>
        <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className='d-flex flex-column'>
            <div id="content">
                <Header/>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Accounts</h1>
                        <button className="btn" onClick={e=>setCreate(true)}>
                            <FaUserPlus/> Create Account
                        </button>
                    </div>
                    <div className='row'>
                        <div className='card shadow mb-4'>
                            <div className='card-body'>
                                <ToolkitProvider
                                keyField="name"
                                data={ accounts }
                                columns={ columns }
                                pagination={ paginationFactory() }
                                >
                                    {
                                        props =>{
                                            <div>
                                                <BootstrapTable keyField='id' data={accounts} columns={columns} />
                                            </div>
                                        }
                                    }
                                </ToolkitProvider>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='card shadow md-4'>
                            <div className='card-body'>
                                <BootstrapTable keyField='id' data={accounts} columns={columns} />
                            </div>
                        </div>
                    </div>
                    <div>
                        {create && (
                            <>
                            <h1>This is the Create Account Section</h1>
                            <form>
                                Name : <input type="text"/> <br/><br/>
                                Email : <input type="text"/> <br/><br/>
                            </form>
                            <button className='btn' onClick={e=>setCreate(false)} >
                                Create
                            </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </div>
        </>
    )
}