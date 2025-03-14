import Image from "next/image";

export default function Search(){
    return (
        <div className="flex flex-col xl:gap-y-[2.4rem] gap-y-[2rem] ">
            <h2 className="text-[2.4rem] text-[#050505] font-extrabold">Tìm kiếm</h2>
            <div className="relative">
                <input type="search" className="xl:p-[2.4rem] md:p-[2rem] p-[1.6rem]  pr-[6rem]  transition duration-300 ease-linear outline-0  placeholder-[#ACB3C7s] w-full shadow-[0px_12px_24px_-4px_#919EAB29] rounded-[1.2rem] text-[1.6rem] bg-white border-[0.1rem] border-transparent focus:border-[var(--cl-pri)]" placeholder="Tìm kiếm bài viết" />
                <button className="w-[4.8rem] h-[4.8rem] bg-[var
                (--cl-pri)] absolute top-[50%] translate-y-[-50%] flex items-center justify-center xl:right-[0.8rem] md:right-[0.6rem] right-[0.4rem] bg-[var(--cl-pri)] rounded-[1.2rem]">
                    <Image width={100} height={100} src="../../../images/searchIc.svg" className="w-[50%] h-[50%] object-cover" alt="" />
                </button>
            </div>
        </div>
    )
}