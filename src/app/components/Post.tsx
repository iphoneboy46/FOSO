import Image from "next/image";

interface PostProps {
    image: string;
    cate: string;
    title: string;
    link: string;
}

export default function Post({ image, cate, title, link }:PostProps) {
    return (
        <div className="flex flex-col xl:gap-y-[2.4rem] md:gap-y-[2rem] gap-y-[1.6rem]">
            <a className="group pt-[calc(100%_*_475/505)] relative overflow-hidden w-full block xl:rounded-[2.4rem] lg:rounded-[2rem] rounded-[1.6rem]" href={link}>
                <Image width={1000} height={1000} quality={100}  className="absolute !w-full !h-full top-[50%] left-[50%] object-cover translate-x-[-50%] translate-y-[-50%] transition duration-300 ease-linear xl:group-hover:scale-[1.05]" alt="" src={image} />
            </a>
            <div className="flex flex-col xl:gap-y-[1.6rem] md:gap-y-[1.2rem] gap-y-[0.8rem]">
                <a href="" className="text-[#0F4F9E] font-[500] flex justify-center items-center w-fit text-[1.2rem] px-[0.8rem] py-[0.4rem] rounded-[0.8rem] bg-[#E2F0FE] xl:hover:!text-white xl:hover:bg-[var(--cl-pri)]">
                    {cate}
                </a>
                <h3 className="text-[#33404A] xl:text-[2.4rem] md:text-[2rem] text-[1.8rem] font-[700] line-clamp-2 transition duration-150 ease-linear xl:hover:text-[var(--cl-pri)]">
                    <a  href={link}>
                        {title}
                    </a>
                </h3>
                <ul className="flex sm:flex-row flex-col sm:items-center md:mx-[-1.2rem] sm:mx-[-0.8rem] mx-[0] gap-y-[0.8rem] ">
                    <li className="md:px-[1.2rem] sm:px-[0.8rem] px-0 sm:border-r-[0.1rem] sm:border-[#D9E1E7] flex gap-x-[0.4rem]">
                        <span className="flex justify-center items-center shrink-0  w-[2.4rem] h-[2.4rem]">
                            <Image width={100} height={100} className="w-full h-full object-cover transition duration-300 ease-linear" src="/images/pic1.svg" alt="" />
                        </span>
                        <p className="text-[667F93] font-[500] text-nowrap">17/11/2022</p>
                    </li>
                    <li className="md:px-[1.2rem] sm:px-[0.8rem] px-0  flex gap-x-[0.4rem]">
                        <span className="flex justify-center items-center shrink-0  w-[2.4rem] h-[2.4rem]">
                            <Image width={100} height={100} className="w-full h-full object-cover transition duration-300 ease-linear" src="/images/pic2.svg" alt="" />
                        </span>
                        <p className="text-[667F93] font-[500] line-clamp-1">10 phút đọc</p>
                    </li>
                </ul>
                <a className="linkMore group md:text-[1.8rem] text-[1.6rem]  font-[600] text-[#667F93] flex items-center gap-x-[0.4rem]" href={link}>
                    Khám phá thêm
                    <span className="flex justify-center items-center  w-[2.4rem] h-[2.4rem]">
                        <Image width={100} height={100} className="w-full h-full mt-[0.1rem] object-cover transition duration-100 ease-linear xl:group-hover:f" src="/images/pic3.svg" alt="" />
                    </span>
                </a>
            </div>
        </div>
    )
}