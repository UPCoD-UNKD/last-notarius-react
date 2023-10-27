import React from 'react';

const Pagination = ({totalDatas, datasPerPage, paginate})=>{
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalDatas / datasPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav class="flex justify-center bg-white mr-[7px] mt-4 rounded-[20px]">

            <ul class="flex p-2">
                {pageNumbers.map(number => (
                    <li key={number} class="p-4 px-6 transition-all bg-white rounded-full hover:bg-black/10 text-blue-600  focus:bg-blue-600 cursor-pointer">
                        <div onClick={()=> paginate(number)}>
                            {number}
                        </div>
                    </li>
                ))}
                
            </ul>

        </nav>
    )
}

export default Pagination;