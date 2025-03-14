
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Post from "./Post";

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
export default function PostLq() {
    
    return (
        <div className="xl:py-[4rem] md:py-[3rem] py-[2rem]">
            <div className="container">
                <div className="flex flex-col gap-y-[2.4rem]">
                    <h2 className="xl:text-[3.6rem] md:text-[3.2rem] text-[3rem] text-[#050505] font-extrabold">Tất cả bài viết</h2>
                    <div className="d-wrap">

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={0}
                            speed={1200}
                            slidesPerView="auto"
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            className="w-full"
                        >
                            {
                                posts.map((post, index) => (
                                    <SwiperSlide key={index} className="d-item d-3">
                                        <Post image={post.image} cate={post.cate} title={post.title} link={post.link} />
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    )
}