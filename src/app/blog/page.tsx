
"use client"
import Image from "next/image";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Cate from "../components/Cate";
import BannerTT1 from "../components/BannerTT1";
import BannerTT2 from "../components/BannerTT2";
import Post from "../components/Post";
import PaginationComponent from "../components/Pagi";

const posts: {
    image: string;
    cate: string;
    title: string;
    link: string;
}[] = [
        {
            image: "/images/p.png",
            cate: "Quản Lý Sản Xuất",
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            link: "/blog/ct"
        },
        {
            image: "/images/p.png",
            cate: "Quản Lý Sản Xuất",
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            link: "/blog/ct"
        },
        {
            image: "/images/p.png",
            cate: "Quản Lý Sản Xuất",
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            link: "/blog/ct"
        },
        {
            image: "/images/p.png",
            cate: "Quản Lý Sản Xuất",
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            link: "/blog/ct"
        },
        {
            image: "/images/p.png",
            cate: "Quản Lý Sản Xuất",
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            link: "/blog/ct"
        },
        {
            image: "/images/p.png",
            cate: "Quản Lý Sản Xuất",
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            link: "/blog/ct"
        }
    ]

export default function BlogsPage() {
    return (
        <>
            <Banner />
            <div className="xl:py-[4rem] md:xl-py-[3rem] py-[2rem]">
                <div className="container">
                    <div className="flex flex-col xl:gap-y-[8rem] md:gap-y-[6rem] gap-y-[4rem]">
                        <div className="d-wrap xl:gap-y-[4rem] gap-y-[2.4rem]">
                            <div className="d-item xl:w-[calc(100%_*_9/12)] lg:w-[calc(100%_*_8/12)] w-full">
                                <div className="flex flex-col gap-y-[2.4rem]">
                                    <h2 className="xl:text-[3.6rem] md:text-[3.2rem] text-[3rem] text-[#050505] font-extrabold">Tất cả bài viết</h2>
                                    <div className="flex sm:flex-row flex-col items-center xl:rounded-[4rem] lg:rounded-[3rem] rounded-[2rem] bg-linear1  justify-between gap-x-[0rem]">
                                        <div className="xl:p-[6rem] lg:p-[4rem] md:p-[3.2rem] p-[2.4rem] flex items-center">
                                            <div className="sm:max-w-[38rem] max-w-none w-full flex flex-col xl:gap-y-[3.2rem] lg:gap-y-[2.4rem] gap-y-[2rem]">
                                                <h2 className="text-white font-bold xl:text-[3.6rem] lg:text-[3rem] text-[2.4rem]">
                                                    Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
                                                </h2>
                                                <a href="" className="flex btn relative w-full max-w-[20rem] py-[0.8rem] px-[1.2rem] bg-transparent border-[0.1rem] border-white items-center justify-between overflow-hidden  h-[4.4rem] rounded-[4rem] gap-x-[1.2rem] transition duration-100 ease-linear group xl:hover:bg-[var(--cl-pri)] xl:hover:border-[var(--cl-pri)]">
                                                    <span className="t-[1.4rem] text-white text-nowrap font-bold text-[1.4rem] transition duration-300 ease-linear group-hover:text-white relative z-[2]">
                                                        Tham gia ngay
                                                    </span>
                                                    <span className="w-[2.2rem] h-[2.2rem] relative z-[2] rounded-[50%] flex justify-center items-center shrink-0 bg-transparent transition duration-300 ease-linear xl:group-hover:rotate-[45deg]  xl:group-hover:bg-white ">
                                                        <Image width={100} height={100} src="/images/arrBtn.svg" alt="" className="w-[80%] h-[80%] object-cover xl:group-hover:[filter:brightness(0)_saturate(100%)]" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <picture className="xl:max-w-[46rem] lg:max-w-[36rem] sm:max-w-[26rem] max-w-none w-full">
                                            <img className="w-full h-full object-cover" alt="" src="/images/qctt1.png" />
                                        </picture>

                                    </div>
                                    <ul className="d-wrap xl:gap-y-[4.8rem] lg:gap-y-[4rem] md:gap-y-[3.2rem] gap-y-[2.4rem]">
                                        {
                                            posts.map((post, index) => (
                                                <li key={index} className="d-item d-2">
                                                    <Post image={post.image} cate={post.cate} title={post.title} link={post.link} />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="d-item w-full flex-[1]">
                                <div className="flex flex-col xl:gap-y-[3.2rem] md:gap-y-[2.4rem] gap-y-[2rem]">
                                    <Search />
                                    <Cate />
                                    <BannerTT1 />
                                    <BannerTT2 />

                                </div>
                            </div>
                        </div>
                        <PaginationComponent />
                    </div>

                </div>
            </div>

        </>
    )
}