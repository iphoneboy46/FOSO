"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackToTop() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 0){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () =>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    const handleScrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth" })
    }

    return (
        <button onClick={handleScrollTop} className={`fixed z-100 bg-[#D1F7EA] right-[1.6rem] w-[4rem] h-[4rem] flex justify-center items-center sm:bottom-[3svh] bottom-[8svh]  rounded-[50%] overflow-hidden cursor-pointer btn-to-top translate-x-[100%] opacity-0 pointer-events-none transition duration-300 ease-linear ${isScrolled && "!translate-x-[0%] opacity-100 !pointer-events-auto"}`}>
            <Image width={100} height={100} className="w-[70%] h-[70%] object-cover" src="/images/up.png" alt="" />
        </button>
    )
}