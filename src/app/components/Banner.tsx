import Link from "next/link";

export default function Banner() {
    return (
        <div className="xl:pt-[2.4rem] pt-0 pb-[4rem] relative">

            <picture className="xl:block hidden w-[28.2rem] h-[28.2rem] absolute top-[50%] left-0 translate-y-[-50%] nhungNhay">
                <img alt="" src="../../../images/bntt1.png" className="w-full h-full object-cover" />
            </picture>
            <picture className="xl:block hidden w-[28.2rem] h-[28.2rem] absolute top-[50%] right-0 translate-y-[-50%] nhungNhay2">
                <img alt="" src="../../../images/bntt2.png" className="w-full h-full object-cover" />
            </picture>
            <div className="container">
                <div className="flex flex-col pt-[4.8rem] pb-[1.6rem] xl:gap-y-[8rem] gap-y-[4rem] ">
                    <ul className="flex  items-center w-fit mx-auto">
                        <li className="pr-[2rem] relative before:content-['>'] before:absolute before:right-[0.5rem] before:top-[45%] before:translate-y-[-50%] "  >
                            <Link href="" className="text-[1.4rem] text-[--cl-black1] text-nowrap">Trang chủ</Link>
                        </li>
                        <li className="pr-[2rem] relative before:content-['>'] before:absolute before:right-[0.5rem] before:top-[45%] before:translate-y-[-50%] "  >
                            <Link href="" className="text-[1.4rem] text-[--cl-black1] text-nowrap">Tài nguyên</Link>
                        </li>
                        <li className="relative font-bold">
                            <Link href="" className="text-[1.4rem] text-[--cl-black1] line-clamp-1">Blog</Link>
                        </li>
                    </ul>
                    <div className="flex flex-col gap-y-[0.8rem] items-center">
                        <h1 className="text-center xl:text-[6.4rem] md:text-[5rem]  text-[4rem] font-[400]">
                            Blog <span className="font-[800] text-gradient">FOSO</span>–
                            <br />
                            Cập Nhật Tin Tức <span className="font-[800] relative inline-block w-fit z-[1]before:content-[''] before:w-full before:h-[30%] before:bg-[#A3EED6] before:absolute before:bottom-[15%] before:left-0 before:rounded-[4rem] before:z-[-1]">Mới Nhất</span>
                        </h1>
                        <p className="text-center font-medium text-[1.4rem] text-[#33404A]">
                        Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

