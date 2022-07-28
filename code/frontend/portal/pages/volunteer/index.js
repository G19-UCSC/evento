import React from 'react'
import Header from '../../components/volunteer/header'
import Footer from '../../components/volunteer/footer'

export default function index() {
  return (
    <div>
      <Header/>
      <main>
      <div className="card">
         <div className="card-body">
            <h4 className="card-title">Vimal Perera</h4>
               <p className="card-text">Profession: Teacher</p>
               <p className="card-text">Country: SriLanka</p>
          </div>
          </div>
          <div className="card">
         <div className="card-body">
            <h4 className="card-title">Kumar Suthakar</h4>
               <p className="card-text">Profession: Lecturer</p>
               <p className="card-text">Country: SriLanka</p>
          </div>
          </div>
          <div className="card">
         <div className="card-body">
            <h4 className="card-title">Thulasika Mathan</h4>
               <p className="card-text">Profession: Teacher</p>
               <p className="card-text">Country: SriLanka</p>
          </div>
          </div>
          <div className="card">
         <div className="card-body">
            <h4 className="card-title">Vithishi Kuganesh</h4>
               <p className="card-text">Profession: Software Engineer</p>
               <p className="card-text">Country: SriLanka</p>
          </div>
          </div>
          <div className="card">
         <div className="card-body">
            <h4 className="card-title">Makilan Siva</h4>
               <p className="card-text">Profession: Teacher</p>
               <p className="card-text">Country: SriLanka</p>
          </div>
          </div>
          <div className="card">
         <div className="card-body">
            <h4 className="card-title">Shamila Vijitharan</h4>
               <p className="card-text">Profession: Software Engineer</p>
               <p className="card-text">Country: SriLanka</p>
          </div>
          </div>
      </main>
      <Footer/>
    </div>

  )
}
