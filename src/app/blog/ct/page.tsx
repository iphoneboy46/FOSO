"use client"

import $ from 'jquery';
import BannerTT1 from "@/app/components/BannerTT1";
import BannerTT2 from "@/app/components/BannerTT2";
import PostLq from "@/app/components/PostLq";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { MouseEvent, useEffect, useState } from "react";

type Category = {
    id: string;
    title: string;
    link: string;
    children: Category[];
};

const cates: Category[] = [
    {
        id: "1",
        title: "1. Quy trình 5S là gì?",
        link: "#quy-trinh-5s-la-gi",
        children: []
    },
    {
        id: "2",
        title: "2. Lợi ích quy trình 5S đem lại ",
        link: "#loi-ich-quy-trinh-5s-dem-lai",
        children: []
    },
    {
        id: "3",
        title: "3. Tại sao doanh nghiệp nên áp dụng quy trình 5S? ",
        link: "#tai-sao-doanh-nghiep-nen-ap-dung-quy-trinh-5s",
        children: [
            {
                id: "3.1",
                title: "3.1 Cải thiện rõ nét môi trường làm việc",
                link: "#cai-thien-ro-net-moi-truong-lam-viec",
                children: []
            },
            {
                id: "3.2",
                title: "3.2 Tiết kiệm thời gian đáng kể",
                link: "#tiet-kiem-thoi-gian-dang-ke",
                children: []
            },
            {
                id: "3.3",
                title: "3.3 Tăng năng suất làm việc",
                link: "#tang-nang-suat-lam-viec",
                children: []
            },
            {
                id: "3.4",
                title: "3.4 Tiết kiệm chi phí",
                link: "#tiet-kiem-chi-phi",
                children: []
            },
            {
                id: "3.5",
                title: "3.5 Tăng chất lượng sản phẩm",
                link: "#tang-chat-luong-san-pham",
                children: []
            },
        ]
    },
    {
        id: "4",
        title: "4. Quy trình 5S gồm các bước",
        link: "#quy-trinh-5s-gom-cac-buoc",
        children: [
            {
                id: "4.1",
                title: "4.1 Seiri (Ngăn nắp)",
                link: "#seiri-ngan-nap",
                children: []
            },
            {
                id: "4.2",
                title: "4.2 Seiton (Sắp xếp)",
                link: "#seiton-sap-xep",
                children: []
            },
            {
                id: "4.3",
                title: "4.3 Seiso (Vệ sinh)",
                link: "#seiso-ve-sinh",
                children: []
            },
            {
                id: "4.4",
                title: "4.4 Seiketsu (Tiêu chuẩn hóa)",
                link: "#seiketsu-tieu-chuan-hoa",
                children: []
            },
            {
                id: "4.5",
                title: "4.5 Shitsuke (Kỷ luật)",
                link: "#shitsuke-ky-luat",
                children: []
            }

        ]
    },
    {
        id: "5",
        title: "5. Quy trình được thực hiện như sau:",
        link: "#quy-trinh-duoc-thuc-hien-nhu-sau",
        children: [
            {
                id: "5.1",
                title: "5.1 Giai đoạn chuẩn bị",
                link: "#giai-doan-chuan-bi",
                children: []
            },
            {
                id: "5.2",
                title: "5.2 Triển khai rộng rãi",
                link: "#trien-khai-rong-rai",
                children: []
            },
            {
                id: "5.3",
                title: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
                link: "#thuc-hien-ve-sinh-toan-bo-doanh-nghiep",
                children: []
            },
            {
                id: "5.4",
                title: "5.4 Sàng lọc, sắp xếp và đánh giá",
                link: "#sang-loc-sap-xep-va-danh-gia",
                children: []
            },
            {
                id: "5.5",
                title: "5.5 Đánh giá",
                link: "#danh-gia",
                children: []
            },
        ]

    },
    {
        id: "6",
        title: "6. Quy trình 5S có giống với Kaizen?",
        link: "#quy-trinh-5s-co-giong-voi-kaizen",
        children: []
    },
    {
        id: "7",
        title: "7. Đối tượng nào nên áp dụng 5S?",
        link: "#doi-tuong-nao-nen-ap-dung-5s",
        children: []
    },
    {
        id: "8",
        title: "8. Các yếu tố tạo nên thành công cho quy trình 5S",
        link: "#cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s",
        children: []
    },
]

