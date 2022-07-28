import React from 'react'
import Link from 'next/Link'
import "bootstrap/dist/css/bootstrap.css"


 function initiativeLayout({initiative}) {
  return (
    <div className="card">
      <Link href={`/initiative/${initiative.slug}`}>
        <a>
          <img src={initiative.image} alt={initiative.name} className="rounded shadow" /> 
         </a>
      </Link>
      <div className='card-text'>
        <Link href={`/initiative/${initiative.slug}`}>
          <a><h2 className='text-lg'>{initiative.name}</h2></a>
        </Link>
        
        <p>{initiative.description}</p>
        
      </div>
    </div>
  )
}
export default initiativeLayout