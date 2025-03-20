import React from 'react'
import logo from "../../assets/logowhite.png"
import { Link } from 'react-router-dom'
import Button from '../Button'

const Navbar = () => {
    return (
        <div className='flex bg-[#1D2150] h-[10vh] w-[100vw] top-0 justify-evenly items-center sticky z-10'>
            <div className=''>
                <img src={logo} alt="" className='h-[9vh]' />
            </div>
            <div className='flex gap-8 text-white text-[1.2em]'>
            <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/our_services">Services</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/faq">FAQs</Link>
            </div>
            <div>
                <Button
                    width="w-full"
                    padding="px-6 py-3"
                    backgroundColor="bg-white"
                    textColor="text-black"
                    borderRadius="rounded-lg"
                    hoverEffect="hover:bg-purple-600"
                    onClick={() => alert('Full Width Button Clicked!')}
                >
                    Schedule a call
                </Button>
            </div>
        </div>
    )
}

export default Navbar