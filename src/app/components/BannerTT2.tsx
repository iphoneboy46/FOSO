import Image from "next/image";


export default function BannerTT2() {
    return (
        <div className="py-[4rem] bg-linear2 rounded-[2.4rem] flex flex-col gap-y-[3.2rem]">
            <picture className="pt-[calc(100%_*400/366)] relative overflow-hidden w-full block">
                <img className="absolute w-full h-full top-[50%] left-[50%] object-cover translate-x-[-50%] translate-y-[-50%]" alt="" src="../../../images/qctt3.png" />
            </picture>
            <div className="px-[2.4rem]">
                <p className="text-white text-[1.8rem] font-[600]">
                Gia nhập cộng đồng FMRP Việt – 
                Kết nối, chia sẻ, cùng phát triển!
                </p>
            </div>
            <div className="px-[2.4rem]">
                <a href="" className="flex btn relative w-full  py-[0.8rem] px-[1.2rem] bg-transparent border-[0.1rem] border-white items-center justify-between overflow-hidden  h-[4.4rem] rounded-[4rem] gap-x-[1.2rem] transition duration-100 ease-linear group xl:hover:bg-[var(--cl-pri)] xl:hover:border-[var(--cl-pri)]">
                    <span className="t-[1.4rem] text-white text-nowrap font-bold text-[1.4rem] transition duration-300 ease-linear group-hover:text-white relative z-[2]">
                        Tham gia ngay
                    </span>
                    <span className="w-[2.2rem] h-[2.2rem] relative z-[2] rounded-[50%] flex justify-center items-center shrink-0 bg-transparent transition duration-300 ease-linear xl:group-hover:rotate-[45deg]  xl:group-hover:bg-white ">
                        <Image width={100} height={100} src="/images/arrBtn.svg" alt="" className="w-[80%] h-[80%] object-cover xl:group-hover:[filter:brightness(0)_saturate(100%)]" />
                    </span>
                </a>
            </div>
        </div>
    )
}