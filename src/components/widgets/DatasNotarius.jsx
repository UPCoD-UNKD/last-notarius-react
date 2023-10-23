import React, { useState , useEffect} from "react";
import { NavLink } from "react-router-dom";

import avatar from "../../images/avatar-02.png";

import ModalMap from "../features/ModalMap";

import { db } from "../../firebase";
import {ref,   onValue} from "firebase/database";

const DatasNotarius = ({
  datasNotar,
  loading,
  filteredData,
  setIsShownFilters,
  isShownFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);

 
  // const [todos, setTodos] = useState([]);
  const [notaryData, setNotaryData] = useState({
    notaries: [] // Initialize an empty array to store notaries
  });

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        // Object.values(data).map((todo) => {
        //   setTodos((oldArray) => [...oldArray, todo]);
        //   return todo;
        // });

        // Convert data to an array and update the todos state
        const todosArray = Object.values(data);
        // setTodos(todosArray);
        setNotaryData({ notaries: todosArray })
      }
    });
  }, []);

  if (loading) {
    return (
      <div class="w-full h-screen bg-indigo-500/50 flex items-center justify-center">
        <button
          type="button"
          class=" text-white items-center font-bold text-[24px]"
          disabled
        >
          <svg class="animate-spin h-5 w-5 mr-3 " viewBox="0 0 100 100"></svg>
          Завантаження...
        </button>
      </div>
    );
  }

  // Check if datas is an array before using map
  if (!Array.isArray(datasNotar)) {
    return <h2>Data is not an array</h2>;
  }

  // TODO disabled
  const dataTotal = filteredData.length;
  // const dataTotal = datasNotar.length;

  //  const map = '!1m12!1m10!1m3!1d81228.9020483256!2d30.578045688476564!3d50.489453380534506!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1696353021328!5m2!1sru!2sua '
  // const map2 =
  //   "!1m14!1m12!1m3!1d32257.47160492743!2d30.49221469769181!3d50.457551833063484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1695905368028!5m2!1sru!2sua";


   //read
  //  useEffect(() => {
  //   onValue(ref(db), (snapshot) => {
  //     const data = snapshot.val();
  //     if (data !== null) {
  //       // Object.values(data).map((todo) => {
  //       //   setTodos((oldArray) => [...oldArray, todo]);
  //       //   return todo;
  //       // });

  //       // Convert data to an array and update the todos state
  //       const todosArray = Object.values(data);
  //       setTodos(todosArray);
  //     }
  //   });
  // }, []);


  return (
    // xl:pl-10
    <div class=" ">
      {/* shadow-[0px_34px_12px_-28px_rgb(0,0,0,0.25)] */}
      <div class="lg:flex items-center justify-between  pb-4  ">


        <h2 class="text-base">
          Знайдено:{" "}
          <span class="  lg:text-lg font-semibold px-2"> {dataTotal}</span>{" "}
          відповідних результатів
        </h2>
        <div class="flex justify-between  items-end mt-3 lg:gap-4">
          <button
            onClick={() => {
              setIsShownFilters(!isShownFilters);
              // document.body.classList.toggle("lockBody");
            }}
            class=" xl:hidden  bg-slate-200 border border-slate-500 p-1  px-4  flex   items-center rounded-full hover:bg-slate-300 transition-all"
          >
            Фільтри
          </button>
          <button
            onClick={() => {
              // document.body.classList.toggle("lockBody")
              setIsOpen(true);
            }}
            class="   bg-[#E0E0E0] border border-accent1 p-1  px-4  flex   items-center rounded-full hover:bg-slate-300 transition-all"
          >
            Переглянути на мапі
          </button>

          {/* <button onClick={() => setIsOpen(true)}>Open Modal</button> */}
          {isOpen && <ModalMap setIsOpen={setIsOpen} />}
        </div>
      </div>

      <ul>
      
      {notaryData.notaries.map(({
        
        id,
        todo,
            region,
            nameObj,
            kind,
            contacts,
            fio,
            license,
            areal,
            city,
            fullAddress,
            shortAddress,
            latitude,
            longitude,}
            ) => (
         
            

              
              // <h1>{todo.todo}</h1>
              // <p>{todo.title}</p>
              // <p>{todo.description}</p>
              // <p>{todo.avatar}</p>
             
           
            <li
              key={id}
              class="pl-5  grid lg:grid-cols-[70%_1fr] justify-between py-4 bg-white lg:py-4 lg:pb-5 border-l  border-l-slate-400 border-t border-t-slate-400 "
            >
              

              



              <div class="">
                <div class="flex gap-4 lg:gap-8 xl:gap-9 ">
                  <NavLink to={`${id}`}>
                    <div class="relative ">
                      <img
                        class="w-[100px] h-auto rounded-full bg-gradient-to-b from-[#E1F2EE] to-[#6D707B] "
                        width={100}
                        height={100}
                        src={avatar}
                        alt={id}
                      />

                     
                    </div>
                  </NavLink>
                  <div class=" grid justify-between ">
                    <NavLink to={`${id}`}>
                      <h2 class="text-[16px] font-bold">{fio}</h2>
                    </NavLink>
                    <p class="text-xs">{nameObj}</p>

                    <div class="hidden lg:block">
                      <div class="mt-4 flex flex-col text-xs ">
                        <span>
                          Адреса: {region} {areal}
                        </span>
                      

                        <div class="mt-4 flex flex-col gap-3 justify-between ">
                          <p class="text-xs">Відгукі клієнтів </p>

                          <div class=" flex items-center gap-1 ">
                            {Array.from({ length: 5 }, (_, index) => index).map(
                              (blockIndex) => (
                                <div key={blockIndex}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                  >
                                    <path
                                      d="M6.86577 1.02865C6.97097 0.704876 7.42903 0.704874 7.53423 1.02865L8.96211 5.42323C9.00916 5.56803 9.14409 5.66606 9.29634 5.66606H13.9171C14.2575 5.66606 14.3991 6.1017 14.1236 6.3018L10.3854 9.0178C10.2622 9.10729 10.2107 9.26591 10.2577 9.41071L11.6856 13.8053C11.7908 14.1291 11.4202 14.3983 11.1448 14.1982L7.40656 11.4822C7.28339 11.3927 7.11661 11.3927 6.99344 11.4822L3.25518 14.1982C2.97976 14.3983 2.60919 14.1291 2.71439 13.8053L4.14227 9.41071C4.18932 9.26591 4.13778 9.10729 4.01461 9.0178L0.276359 6.3018C0.000939608 6.1017 0.142485 5.66606 0.482922 5.66606H5.10366C5.25591 5.66606 5.39084 5.56803 5.43789 5.42323L6.86577 1.02865Z"
                                      fill="#582467"
                                    />
                                  </svg>
                                </div>
                              )
                            )}
                            <span class=" ml-3 mr-2 rounded text-base   font-normal leading-[1.2] dark:bg-blue-200 dark:text-blue-800">
                              {}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>

             

              <div class=" text-sm flex flex-col justify-between  ml-auto">
                <p class="">
                  Досвід роботи: <span class="font-semibold">{"5"}</span> років
                </p>
                <p class="">
                  Номер ліцензії: <span class="font-semibold">{license}</span>{" "}
                </p>
                <NavLink to={`${id}`}>
                <button
                  type="button"
                  class=" group max-w-max mt-5 bg-accent1 hover:bg-accent1/90 transition-all  border border-slate-500 text-white p-2 px-10  flex   items-center rounded-full gap-4"
                >
                  Перейти
                  <svg
                  class="group-hover:translate-x-2 transition-all" 
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="16"
                    viewBox="0 0 30 16"
                    fill="none"
                  >
                    <path
                      d="M29.7146 8.95711C30.1052 8.56658 30.1052 7.93342 29.7146 7.54289L23.3507 1.17893C22.9601 0.788408 22.327 0.788408 21.9365 1.17893C21.5459 1.56946 21.5459 2.20262 21.9365 2.59315L27.5933 8.25L21.9365 13.9069C21.5459 14.2974 21.5459 14.9305 21.9365 15.3211C22.327 15.7116 22.9601 15.7116 23.3507 15.3211L29.7146 8.95711ZM-0.00195312 9.25H29.0075V7.25H-0.00195312V9.25Z"
                      fill="white"
                    />
                  </svg>
                </button>
                </NavLink>
              </div>
            </li>
            
            
            
         
        ))}
        </ul>



      {/* {datasNotar.map( */}
      {/* <ul class="custom__scrollbar2 relative mt-5     text-main min-h-[calc(100vh)] xl:h-[1195px] overflow-y-scroll  ">
       
       
        {filteredData.map(
          ({
            id,
            region,
            nameObj,
            kind,
            contacts,
            fio,
            license,
            areal,
            city,
            fullAddress,
            shortAddress,
            latitude,
            longitude,
          }) => (
           
            <li
              key={id}
              class="pl-5  grid lg:grid-cols-[70%_1fr] justify-between py-4 bg-white lg:py-4 lg:pb-5 border-l  border-l-slate-400 border-t border-t-slate-400 "
            >
              

              



              <div class="">
                <div class="flex gap-4 lg:gap-8 xl:gap-9 ">
                  <NavLink to={`${id}`}>
                    <div class="relative ">
                      <img
                        class="w-[100px] h-auto rounded-full bg-gradient-to-b from-[#E1F2EE] to-[#6D707B] "
                        width={100}
                        height={100}
                        src={avatar}
                        alt={id}
                      />

                     
                    </div>
                  </NavLink>
                  <div class=" grid justify-between ">
                    <NavLink to={`${id}`}>
                      <h2 class="text-[16px] font-bold">{fio}</h2>
                    </NavLink>
                    <p class="text-xs">{nameObj}</p>

                    <div class="hidden lg:block">
                      <div class="mt-4 flex flex-col text-xs ">
                        <span>
                          Адреса: {region} {areal}
                        </span>
                       

                        <div class="mt-4 flex flex-col gap-3 justify-between ">
                          <p class="text-xs">Відгукі клієнтів </p>

                          <div class=" flex items-center gap-1 ">
                            {Array.from({ length: 5 }, (_, index) => index).map(
                              (blockIndex) => (
                                <div key={blockIndex}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                  >
                                    <path
                                      d="M6.86577 1.02865C6.97097 0.704876 7.42903 0.704874 7.53423 1.02865L8.96211 5.42323C9.00916 5.56803 9.14409 5.66606 9.29634 5.66606H13.9171C14.2575 5.66606 14.3991 6.1017 14.1236 6.3018L10.3854 9.0178C10.2622 9.10729 10.2107 9.26591 10.2577 9.41071L11.6856 13.8053C11.7908 14.1291 11.4202 14.3983 11.1448 14.1982L7.40656 11.4822C7.28339 11.3927 7.11661 11.3927 6.99344 11.4822L3.25518 14.1982C2.97976 14.3983 2.60919 14.1291 2.71439 13.8053L4.14227 9.41071C4.18932 9.26591 4.13778 9.10729 4.01461 9.0178L0.276359 6.3018C0.000939608 6.1017 0.142485 5.66606 0.482922 5.66606H5.10366C5.25591 5.66606 5.39084 5.56803 5.43789 5.42323L6.86577 1.02865Z"
                                      fill="#582467"
                                    />
                                  </svg>
                                </div>
                              )
                            )}
                            <span class=" ml-3 mr-2 rounded text-base   font-normal leading-[1.2] dark:bg-blue-200 dark:text-blue-800">
                              {}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>

             

              <div class=" text-sm flex flex-col justify-between  ml-auto">
                <p class="">
                  Досвід роботи: <span class="font-semibold">{"5"}</span> років
                </p>
                <p class="">
                  Номер ліцензії: <span class="font-semibold">{license}</span>{" "}
                </p>
                <NavLink to={`${id}`}>
                <button
                  type="button"
                  class=" group max-w-max mt-5 bg-accent1 hover:bg-accent1/90 transition-all  border border-slate-500 text-white p-2 px-10  flex   items-center rounded-full gap-4"
                >
                  Перейти
                  <svg
                  class="group-hover:translate-x-2 transition-all" 
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="16"
                    viewBox="0 0 30 16"
                    fill="none"
                  >
                    <path
                      d="M29.7146 8.95711C30.1052 8.56658 30.1052 7.93342 29.7146 7.54289L23.3507 1.17893C22.9601 0.788408 22.327 0.788408 21.9365 1.17893C21.5459 1.56946 21.5459 2.20262 21.9365 2.59315L27.5933 8.25L21.9365 13.9069C21.5459 14.2974 21.5459 14.9305 21.9365 15.3211C22.327 15.7116 22.9601 15.7116 23.3507 15.3211L29.7146 8.95711ZM-0.00195312 9.25H29.0075V7.25H-0.00195312V9.25Z"
                      fill="white"
                    />
                  </svg>
                </button>
                </NavLink>
              </div>
            </li>
          )
        )}
      </ul> */}
    </div>
  );
};

export default DatasNotarius;
