"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import $ from 'jquery';
const menus: {
    title: string;
    href: string;
    dropdown: boolean;
}[] = [
        {
            title: "Về Chúng tôi",
            href: "/about",
            dropdown: false,
        },
        {
            title: "Giải pháp",
            href: "/solution",
            dropdown: true,
        },
        {
            title: "Tài nguyên",
            href: "/resources",
            dropdown: true,
        },
        {
            title: "Blog",
            href: "/blog",
            dropdown: false,
        },
        {
            title: "Liên hệ",
            href: "/contact",
            dropdown: false,
        },
    ]
export default function Header() {
    const pathname: string = usePathname();
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isActived, setIsActived] = useState<boolean[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuWrap = useRef<HTMLDivElement | null>(null);
    const menuLogoMb = useRef<HTMLDivElement | null>(null);
    const menuListMb = useRef<HTMLUListElement | null>(null);
    const menuBottom = useRef<HTMLDivElement | null>(null);




    useEffect(() => {
        const handleScroll = (): void => {
            if (window.screen.width > 1280) {
                if (window.scrollY > 0) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            }

        }


        window.addEventListener('scroll', handleScroll)

        // Kích hoạt sự kiện scroll ngay khi component mount
        window.dispatchEvent(new Event("scroll"));

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const totalHeightMbList = (): void => {
            const totalHeight = (menuWrap.current?.clientHeight ?? 0) - (menuBottom.current?.clientHeight ?? 0) - (menuLogoMb.current?.clientHeight ?? 0) - 56 - 48;

            console.log(totalHeight)
            if (menuListMb.current) {
                menuListMb.current.style.maxHeight = totalHeight + "px"
            }
        }
        totalHeightMbList();
        window.addEventListener("resize", totalHeightMbList)


        return () => {
            totalHeightMbList();
        }

    }, [])

    const handleDropDownMb = (e: React.DragEvent<HTMLDivElement>, index: number): void => {
        e.preventDefault();
        console.log(index)
        setIsActived((prev) => {
            return {
                ...prev,
                [index]: !prev[index]
            }
        })
        // Sử dụng slideToggle của jQuery
        $(`#dropdown-menu-${index}`).slideToggle();

    }

    const handleCloseMenuMb = () => {
        setIsOpen(false);
        setIsActived((prev: boolean[]) => (prev && prev.length > 0 ? prev.map(() => false) : Array(prev.length).fill(false)));
        // Đóng tất cả dropdown theo index
        $("[id^=dropdown-menu-]").slideUp()
        document.body.style.overflow = "auto";


    };

    const handleOpenMenuMb = () => {
        setIsOpen(true)
        document.body.style.overflow = "hidden";
    }







    return (
        <>
            <header className={`bg-white shadow-md transition z-[1000] duration-200 ease-linear rounded-0 translate-x-0  translate-y-0 l-0 top-0 fixed xl:w-[128rem] w-full xl:translate-y-[2.4rem] xl:left-[50%] xl:translate-x-[-50%]  xl:rounded-[4rem]  ${isScrolled && "!w-full !rounded-[0] !translate-y-0 "}`}>
                <div className="container">
                    <div className="xl:w-fit mx-auto flex justify-between xl:gap-x-[6.4rem] gap-x-[2.4rem] h-[8rem] w-full">

                        <Link className="group flex justify-center items-center relative z-[2]" href="/">
                            <picture className="xl:max-w-[13.4rem] max-w-[12rem] w-full xl:group-hover:scale-[0.9] transition duration-300 ease-linear">
                                <img className="w-full h-full object-cover" src="/images/logoHD.png" alt="" />
                            </picture>
                        </Link>
                        <ul className="xl:flex mx-[-0.4rem] h-full hidden">
                            {
                                menus.map((menu, index) => {
                                    return (
                                        <li key={index} className="px-[0.4rem] group relative ">
                                            <Link href={menu.href} className={`text-[var(--cl-black1)] text-nowrap text-[1.4rem] text-center relative flex justify-center items-center gap-[0.4rem] h-full font-medium transition duration-300 ease-linear before:content-[''] before:absolute before:w-[0.6rem] before:h-[0.6rem] before:rounded-full before:bg-[var(--cl-pri)] before:left-[50%] before:bottom-[20%] before:translate-x-[-50%] before:scale-[0] before:transition before:ease-linear before:duration-150 p-[0.8rem] xl:group-hover:before:scale-[1] xl:hover:!text-[var(--cl-black1)]  ${pathname === menu.href ? "!font-bold before:scale-[1]" : ""
                                                }`}>
                                                {menu.title}
                                                {
                                                    menu.dropdown && (
                                                        <span className="flex justify-center items-center  w-[1.6rem] h-[1.6rem]">
                                                            <Image width={100} height={100} layout="responsive" className="w-full h-full object-cover transition duration-300 ease-linear xl:group-hover:rotate-[-180deg]" src="/images/arrDown.svg" alt="" />
                                                        </span>
                                                    )
                                                }

                                            </Link>
                                            {menu.dropdown && (
                                                <ul className="flex flex-col min-w-[20rem] absolute top-[100%] left-[0] bg-white shadow-sm translate-y-[10%] opacity-0 invisible transition duration-300 ease-linear xl:group-hover:translate-y-[0%] xl:group-hover:opacity-100 xl:group-hover:visible">
                                                    <li className="border-b border-gray-200">
                                                        <Link className="p-[1.6rem] font-[500] bg-white transition duration-300 ease-linear text-[1.4rem] flex items-center xl:hover:bg-[var(--cl-pri)] xl:hover:!text-white" href="">Demo 1</Link>
                                                    </li>
                                                    <li className="border-b border-gray-200">
                                                        <Link className="p-[1.6rem] font-[500] bg-white transition duration-300 ease-linear text-[1.4rem] flex items-center xl:hover:bg-[var(--cl-pri)] xl:hover:!text-white" href="">Demo 1</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="p-[1.6rem] font-[500] bg-white transition duration-300 ease-linear text-[1.4rem] flex items-center xl:hover:bg-[var(--cl-pri)] xl:hover:!text-white" href="">Demo 1</Link>
                                                    </li>
                                                </ul>
                                            )}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="flex sm:gap-x-[0.8rem] gap-x-[0.4rem]  ">
                            <div className="relative flex flex-col justify-center">
                                <div className="langTitle group peer flex items-center sm:gap-x-[1.2rem] gap-x-[0.6rem] sm:px-[1.2rem] px-[1rem] py-[0.8rem] rounded-[4rem] border-2 border-[#e1e2e2] bg-[#e8e9e9] cursor-pointer">
                                    <picture className="w-[2.4rem] h-[2.4rem] rounded-[50%] block shrink-0">
                                        <Image width={100} height={100} src="/images/vi.png" layout="responsive" alt="" className="w-full h-full object-cover" />
                                    </picture>
                                    <div className="flex items-center gap-x-[0.4rem]">
                                        <p className="uppercase text-[1.4rem] leading-1">VI</p>
                                        <span className="w-[1.6rem] h-[1.6rem] block shrink-0">
                                            <Image width={100} height={100} layout="responsive" className="w-full h-full object-cover transition duration-300 ease-linear group-hover:rotate-[-180deg]" src="/images/arrDown.svg" alt="" />
                                        </span>
                                    </div>
                                </div>
                                <ul className="flex flex-col min-w-[5rem] w-full absolute top-[100%] left-[0] bg-white shadow-sm translate-y-[10%] opacity-0 invisible transition duration-300 ease-linear before:content-[''] before:absolute before:w-[100%] before:h-[4rem] before:top-[-3rem] before:bg-transparent xl:peer-hover:translate-y-[0%] xl:peer-hover:opacity-100 xl:peer-hover:visible hover:opacity-100 hover:translate-y-[0%] hover:visible">
                                    <li className="border-b border-gray-200">
                                        <a className="p-[1.2rem] font-[500] uppercase bg-white transition duration-300 ease-linear text-[1.6rem] flex items-center justify-center text-nowrap gap-x-[0.8rem] xl:hover:bg-[var(--cl-pri)] xl:hover:text-white" href="">
                                            <span className="w-[2.4rem] h-[2.4rem] rounded-[50%] block shrink-0">
                                                <Image width={100} height={100} src="/images/en.png" layout="responsive" alt="" className="w-full h-full object-cover" />
                                            </span>
                                            EN
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <Link href="" className="sm:flex hidden btn relative w-fit btn-linner py-[0.8rem] px-[1.2rem] bg-[var(--cl-second)] flex items-center m-auto justify-center overflow-hidden  h-[4.4rem] rounded-[4rem] gap-x-[1.2rem] transition duration-100 ease-linear group ">
                                <span className="t-[1.4rem] text-[var(--cl-second)] text-nowrap font-bold text-[1.4rem] transition duration-300 ease-linear group-hover:text-white relative z-[2]">
                                    Trở thành khách hàng
                                </span>
                                <span className="w-[2.2rem] h-[2.2rem] relative z-[2] rounded-[50%] flex justify-center items-center shrink-0 bg-black transition duration-300 ease-linear xl:group-hover:rotate-[45deg]  xl:group-hover:bg-white ">
                                    <Image width={100} height={100} src="/images/arrBtn.svg" alt="" className="w-[80%] h-[80%] object-cover xl:group-hover:[filter:brightness(0)_saturate(100%)]" />
                                </span>
                            </Link>
                            <button onClick={handleOpenMenuMb} className="w-[4rem] h-[4rem] xl:hidden flex-col items-center gap-y-[0.5rem] justify-center rounded-full bg-[var(--cl-pri)] my-auto cursor-pointer transition duration-300 ease-linear xl:hover:bg-[var(--cl-second)] flex">
                                <span className="w-[60%] h-[0.2rem] bg-white block"></span>
                                <span className="w-[60%] h-[0.2rem] bg-white block"></span>
                                <span className="w-[60%] h-[0.2rem] bg-white block"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="menu-mb">
                <div className={`xl:hidden transition duration-800 ease-initial translate-x-[-100%] opacity-0 pointer-events-none  block fixed sm:w-[35rem] w-full bg-white h-[100dvh] top-0 left-0 z-[1002] ${isOpen && "translate-x-[0%] opacity-100 !pointer-events-auto"} `}>
                    <div ref={menuWrap} className="flex flex-col justify-between  gap-y-[2.4rem] px-[2.4rem] py-[2.8rem] h-full">
                        <button onClick={handleCloseMenuMb} className="w-[2.8rem] h-[2.8rem] flex items-center justify-center absolute top-0 right-0 bg-red-600">
                            <Image width={100} height={100} src="/images/close.png" alt="" className="w-[80%] h-[80%] object-cover transition duration-300 ease-linear" />
                        </button>
                        <div className="flex flex-col gap-y-[2.4rem]">
                            <div ref={menuLogoMb} className="menu-mb-logo">
                                <Link className="group flex justify-center items-center relative z-[2]" href="/">
                                    <picture className="xl:max-w-[13.4rem] max-w-[12rem] w-full xl:group-hover:scale-[0.9] transition duration-300 ease-linear">
                                        <img className="w-full h-full object-cover" src="/images/logoHD.png" alt="" />
                                    </picture>
                                </Link>
                            </div>
                            <div className="menu-mobi-nav">
                                <ul ref={menuListMb} className="flex flex-col h-full overflow-y-auto">
                                    {
                                        menus.map((menu, index) => {
                                            return (
                                                <li key={index} className="px-[0.4rem] group relative ">
                                                    <Link href={menu.href} className={`text-[var(--cl-black1)] text-nowrap text-[1.4rem] flex items-center justify-between px-[0.5rem] py-[1rem] font-bold ${pathname === menu.href && "bg-[var(--cl-pri)] text-white"}`}>
                                                        {menu.title}
                                                        {
                                                            menu.dropdown && (
                                                                <span className={`flex justify-center items-center  w-[1.6rem] h-[1.6rem] transition duration-300 ease-linear ${isActived[index] ? "rotate-[180deg]" : ""}`} onClick={(e: React.DragEvent<HTMLDivElement>) => {
                                                                    handleDropDownMb(e, index)
                                                                }}>
                                                                    <Image width={100} height={100} layout="responsive" className={`w-full h-full object-cover transition duration-300 ease-linear xl:group-hover:rotate-[-180deg] ${pathname === menu.href && "filter-white "}`} src="/images/arrDown.svg" alt="" />
                                                                </span>
                                                            )
                                                        }

                                                    </Link>
                                                    {menu.dropdown && (
                                                        <ul id={`dropdown-menu-${index}`} className={`flex-col w-full  bg-white hidden `}>
                                                            <li className="border-b border-gray-200">
                                                                <Link className="px-[1.2rem] py-[1rem] font-[500] bg-white text-[1.4rem] flex items-center" href="">Demo 1</Link>
                                                            </li>
                                                            <li className="border-b border-gray-200">
                                                                <Link className="px-[1.2rem] py-[1rem] font-[500] bg-white text-[1.4rem] flex items-center" href="">Demo 1</Link>
                                                            </li>
                                                            <li>
                                                                <Link className="px-[1.2rem] py-[1rem] font-[500] bg-white text-[1.4rem] flex items-center" href="">Demo 1</Link>
                                                            </li>
                                                        </ul>
                                                    )}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        <div ref={menuBottom} className="menu-mb-info pt-[1.6rem] shrink-0 border-t border-t-gray-200">
                            <div className="flex flex-col gap-y-[1rem]">
                                <p className="text-[1.4rem] text-[var(--cl-pri)] font-bold">Liên hệ với chung tôi</p>
                                <ul className="flex flex-col gap-y-[0.8rem]">
                                    <li className="inline-block">
                                        <p className="inline-block text-[1.4rem] text-[var(--cl-pri)] font-bold">
                                            Địa chỉ:
                                        </p>
                                        <Link className="text-[1.4rem] " href="https://maps.app.goo.gl/phTtkwGi37NRT4pf9">
                                            VCC Building, Nguyễn Gia Trí, Phường 25, Bình Thạnh, Hồ Chí Minh 700000, Việt Nam
                                        </Link>
                                    </li>
                                    <li className="inline-block">
                                        <p className="inline-block text-[1.4rem] text-[var(--cl-pri)] font-bold">
                                            Email:
                                        </p>
                                        <Link className="text-[1.4rem] " href="">
                                            info@fososoft.com
                                        </Link>

                                    </li>
                                    <li className="inline-block">
                                        <p className="inline-block text-[1.4rem] text-[var(--cl-pri)] font-bold">
                                            Hotline :
                                        </p>
                                        <Link className="text-[1.4rem] " href="">
                                            090 113 6968
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div onClick={handleCloseMenuMb} className={`xl:hidden opacity-0 pointer-events-none block fixed inset-0 bg-[#00000065] z-[1001] w-full h-full transition duration-400 ease-linear ${isOpen && "opacity-100 !pointer-events-auto "}`}></div>
            </div>
            <Link href="" className="sm:hidden flex btn fixed bottom-0 left-0 w-full btn-linner py-[0.8rem] px-[1.2rem] bg-[var(--cl-second)] flex items-center m-auto justify-center overflow-hidden h-[4.4rem] gap-x-[1.2rem] transition duration-100 ease-linear group z-[1000]">
                <span className="t-[1.4rem] text-[var(--cl-second)] text-nowrap font-bold text-[1.4rem] transition duration-300 ease-linear group-hover:text-white relative z-[2]">
                    Trở thành khách hàng
                </span>
            </Link>

        </>
    )
}