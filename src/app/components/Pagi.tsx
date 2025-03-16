"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export default function PaginationComponent() {
    const [page, setPage] = useState<number>(0);

    const handlePageClick = (data: { selected: number }): void => {
        setPage(data.selected);
    };

    console.log(page)
    return (
        <div className="flex justify-between relative">
            <ReactPaginate
                previousLabel={
                    <div className="flex items-center gap-x-[0.8rem] cursor-pointer btnNavi">
                        <Image width={100} height={100} src="/images/arrr.svg" alt="Previous" className="w-[2.4rem] h-[2.4rem] rotate-180 " />
                        <span className="md:inline hidden text-[1.6rem] text-[#4D5F6E] font-semibold">Trang trước</span>
                    </div>
                }
                nextLabel={
                    <div className="flex items-center gap-x-[0.8rem] cursor-pointer btnNavi">
                        <span className="md:inline hidden text-[1.6rem] text-[#4D5F6E] font-semibold">Trang ké tiếp</span>
                        <Image width={100} height={100}  src="/images/arrr.svg" alt="Next" className="w-[2.4rem] h-[2.4rem] " />
                    </div>
                }
                breakLabel={"..."}
                pageCount={10}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName="flex w-full items-center justify-center gap-x-[0.8rem]"
                activeClassName="!bg-[#D1F7EA] text-[var(--cl-second)] rounded-md"
                pageClassName="md:w-[4rem] w-[3.2rem]  md:h-[4rem] h-[3.2rem] flex items-center justify-center rounded-md bg-transparent text-[#809FB8] cursor-pointer font-[600] xl:hover:!bg-[#D1F7EA] xl:hover:!text-[var(--cl-second)]"
                previousClassName="rounded-md md:absolute md:left-0 md:top-[50%] md:translate-y-[-50%]"
                nextClassName="rounded-md md:absolute md:right-0 md:top-[50%] md:translate-y-[-50%]"
            />

        </div>
    );
}
