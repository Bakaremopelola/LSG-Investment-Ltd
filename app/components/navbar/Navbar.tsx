"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from "../../../assets/logowhite.png";
import Button from "../Button";
import { BsX } from "react-icons/bs";
import Image from "next/image";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <nav className="bg-[#1D2150] h-[10vh] w-full z-50 flex fixed top-0 justify-between items-center px-8 mx-auto">
      {/* Logo */}
      <div>
        <Image src={logo} alt="Logo" className="w-[20vw] lg:w-[9vw]"/>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-white text-[1.2em]">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/our_services">Services</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/faq">FAQs</Link>
      </div>

      {/* Call to Action Button for Desktop */}
      <div className="hidden md:block mr-8">
        <Button
          width="w-full"
          padding="px-6 py-3"
          backgroundColor="bg-white"
          textColor="text-black"
          borderRadius="rounded-lg"
          hoverEffect="hover:bg-purple-600"
          onClick={handleClick}
        >
          Schedule a call
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="text-white"
        >
          {isMobileMenuOpen ? <BsX size={30} /> : <CgMenu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[10vh] left-0 w-full h-[90vh] bg-[#1D2150] flex flex-col items-center py-6 gap-4 text-white text-lg shadow-lg md:hidden z-40">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/our_services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQs</Link>

          <Button
            width="w-auto"
            padding="px-6 py-3"
            backgroundColor="bg-white"
            textColor="text-black"
            borderRadius="rounded-lg"
            hoverEffect="hover:bg-purple-600"
            onClick={() => {
              handleClick();
              setIsMobileMenuOpen(false);
            }}
          >
            Schedule a call
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;