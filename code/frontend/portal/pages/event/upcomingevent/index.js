import React from 'react'
import Navbar from '../../../components/upcomingevent/navbar'


export default function index() {
  return (

    <div>
      <Navbar />
      <main>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Devops Workshop</h4>
            <p className="card-text">Date: 16/07/2022</p>

          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Java Workshop</h4>
            <p className="card-text">Date: 21/07/2022</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">PHP Workshop</h4>
            <p className="card-text">Date: 19/07/2022</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Java Workshop-2</h4>
            <p className="card-text">Date: 30/07/2022</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Devops Workshop-2</h4>
            <p className="card-text">Date: 12/07/2022</p>
          </div>
        </div>
      </main>

    </div>

  )
}