export default function BlogsPageCt() {
    const [isActived, setIsActived] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                const header = document.querySelector("header");
                const headerHeight = header ? header.clientHeight : 0; // Nếu không có header, mặc định là 0
                const offsetTop = element.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({ top: offsetTop, behavior: "smooth" });
            }
        }
    }, [router]);

    useEffect(() => {
        const handleScroll = () => {
            const contentPost = document.getElementById("contentPost");
            if (window.screen.width < 1024) {
                if (contentPost) {
                    if (window.scrollY > contentPost?.clientHeight) {
                        setIsScrolled(true)
                    } else {
                        setIsScrolled(false)
                    }
                }
            }
        }


        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleChangeCate = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Ngăn chặn load lại trang

        const href = e.currentTarget.getAttribute("href"); // Lấy giá trị href
        if (!href || !href.startsWith("#")) return; // Kiểm tra nếu không có hash thì bỏ qua

        const id = href.substring(1); // Bỏ dấu #
        const element = document.getElementById(id);

        if (element) {
            const header = document.querySelector("header"); // Lấy thẻ header nếu có
            const headerHeight = header ? header.clientHeight : 0;

            const offsetTop = element.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }

        if (window.screen.width < 1024) {
            $(`.boxCate`).slideUp();
            setIsOpen(!isOpen);

        }
    };

    useEffect(() => {
        if (window.screen.width < 1024) {
            setIsOpen(false)

        }
    }, [])



    const handleToggleCate = () => {
        $(`.boxCate`).slideToggle();
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="lg:pt-[4rem] pt-[8rem] pb-[0rem]">
                <div className="container">
                    <ul className="flex  items-center w-fit">
                        <li className="pr-[2rem] relative before:content-['>'] before:absolute before:right-[0.5rem] before:top-[45%] before:translate-y-[-50%] "  >
                            <Link href="" className="text-[1.4rem] text-[--cl-black1] text-nowrap">Trang chủ</Link>
                        </li>
                        <li className="pr-[2rem] relative before:content-['>'] before:absolute before:right-[0.5rem] before:top-[45%] before:translate-y-[-50%] "  >
                            <Link href="" className="text-[1.4rem] text-[--cl-black1] text-nowrap">Tài nguyên</Link>
                        </li>
                        <li className="pr-[2rem] relative before:content-['>'] before:absolute before:right-[0.5rem] before:top-[45%] before:translate-y-[-50%] "  >
                            <Link href="" className="text-[1.4rem] text-[--cl-black1] text-nowrap">Blog</Link>
                        </li>
                        <li className="relative font-bold">
                            <Link href="" className="text-[1.4rem] text-[--cl-black1] line-clamp-1">Quản lý sản xuất</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="xl:py-[4rem] md:py-[3rem] py-[2rem]">
                <div className="container2">
                    <div className="d-wrap gap-y-[2.4rem]">
                        <div className="d-item  xl:w-fit w-full xl:order-[-1] order-2">
                            <div className="flex flex-col gap-y-[0.8rem] xl:items-center items-start sticky top-[var(--size-hd)]">
                                <p className="text-[#33404A] t-center font-[700] text-nowrap">Chia sẻ</p>
                                <ul className="flex xl:flex-col  flex-row gap-y-[0.8rem] gap-x-[1.2rem] flex-wrap">
                                    <li>
                                        <a className="md:w-[4.8rem] md:h-[4.8rem] w-[4rem] h-[4rem] flex items-center justify-center border-[0.1rem] border-[var(--cl-pri)] md:rounded-[1.6rem] rounded-[1rem] transition duration-300 ease-linear xl:hover:bg-[var(--cl-pri)]" href="">
                                            <Image className="w-[100%] h-[100%] object-cover" width={100} height={100} alt="" src="/images/nic1.png" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="social-link md:w-[4.8rem] md:h-[4.8rem] w-[4rem] h-[4rem] flex items-center justify-center border-[0.1rem] border-[var(--cl-pri)] md:rounded-[1.6rem] rounded-[1rem] transition duration-300 ease-linear xl:hover:bg-[var(--cl-pri)]" href="">
                                            <Image className="w-[100%] h-[100%] object-cover" width={100} height={100} alt="" src="/images/nic2.png" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="social-link md:w-[4.8rem] md:h-[4.8rem] w-[4rem] h-[4rem] flex items-center justify-center border-[0.1rem] border-[var(--cl-pri)] md:rounded-[1.6rem] rounded-[1rem] transition duration-300 ease-linear xl:hover:bg-[var(--cl-pri)]" href="">
                                            <Image className="w-[100%] h-[100%] object-cover" width={100} height={100} alt="" src="/images/nic3.png" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="social-link md:w-[4.8rem] md:h-[4.8rem] w-[4rem] h-[4rem] flex items-center justify-center border-[0.1rem] border-[var(--cl-pri)] md:rounded-[1.6rem] rounded-[1rem] transition duration-300 ease-linear xl:hover:bg-[var(--cl-pri)]" href="">
                                            <Image className="w-[100%] h-[100%] object-cover" width={100} height={100} alt="" src="/images/nic4.png" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="social-link md:w-[4.8rem] md:h-[4.8rem] w-[4rem] h-[4rem] flex items-center justify-center border-[0.1rem] border-[var(--cl-pri)] md:rounded-[1.6rem] rounded-[1rem] transition duration-300 ease-linear xl:hover:bg-[var(--cl-pri)]" href="">
                                            <Image className="w-[100%] h-[100%] object-cover" width={100} height={100} alt="" src="/images/nic5.png" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-item w-full flex-[1] ">
                            <div className="flex flex-col gap-y-[2.4rem]">
                                <div className="flex flex-col gap-y-[1.6rem]">
                                    <a href="" className="text-[#0F4F9E] flex justify-center items-center w-fit text-[1.2rem] px-[0.8rem] py-[0.4rem] rounded-[0.8rem] bg-[#E2F0FE] font-[500] xl:hover:!text-white xl:hover:bg-[var(--cl-pri)]">
                                        Quản Lý Sản Xuất
                                    </a>
                                    <h1 className="text-[3.6rem] text-[#050505] font-[700]">
                                        Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
                                    </h1>
                                    <div className="flex justify-between items-center gap-x-[1.2rem] gap-y-[0.8rem] flex-wrap">
                                        <div className="flex items-center gap-x-[0.8rem]">
                                            <picture className="w-[6.4rem] h-[6.4rem] shrink-0 rounded-[50%] border-[0.1rem] border-[#F1F5F7] overflow-hidden">
                                                <Image className="w-full h-full object-cover" quality="100" width="100" height="100" src="/images/ava.png" alt="" />
                                            </picture>
                                            <div className="flex flex-col gap-y-[0.8rem]">
                                                <p className="text-[#667F93] fw-[500]">Tác giả</p>
                                                <p className="text-[33404A] text-[1.6rem] font-[600]">FOSO Creator</p>
                                            </div>
                                        </div>
                                        <ul className="box-info flex flex-row items-center md:mx-[-1.2rem] smx-[-0.8rem] ] gap-y-[0.8rem] ">
                                            <li className="md:px-[1.2rem] px-[0.8rem]  border-r-[0.1rem] border-[#D9E1E7] flex gap-x-[0.4rem]">
                                                <span className="flex justify-center items-center shrink-0  w-[2.4rem] h-[2.4rem]">
                                                    <Image width={100} height={100} className="w-full h-full object-cover transition duration-300 ease-linear" src="/images/pic1.svg" alt="" />
                                                </span>
                                                <p className="text-[667F93] font-[500] text-nowrap">Cập nhật vào: 17/11/2022</p>
                                            </li>
                                            <li className="md:px-[1.2rem] px-[0.8rem]   flex gap-x-[0.4rem]">
                                                <span className="flex justify-center items-center shrink-0  w-[2.4rem] h-[2.4rem]">
                                                    <Image width={100} height={100} className="w-full h-full object-cover transition duration-300 ease-linear" src="/images/pic2.svg" alt="" />
                                                </span>
                                                <p className="text-[667F93] font-[500] line-clamp-1">10 phút đọc</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="contentPost" className=" flex flex-col text-[#231F20] text-[1.6rem] font-[500]">
                                    <picture className="w-full h-auto">
                                        <img className="w-full h-full object-cover" src="/images/n1.png" alt="" />
                                    </picture>
                                    <span className="text-[#667F93] text-center mt-[0.8rem]">Quy trình 5s là gì?</span>
                                    <br />
                                    <blockquote className="relative text-[33404A] text-[2rem] italic text-center lg:px-[6rem] md:px-[4rem] px-[2rem]  py-[1.2rem] font-[500] before:content-['']  before:text=[var(--cl-pri) before:top-0 before:left-0 before:absolute before:bg-[url(/images/phay.svg)] lg:before:w-[4.8rem] md:before:w-[4rem] before:w-[2rem] lg:before:h-[3.2rem] md:before:h-[2.6rem] before:h-[1.2rem]  before:bg-cover before:bg-no-repeat">
                                        <p>Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</p>
                                    </blockquote>
                                    <br />
                                    <h2 id="quy-trinh-5s-la-gi" className="text-[2rem] text-[#15AA7A] font-[700]">
                                        1. Quy trình 5S là gì?
                                    </h2>
                                    <br />
                                    <p>
                                        Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản.
                                    </p>
                                    <br />
                                    <p>
                                        Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:
                                    </p>
                                    <br />
                                    <ul className="list-disc pl-5 marker:text-[var(--cl-pri)]">
                                        <li>
                                            <span className="text-[var(--cl-pri)] fw-[700]">Seiri </span>
                                            (Ngăn nắp)
                                        </li>
                                        <li>
                                            <span className="text-[var(--cl-pri)] fw-[700]">Seiso </span>
                                            (Sạch sẽ)
                                        </li>
                                        <li>
                                            <span className="text-[var(--cl-pri)] fw-[700]">Seiton </span>
                                            (Trật tự)
                                        </li>
                                        <li>
                                            <span className="text-[var(--cl-pri)] fw-[700]">Shitsuke </span>
                                            (Kỷ luật)
                                        </li>
                                        <li>
                                            <span className="text-[var(--cl-pri)] fw-[700]">Seiketsu </span>
                                            (Tiêu chuẩn hóa)
                                        </li>
                                    </ul>
                                    <br />
                                    <h2 id="loi-ich-quy-trinh-5s-dem-lại" className="text-[2rem] text-[#15AA7A] font-[700]">
                                        2. Lợi ích quy trình 5S đem lại
                                    </h2>
                                    <br />
                                    <p>
                                        Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp.
                                    </p>
                                    <br />
                                    <p>
                                        Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.
                                    </p>
                                    <br />
                                    <p>
                                        Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.
                                    </p>
                                    <br />
                                    <picture className="w-full h-auto">
                                        <img className="w-full h-full object-cover" src="/images/n2.png" alt="" />
                                    </picture>
                                    <span className="text-[#667F93] text-center mt-[0.8rem]">Tại sao doanh nghiệp cần quy trình 5S?</span>
                                    <br />
                                    <h2 id="tai-sao-doanh-nghiep-nen-ap-dung-quy-trinh-5s" className="text-[2rem] text-[#15AA7A] font-[700]">
                                        3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
                                    </h2>
                                    <br />
                                    <p>
                                        Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:
                                    </p>
                                    <br />
                                    <h3 id="cai-thien-ro-net-moi-truong-lam-viec" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        3.1 Cải thiện rõ nét môi trường làm việc
                                    </h3>
                                    <br />
                                    <p>
                                        Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.
                                    </p>
                                    <br />
                                    <h3 id="tiet-kiem-thoi-gian-dang-ke" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        3.2 Tiết kiệm thời gian đáng kể
                                    </h3>
                                    <br />
                                    <p>
                                        Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.
                                    </p>
                                    <br />
                                    <h3 id="tang-nang-suat-lam-viec" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        3.3 Tăng năng suất làm việc
                                    </h3>
                                    <br />
                                    <p>
                                        Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.
                                    </p>
                                    <br />
                                    <h3 id="tiet-kiem-chi-phi" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        3.4 Tiết kiệm chi phí
                                    </h3>
                                    <br />
                                    <p>
                                        Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.
                                    </p>
                                    <br />
                                    <h3 id="tang-chat-luong-san-pham" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        3.5 Tăng chất lượng sản phẩm
                                    </h3>
                                    <br />
                                    <p>
                                        5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.
                                    </p>
                                    <br />
                                    <picture className="w-full h-auto">
                                        <img className="w-full h-full object-cover" src="/images/n3.png" alt="" />
                                    </picture>
                                    <span className="text-[#667F93] text-center mt-[0.8rem]">Quy trình 5s gồm các bước</span>
                                    <br />
                                    <h2 id="quy-trinh-5s-gom-cac-buoc" className="text-[2rem] text-[#15AA7A] font-[700]">
                                        4. Quy trình 5S gồm các bước
                                    </h2>
                                    <br />
                                    <p>
                                        5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:
                                    </p>
                                    <br />
                                    <h3 id="seiri-ngan-nap" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        4.1 Seiri (Ngăn nắp)
                                    </h3>
                                    <br />
                                    <p>
                                        Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.
                                    </p>
                                    <h3 id="seiton-sap-xep" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        4.2 Seiton (Sắp xếp)
                                    </h3>
                                    <br />
                                    <p>
                                        Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.
                                    </p>
                                    <br />
                                    <h3 id="seiso-ve-sinh" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        4.3 Seiso (Vệ sinh)
                                    </h3>
                                    <br />
                                    <p>
                                        Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
                                    </p>
                                    <br />
                                    <h3 id="seiketsu-tieu-chuan-hoa" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        4.4 Seiketsu (Tiêu chuẩn hóa)
                                    </h3>
                                    <br />
                                    <p>
                                        Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.
                                    </p>
                                    <br />
                                    <h3 id="shitsuke-ky-luat" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        4.5 Shitsuke (Kỷ luật)
                                    </h3>
                                    <br />
                                    <p>
                                        Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.
                                    </p>
                                    <br />
                                    <picture className="w-full h-auto">
                                        <img className="w-full h-full object-cover" src="/images/n4.png" alt="" />
                                    </picture>
                                    <span className="text-[#667F93] text-center mt-[0.8rem]">Các bước thực hiện quy trình 5s</span>
                                    <br />
                                    <h2 id="quy-trinh-thuc-hien-nhu-sau" className="text-[2rem] text-[#15AA7A] font-[700]">
                                        5. Quy trình được thực hiện như sau:
                                    </h2>
                                    <br />
                                    <p>
                                        Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:
                                    </p>
                                    <br />
                                    <h3 id="giai-doan-chuan-bi" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        5.1 Giai đoạn chuẩn bị
                                    </h3>
                                    <br />
                                    <p>
                                        Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.
                                    </p>
                                    <br />
                                    <h3 id="trien-khai-rong-rai" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        5.2 Triển khai rộng rãi
                                    </h3>
                                    <br />
                                    <p>
                                        Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.
                                    </p>
                                    <br />
                                    <h3 id="thuc-hien-ve-sinh-toan-bo-doanh-nghiep" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
                                    </h3>
                                    <br />
                                    <p>
                                        Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.
                                    </p>
                                    <br />
                                    <h3 id="sang-loc-sap-xep-va-danh-gia" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        5.4 Sàng lọc, sắp xếp và đánh giá
                                    </h3>
                                    <br />
                                    <p>
                                        Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.
                                    </p>
                                    <br />
                                    <h3 id="danh-gia" className="text-[1.6rem] text-[#15AA7A] font-[700]">
                                        5.5 Đánh giá
                                    </h3>
                                    <br />
                                    <p>
                                        Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.
                                    </p>
                                    <br />
                                    <h2 id="quy-trinh-5s-co-giong-voi-kaizen" className="text-[2rem] text-[#15AA7A] font-[700]">
                                        6. Quy trình 5S có giống với Kaizen?
                                    </h2>
                                    <br />
                                    <p>
                                        Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.
                                    </p>
                                    <br />
                                    <span className="py-[1.2rem] px-[3.6rem] block border-l-[0.3rem] border-[#15AA7A] text-[2rem] text-[#33404A] italic ">
                                        Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.
                                    </span>
                                    <br />
                                    <span className="py-[1.2rem] px-[3.6rem] block border-l-[0.3rem] border-[#15AA7A] text-[2rem] text-[#33404A] italic ">
                                        Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.
                                    </span>
                                    <br />
                                    <p>
                                        Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.
                                    </p>
                                    <br />
                                    <h2 id="doi-tuong-nao-nen-ap-dung-5s" className="text-[2rem] text-[#15AA7A] font-[700]">
                                        7. Đối tượng nào nên áp dụng 5S?
                                    </h2>
                                    <br />
                                    <p>
                                        Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
                                    </p>
                                    <br />
                                    <p>
                                        Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.
                                    </p>
                                    <br />
                                    <picture className="w-full h-auto">
                                        <img className="w-full h-full object-cover" src="/images/n5.png" alt="" />
                                    </picture>
                                    <span className="text-[#667F93] text-center mt-[0.8rem]">Các yếu tố tạo nên thành công cho quy trình 5S</span>
                                    <br />
                                    <h2 id="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" className="text-[2rem] text-[#15AA7A] font-[700]">
                                        8. Các yếu tố tạo nên thành công cho quy trình 5S
                                    </h2>
                                    <br />
                                    <p>
                                        Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
                                    </p>
                                    <br />
                                    <ul className="list-disc pl-5 marker:text-black">
                                        <li>
                                            Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.
                                        </li>
                                        <li>
                                            Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S.
                                        </li>
                                        <li>
                                            Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.
                                        </li>
                                    </ul>
                                    <br />
                                    <p>
                                        Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.
                                    </p>
                                </div>
                                <div className="flex flex-col xl:mt-[4rem] mt-[2rem] lg:p-[2.4rem] md:p-[2rem] p-[1.6rem] shadow-md bg-white rounded-[2.4rem] gap-y-[2.4rem]">
                                    <div className="flex flex-col items-center gap-y-[0.4rem]">
                                        <h2 className="text-[#33404A] text-center font-[700] text-[2rem]">
                                            Bạn thấy bài viết như thế nào?
                                        </h2>
                                        <p className="text-center text-[#33404A] font-[500]">4 phản hồi</p>
                                    </div>
                                    <div className="lg:max-w-[70rem] w-full  m-auto">
                                        <ul className="d-wrap gap-y-[2.4rem]">
                                            <li className="md:w-[calc(100%*2/12)] w-[calc(100%*4/12)]  d-item">
                                                <div className="group flex flex-col items-center cursor-pointer rounded-[0.4rem] gap-y-[0.4rem] py-[0.8rem] lg:px-[2rem] md:px-[1.6rem] px-[1.2rem] border-[0.1rem] border-transparent transition duration-300 ease-linear xl:hover:!border-[#10805B]">
                                                    <picture className="w-[4.8rem] h-[4.8rem] block mx-auto">
                                                        <img className="w-full h-full object-cover" src="/images/dgic1.png" alt="" />
                                                    </picture>
                                                    <p className="text-[33404A] font-[700] text-center text-[1.6rem] transition duration-300 ease-linear xl:group-hover:text-[#10805B]">
                                                        1
                                                    </p>
                                                    <p className="text-[33404A] font-[500] text-center text-[1.4rem] transition duration-300 ease-linear xl:group-hover:text-[#10805B] text-nowrap">
                                                        Hữu ích
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="md:w-[calc(100%*2/12)] w-[calc(100%*4/12)]  d-item">
                                                <div className="group flex flex-col items-center cursor-pointer rounded-[0.4rem] gap-y-[0.4rem] py-[0.8rem] lg:px-[2rem] md:px-[1.6rem] px-[1.2rem] border-[0.1rem] border-transparent transition duration-300 ease-linear xl:hover:!border-[#10805B]">
                                                    <picture className="w-[4.8rem] h-[4.8rem] block mx-auto">
                                                        <img className="w-full h-full object-cover" src="/images/dgic2.png" alt="" />
                                                    </picture>
                                                    <p className="text-[33404A] font-[700] text-center text-[1.6rem] transition duration-300 ease-linear xl:group-hover:text-[#10805B]">
                                                        2
                                                    </p>
                                                    <p className="text-[33404A] font-[500] text-center text-[1.4rem] transition duration-300 ease-linear xl:group-hover:text-[#10805B] text-nowrap">
                                                        Yêu thích
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="md:w-[calc(100%*2/12)] w-[calc(100%*4/12)]  d-item">
                                                <div className="group flex flex-col items-center cursor-pointer rounded-[0.4rem] gap-y-[0.4rem] py-[0.8rem] lg:px-[2rem] md:px-[1.6rem] px-[1.2rem] border-[0.1rem] border-transparent transition duration-300 ease-linear xl:hover:!border-[#10805B]">
                                                    <picture className="w-[4.8rem] h-[4.8rem] block mx-auto">
                                                        <img className="w-full h-full object-cover" src="/images/dgic3.png" alt="" />
                                                    </picture>
                                                    <p className="text-[33404A] font-[700] text-center text-[1.6rem] transition duration-300 ease-linear xl:group-hover:text-[#10805B]">
                                                        0
                                                    </p>
                                                    <p className="text-[33404A] font-[500] text-center text-[1.4rem] transition duration-300 ease-linear xl:group-hover:text-[#10805B] text-nowrap">
                                                        Thú vị
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="md:w-[calc(100%*2/12)] w-[calc(100%*4/12)]  d-item">
                                                <div className="group flex flex-col items-center cursor-pointer rounded-[0.4rem] gap-y-[0.4rem] py-[0.8rem] lg:px-[2rem] md:px-[1.6rem] px-[1.2rem] border-[0.1rem] border-transparent transition duration-300 ease-linear xl:hover:!border-[#10805B]">
                                                    <picture className="w-[4.8rem] h-[4.8rem] block mx-auto">
                                                        <img className="w-full h-full object-cover" src="/images/dgic4.png" alt="" />
                                                    </picture>
                                                    <p className="text-[33404A] font-[700] text-center text-[1.6rem] transition duration-300 ease-linear xl:group-hover:text-[#10805B]">
                                                        1
                                                    </p>
                                                    <p className="text-[33404A] font-[500] text-center text-[1.4rem] transition duration-300 ease-linear xl:group-hover:text-[#10805B] text-nowrap">
                                                        Bất ngờ
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="md:w-[calc(100%*2/12)] w-[calc(100%*4/12)]  d-item">
                                                <div className="group flex flex-col items-center cursor-pointer rounded-[0.4rem] gap-y-[0.4rem] py-[0.8rem] lg:px-[2rem] md:px-[1.6rem] px-[1.2rem] border-[0.1rem] border-transparent transition duration-300 ease-linear xl:hover:!border-[#10805B]">
                                                    <picture className="w-[4.8rem] h-[4.8rem] block mx-auto">
                                                        <img className="w-full h-full object-cover" src="/images/dgic5.png" alt="" />
                                                    </picture>
                                                    <p className="text-[33404A] font-[700] text-center text-[1.6rem] transition duration-300 ease-linear xl:group-hover:text-[#10805B]">
                                                        0
                                                    </p>
                                                    <p className="text-[33404A] font-[500] text-center text-[1.4rem] transition duration-300 ease-linear xl:group-hover:text-[#10805B] text-nowrap">
                                                        Nhàm chán
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="md:w-[calc(100%*2/12)] w-[calc(100%*4/12)]  d-item">
                                                <div className="group flex flex-col items-center cursor-pointer rounded-[0.4rem] gap-y-[0.4rem] py-[0.8rem] lg:px-[2rem] md:px-[1.6rem] px-[1.2rem] border-[0.1rem] border-transparent transition duration-300 ease-linear xl:hover:!border-[#10805B]">
                                                    <picture className="w-[4.8rem] h-[4.8rem] block mx-auto">
                                                        <img className="w-full h-full object-cover" src="/images/dgic6.png" alt="" />
                                                    </picture>
                                                    <p className="text-[33404A] font-[700] text-center text-[1.6rem] transition duration-300 ease-linear xl:group-hover:text-[#10805B]">
                                                        0
                                                    </p>
                                                    <p className="text-[33404A] font-[500] text-center text-[1.4rem] transition duration-300 ease-linear xl:group-hover:text-[#10805B] text-nowrap">
                                                        Tức giận
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-item lg:w-[calc(100%*4/12)] w-full">
                            <div className="flex flex-col md:gap-y-[2.4rem] gap-y-[2rem]">
                                <div className={`flex bg-white left-0 flex-col lg:gap-y-[2rem] gap-y-[1.2rem] w-full lg:relative lg:top-0 lg:py-[0] lg:px-[0] lg:shadow-none shadow-lg fixed top-[var(--size-hd)] px-[1.6rem] py-[1.2rem] z-10 transition duration-300 ease-linear ${isScrolled && "translate-y-[-100%] opacity-0"}`}>
                                    <div onClick={handleToggleCate} className="flex justify-between items-center gap-x-[1.2rem] cursor-pointer">
                                        <h2 className="lg:text-[2.4rem] md:text-[2rem] text-[1.6rem] text-[#050505] lg:font-extrabold font-[600]">Nội dung bài viết</h2>
                                        <span className="flex justify-center items-center  w-[2.4rem] h-[2.4rem]">
                                            <Image width={100} height={100} className={`w-full h-full object-cover transition duration-300 ease-linear  ${isOpen && "rotate-[-180deg]"}`} src="/images/arrDown.svg" alt="" />
                                        </span>
                                    </div>
                                    <ul className="boxCate lg:flex hidden flex-col lg:gap-y-[0.8rem] gap-y-[0.4rem] lg:max-h-none max-h-[30svh] overflow-y-auto">
                                        {
                                            cates.map((cate, index) => {
                                                return (
                                                    <li key={index} className="flex flex-col ">
                                                        <Link onClick={(e) => { handleChangeCate(e); setIsActived(cate.id) }} className={`lg:text-[1.8rem] py-[0.4rem] text-[1.6rem] text-[33404A] transition duration-300 ease-linear xl:hover:text-[var(--cl-pri)] ${isActived === cate.id && "text-[var(--cl-pri)] font-[700]"}`} href={cate.link}>
                                                            {cate.title}
                                                        </Link>
                                                        {
                                                            cate.children.length > 0
                                                            &&
                                                            <ul className="flex flex-col ml-[2rem]">
                                                                {
                                                                    cate.children.map((child, indexChild) => {
                                                                        return (
                                                                            <li key={indexChild} className="flex flex-col gap-y-[0.8rem]">
                                                                                <Link onClick={(e) => { handleChangeCate(e); setIsActived(child.id) }} className={`lg:text-[1.8rem] text-[1.6rem] py-[0.4rem] text-[33404A] transition duration-300 ease-linear xl:hover:text-[var(--cl-pri)] ${isActived === child.id && "text-[var(--cl-pri)] font-[700]"}`} href={child.link}>
                                                                                    {child.title}
                                                                                </Link>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                </div>
                                <div className="lg:max-w-[36.8rem] w-full">
                                    <BannerTT1 />
                                </div>
                                <div className="lg:max-w-[36.8rem] w-full">
                                    <BannerTT2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PostLq />
        </>
    )
}