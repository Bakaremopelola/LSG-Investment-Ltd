import React from 'react'
import ex from "../assets/Frame142.png"
import OurServices from "../components/homepage/Services"
import HowItWorks from '../components/services/How'
import WhyChooseUs from '../components/services/WhyChoose'
import Testimonials from '../components/homepage/Testimoinal'

const OurService = () => {
    return (
          <div className="min-h-screen bg-gray-100 flex flex-col">
              {/* Hero Section */}
              <div className="w-full bg-white text-center ">
               <img src={ex} alt="" />
              </div>
              <div className="min-h-screen bg-gray-100 flex flex-col">
      
            <OurServices />
            <HowItWorks/>
            <WhyChooseUs/>
            <Testimonials/>
            </div>
        </div>
    )
}

export default OurService