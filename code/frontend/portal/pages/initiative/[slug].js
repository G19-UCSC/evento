// import React from 'react'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
// import initiativeLayout from '../../components/initiativeComponent/initiativeLayout'
// import initiativeData from '../../utils/initiativeData'


// export default function InitiativeScreen() {
//     const { query } = useRouter()
//      const { slug } = query
//     const initiative = initiativeData.initiatives.find((x) => x.slug === slug)
//     // if (!initiative) {
//     //     return <div> initiative  not found</div>
//     // }
//   return ( 
//     <div className='card p-5'>
//     <div className='grid md:grid-cols-4 md:gap-3'>
//             <div className='md:col-span-2'>
//                 <Image
//                     src={initiative.image}
//                     alt={initiative.name}
//                     width={640}
//                     height={640}
//                     layout='responsive'>
//                 </Image>
//             </div>
//             <div>
//                 <ul>
//                     <li>
//                         <h1 className='text-lg'>{initiative.name}</h1>
//                     </li>
                    
//                     <li>Description: {initiative.description}</li>
//                 </ul>
//             </div>
            
//         </div>
//         </div>
    
//   )
// }

import React from 'react'

export default function initiative() {
  return (
    <div className="card">
    <div className="card-body">
       <h2 className="card-title">YGC</h2>
          <p className="card-text">The Yarl Geek Challenge is a premier technology competition open to all youth. The intent of the competition is to nurture IT skills, innovation and creativity, fostering a spirit of entrepreneurship among the entrants.The best and the brightest young minds will be invited to join hands to utilize technology, taking on some of the world’s toughest problems. While competing with their peers, participants will have the opportunity to work alongside industrial practitioners, gain valuable industrial experience, make new friends, expose their abilities to the global IT industry and transform their ideas into reality..</p>
     </div>
     </div>
  )
}

