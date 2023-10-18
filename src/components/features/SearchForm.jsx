import React from 'react';
// import { TERipple } from 'tw-elements-react';

// export default function SearchBasicExample(): JSX.Element {
export default function SearchForm() {
    return (
            <div class="w-full sm:w-[200px]  ">
                <div class="relative  flex w-full flex-wrap items-stretch  ">
                    {/* rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding -mr-0.5 block focus:border-primary dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary  focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)]*/}
                    <input
                        type="search"
                        class="relative rounded-full m-0 bg-transparent w-[1px] min-w-0 flex-auto  px-5 py-[0.25rem] text-base font-normal leading-[1.6] text-white/50 outline-none transition duration-200 ease-in-out focus:z-[3]  focus:text-white/70  focus:outline-none focus:border focus:border-white/50 active:outline-none "
                        // placeholder="Пошук"
                        aria-label="Пошук"
                        aria-describedby="button-addon1" />

                    {/* <!--Search button--> */}
                    {/* <TERipple color='light'> */}
                    {/* rounded-r bg-primary text-xs font-medium uppercase leading-tight text-white  bg-[#F0CA00]*/}
                    <button
                        class="  absolute right-2 top-1 z-[1] flex items-center  
                          transition duration-150 ease-in-out  focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"
                        id="button-addon1">
                        <svg
                     
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5 fill-white/80">
                            <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                    {/* </TERipple> */}
                </div>
            </div>
    );
}