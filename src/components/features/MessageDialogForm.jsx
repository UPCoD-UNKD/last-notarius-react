import { useState } from "react";
// import ReactDOM from 'react-dom/client';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const MessageDialogForm = () => {
  // const [inputs, setInputs] = useState({});
  // const [textarea, setTextarea] = useState("");
  /**
   * Added coments
   */
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeText = (e) => {
    setComment(e.target.value);
  };



  const hendleClik = (e) => {
    e.preventDefault();
    setComments((comments) => [...comments, comment, ]);
   // Clear the form after submission
  //  setName(""); // Reset the name input field
   setComment(""); // Reset the comment input field
  };

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // };

  // const handleChangeText = (event) => {
  //   setTextarea(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(inputs);
  // };

  return (
    <>
     <div class="py-5 mt-5 lg:mt-10 overflow-hidden lg:py-10">

     {/* flex flex-nowrap */}
     <Swiper
     class="   "
    style={{
      "--swiper-pagination-color": "#9D7558",
      // "--swiper-pagination-bullet-inactive-color": "#999999",
      "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
      "--swiper-pagination-bullet-inactive-opacity": "1",
      "--swiper-pagination-bullet-size": "16px",
      "--swiper-pagination-bullet-horizontal-gap": "6px",
      "--swiper-pagination-bottom": "auto",
      "--swiper-pagination-padding": "10px",
      "--swiper-slide":  "300px"
    }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      // slidesPerView={3}
      breakpoints={{
        
        320: {
        slidesPerView: 1,
        spaceBetween: 20,
        // slidesPerGroup: 5,
        },
       768: {
        slidesPerView: 1.5,
        // spaceBetween: 20,
        },
        1280: {
        slidesPerView: 2.5,
        // spaceBetween: 20,
        },
        }}
      autoplay={true}
      // navigation
      pagination={{ clickable: true , }}
      // scrollbar={{ draggable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        {/* shadow-xl  border-2 border-b-gray-400*/}
      <div class="lg:w-[400px] lg:h-[180px]  p-4 rounded-[20px] bg-slate-200">
          
          <h5 class="mb-4 text-xl font-semibold">Maria Smantha</h5>
          
          <p class="pb-3 text-neutral-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          
        </div>

       

       
      </SwiperSlide>
  <SwiperSlide>
  <div class="lg:w-[400px] lg:h-[180px] bg-slate-200 p-4 rounded-[20px]">
          
          <div class="">
            <h5 class="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
            
            <p class="pb-3 text-neutral-600 dark:text-neutral-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid commodi.
            </p>
           
          </div>
          </div>
  </SwiperSlide>

{comments.map((text) => (
  
  <SwiperSlide>
            <div class="lg:w-[400px] lg:h-[180px] h-[180px]   bg-slate-200 p-4 rounded-[20px] overflow-y-hidden ">
              <h5 class="mb-4 text-xl font-semibold break-words">{name}</h5>



<div class="pb-3 ">


              <p class="  text-neutral-600 break-words">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                {text}
              </p>
            
              </div>
            </div>
            </SwiperSlide>
          ))}
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ... */}
    </Swiper>
    </div>

       
      
{/* shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   dark:bg-neutral-700  */}
      <div class="block py-10 lg:max-w-[60%] mt-10 rounded-lg bg-white lg:p-6 mx-auto">
        {/* onSubmit={handleSubmit} */}

        <form>
          <div>
            <label class="block">
              {/* <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span> */}
              <input
               value={name}
               onChange={handleChangeName}
                type="text"
                name="name"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Ваше ім'я"
                // value={inputs.username || ""}
                // onChange={handleChange}
              />
            </label>

           

            <textarea
              class="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              // value={textarea}
              // onChange={handleChangeText}
              value={comment}
              onChange={handleChangeText}
              rows="5"
              placeholder="Текст відгука"
            />
          </div>
          {/* shadow-[0_4px_9px_-4px_#3b71ca]  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]   dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]*/}
          <button
            type="submit"
            class="inline-block mt-5 rounded-full bg-accent1 px-6 lg:px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-accent1/70  focus:bg-accent1/70  focus:outline-none focus:ring-0 active:bg-primary-700  "
            // data-te-ripple-init
            // data-te-ripple-color="light"
            onClick={hendleClik}
          >
            Відправити
          </button>
        </form>
      </div>
    </>
  );
};

export default MessageDialogForm;
