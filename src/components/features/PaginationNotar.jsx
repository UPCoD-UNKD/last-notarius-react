import React from 'react';
import { NavLink } from 'react-router-dom';

const PaginationNotar = ({totalDatas, datasPerPage, paginate, filteredData})=>{
    const pageNumbers = [];



// console.log(totalDatas);
console.log(filteredData);
console.log(datasPerPage);
    for(let i = 1; i <= Math.ceil(filteredData / datasPerPage); i++) {
        pageNumbers.push(i)
    }

    console.log(pageNumbers);
    return (
        <nav class="flex flex-nowrap lg:mx-auto max-w-[80vw] justify-center bg-white mr-[7px] mt-4 rounded-[20px]  overflow-hidden lg:max-w-full lg:mt-[60px]">

            <ul class="flex p-2 gap-3">
                {pageNumbers.map(number => (

                    <li key={number} class=" active:bg-accent1 active:text-white  p-1 px-3 transition-all border border-bgDark bg-white rounded-[4px] hover:bg-black/10 text-bgDark  focus:bg-accent1 cursor-pointer">
                        <NavLink href="/" class="" onClick={()=> paginate(number)}>
                            {number}
                        </NavLink>
                    </li>
                ))}
                
            </ul>

        </nav>
    )
}

export default PaginationNotar;