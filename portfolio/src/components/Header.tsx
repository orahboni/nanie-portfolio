'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
     const [isScrolled, setIsScrolled] = useState(false);
     const [isHidden, setIsHidden] = useState(true);

     const showMobileMenu = () => {
        setIsHidden(false);
     }

     const hideMobileMenu = () => {
        setIsHidden(true);
     }

     {/* Header Scroll Effect */}

     useEffect(() => {
       const handleScroll = () => {
       setIsScrolled(window.scrollY > 10);
     };
       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);

  }, []);

    return (
        <div className={`w-full bg-[#E0AAFF] sticky top-5 z-50 shadow-md ${!isHidden ? "rounded-xl sm:rounded-full" : "rounded-full sm:rounded-full"} transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-[#E0AAFF]/30 shadow-sm' : 'bg-transparent'}`}>
            <div className="w-full flex items-center justify-center">
                <Link href="/" className="w-[30%] h-full flex gap-1 p-4">
                    <h1 className="text-2xl text-gray-200 font-bold">Rosemar<span className="text-[#B50094]">y</span></h1>
                </Link>
                <div className="w-[70%]">
                    <div className="gap-4 items-end justify-end py-4 px-6 flex sm:hidden">
                        <button className={`${!isHidden ? "hidden" : ""}`} onClick={showMobileMenu} >
                            <HiOutlineMenuAlt2 className="size-6 text-[#EEEEEE] hover:text-[#B50094]"/>
                        </button>
                        <button className={`${isHidden ? "hidden" : ""}`} onClick={hideMobileMenu} >
                            <IoMdClose className="size-6 text-[#EEEEEE] hover:text-[#B50094]"/>
                        </button>
                    </div>
                    <div className="gap-4 items-end justify-end p-4 hidden sm:flex">
                        <Link href="/" className="text-lg font-semibold text-[#EEEEEE] hover:text-[#B50094] hover:border-2 hover:border-[#B50094] my-auto px-3 py-1 rounded-full">Home</Link>
                        <Link href="/#contact" className="text-lg font-semibold text-[#EEEEEE] hover:text-[#B50094] hover:border-2 hover:border-[#B50094] px-3 py-1 rounded-full">Contact</Link>
                    </div>
                </div>
            </div>

            <div className={` ${isHidden ? "hidden" : "" }`}>

                <hr className="mx-10 text-[#EEEEEE] flex sm:hidden" />

            <div className="flex sm:hidden w-full px-10 items-start justify-start">
                <div className="items-end justify-end py-4">
                        <Link href="/" className="flex text-lg font-semibold text-[#EEEEEE] hover:text-[#B50094] my-auto" onClick={hideMobileMenu}>Home</Link>
                        <Link href="/#about" className="flex text-lg font-semibold text-[#EEEEEE] hover:text-[#B50094] my-auto" onClick={hideMobileMenu}>About Me</Link>
                        <Link href="/#contact" className="flex text-lg font-semibold text-[#EEEEEE] hover:text-[#B50094] my-auto" onClick={hideMobileMenu}>Contact</Link>
                    </div>
            </div>

            <hr className="mx-10 text-[#EEEEEE] flex sm:hidden" />

            <div className="flex sm:hidden w-full px-10 items-start justify-start">
                <div className="items-end justify-end py-4">
                        <div className="flex gap-2">
                                            <a href="https://x.com/Euphemia_Amakor"
                                               target="_blank" 
                                               rel="noopener noreferrer"
                                               onClick={hideMobileMenu}
                                               className="bg-gray-700/20 m-auto text-[#EEEEEE] hover:text-[#B50094] cursor-pointer transition-colors duration-300 ease-in-out p-3 rounded-full">
                                                <FaXTwitter className="size-5 m-auto "/>
                                            </a>
                                            <a href="https://www.linkedin.com/in/euphemia-amakor/"
                                               target="_blank" 
                                               rel="noopener noreferrer"
                                               onClick={hideMobileMenu}
                                               className="bg-gray-700/20 m-auto text-[#EEEEEE] hover:text-[#B50094] cursor-pointer transition-colors duration-300 ease-in-out p-3 rounded-full">
                                                <FaLinkedin className="size-5 m-auto "/>
                                            </a>
                                            <a href="https://github.com/euphemyaa/"
                                               target="_blank" 
                                               rel="noopener noreferrer"
                                               onClick={hideMobileMenu}
                                               className="bg-gray-700/20 m-auto text-[#EEEEEE] hover:text-[#B50094] cursor-pointer transition-colors duration-300 ease-in-out p-3 rounded-full">
                                                <FaGithub className="size-5 m-auto "/>
                                            </a>
                                        </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Header;