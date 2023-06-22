import React from 'react'
import Navbar from '../components/Navbar'
import HeaderSection from '../components/HeaderSection'
import OfferSection from '../components/OfferSection'
import MidSection from '../components/MidSection'

import "../styles/global.css"



const index = () => {
  return (
    <div className='overflow-scroll'>
      <div className="mx-36 ">
        <Navbar />
        <HeaderSection />
        <OfferSection />
        <MidSection />
      </div>
    </div>
  )
}

export default index