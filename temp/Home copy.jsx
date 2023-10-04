// import { wait } from '@testing-library/user-event/dist/utils';
import React , {useState, useEffect} from "react";

import {
  // QueryClient,
  // QueryClientProvider,
  useQuery,
} from "react-query";
import Select from "react-select";
import IconTelegram from "../src/components/icons/IconTelegram";
import IconViber from "../src/components/icons/IconViber";
import { NavLink } from "react-router-dom";
// import axios from "axios";









const options = [
  { value: "iphone 9", label: "iphone 9" },
  { value: "rating", label: "rating" },
  { value: "oppof19", label: "oppof19" },
];






const Home = () => {
  const [selectedOption, setSelectedOption] = useState([]);


  /**
   * Temlate two
   */
  // const data = useQuery('products', fetchData)
  // console.log(data); 
 
  /**
   * Pagination
   */
  // const [page, setPage] = React.useState(0)

  /**
   * Search in hero
   */

  //  function validateForm(e) {
  //   e.preventDefault();
  //   let x = document.forms["myForm"]["fname"].value;

  //   console.log(x)

  //   // if (x === "") {
  //   //   alert("Name must be filled out");
  //   //   return false;

  //   // }
  // }
  // validateForm()

  /**
   * Select
   */
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission here
  // };

  /**
   * Fetch json data from server
   */


  const dataQuery = useQuery({

    queryKey: ["repoData"],
    queryFn: () =>
      
      fetch("https://dummyjson.com/products?limit=10").then((res) =>
        res.json()
      ),
  });

  // console.log(dataQuery);


  if (dataQuery.isLoading)
 
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

  if (dataQuery.error)
 

    // return "An error has occurred: " + dataQuery.error.message;
    return (
      <div class="w-full h-screen bg-indigo-500/50 flex items-center justify-center">
      "An error has occurred: " + data.error.message
      </div>
      );


  const data = dataQuery.data.products;
  // const dataLenght = dataQuery.data.total;
  // const dataLenght = data.length;

console.log(data.values.length);
console.log(data.length);



  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const filteredData = data.filter((item) =>

  selectedOption ? item.value === selectedOption.value : true

 
);
console.log(filteredData.length);
 const dataLenght = filteredData.length;


  // console.log(data.products.length);
  return (
    <>









      {/* <Hero/> */}
      {/* h-[calc(10vh+72px)] bg-black/50  mt-[0px]  pt-[38vh] pb-[50px]*/}
      <section
        class="relative w-full  h-[30vh]  flex items-center justify-center
  bg-hero-pattern    bg-cover bg-center bg-no-repeat  "
      >
        {/* onsubmit="return validateForm()" method="post" */}
        <form class="relative" name="myForm" action="/action_page.php">
          <input
            type="text"
            name="fname"
            class="  w-[500px] h-[60px] rounded-full"
          />
          <input
            type="submit"
            value="Submit"
            class=" absolute bg-[#F0CA00]  top-0 right-0 h-full w-[70px] rounded-r-full"
          />
        </form>
      </section>

      <section class="bg-slate-200 min-h-[calc(100vh-200px)] w-full py-10">
        <div class="px-10 ">
         

          <div class="grid grid-cols-[25%_75%] ">
            <div class="bg-white  ">
              {/* onSubmit={handleSubmit} method="post" */}
              {/* <form name="myForm">
                <select id="option1" name="region" class="w-full p-2">
                  <option value="option1" selected>
                    {" "}
                    Регіон
                  </option>
                  <option value="option2">Область</option>
                  <option value="option3"> Область </option>
                  <option value="option4">Область</option>
                </select>
                <select id="option2" name="size" class="w-full p-2">
                  <option value="option1" selected>
                    {" "}
                    Місто
                  </option>
                  <option value="option1">Область</option>
                  <option value="option1"> Область </option>
                  <option value="option1">Область</option>
                </select>
                <select id="option3" name="size" class="w-full p-2">
                  <option value="xs" selected>
                    {" "}
                    Приватний
                  </option>
                  <option value="s">державний нотаріус</option>
                  <option value="m">нотаріальна контора </option>
                  <option value="l">бюро нотаріальних перекладів</option>
                </select>
                <select id="option4" name="size" class="w-full p-2">
                  <option value="option1" selected>
                    {" "}
                    Рейтинг користувачів
                  </option>
                  <option value="option1">5</option>
                  <option value="option1"> 10 </option>
                  <option value="option1">15</option>
                </select>
                <select id="option5" name="size" class="w-full p-2">
                  <option value="option1" selected>
                    {" "}
                    Досвід роботи
                  </option>
                  <option value="option1">5 років</option>
                  <option value="option1">10 років </option>
                  <option value="option1">15 років</option>
                </select>
              </form> */}

              {/* <MyComponent  /> */}
              <Select
               options={options}
               value={selectedOption}
               onChange={handleSelectChange}
               isMulti={false} // Set to true if you want to allow multiple selections
              //  placeholder="Select an option..."
               placeholder="Регіон"
                />
            </div>
            <div class="h-full w-auto px-5">
              <div class="flex items-center justify-between p-4 bg-white">
                {/* <h2 class="">Знайдено: {dataLenght}</h2> */}
                <h2 class="">Знайдено: {dataLenght}</h2>
                <div class="items-end">
                  <button class="bg-slate-200 border border-slate-500 p-2 px-4  flex   items-center rounded-full">
                    Переглянути на мапі
                  </button>
                </div>
              </div>

              <NavLink to="/personal_office">
              <ul class="mt-4 grid   gap-4  text-main ">
                {/* {Array.isArray(data) &&
                  data */}
                  {filteredData.map(
                      ({
                        id,
                        title,
                        description,
                        price,
                        thumbnail,
                        rating,
                        brand,
                        category,
                      }) => (
                        // flex justify-between
                        <li key={id} class="grid grid-cols-[70%_30%]  bg-white p-4 ">
                          <div class="pr-10">
                            <div class="flex gap-5">
                              <img
                                class="w-32 h-32 rounded-full"
                                width={150}
                                height={150}
                                src={thumbnail}
                                alt={title}
                              />
                              <div class=" grid justify-between ">
                                <h2 class="text-[16px] font-bold">
                                  {description.slice(0, 30)}
                                </h2>
                                <p class="">{title.slice(0, 30)}</p>

                                {/* <p>
                              <b>Product</b>: {title}
                            </p> */}
                                <div class="flex gap-5 justify-between ">
                                  <div>
                                    <p class="">Відгуків клієнтів </p>

                                    <div class=" flex items-center gap-1 ">
                                      {Array.from(
                                        { length: 5 },
                                        (_, index) => index
                                      ).map((blockIndex) => (
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
                                      ))}
                                      <span class=" ml-3 mr-2 rounded text-base   font-normal leading-[1.2] dark:bg-blue-200 dark:text-blue-800">
                                        {rating}
                                      </span>
                                    </div>
                                  </div>

                                  <div>
                                    <p>Рекомендації колег</p>
                                    <p>Рекомендації колег</p>
                                  </div>

                                  <div class="flex items-center">
                                    <spam class="bg-slate-200 border border-slate-500 p-1 px-4  flex   items-center rounded-full">
                                      Активний
                                    </spam>
                                  </div>


                                  <div class="flex items-center gap-2  text-[#F15E08]">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="20"
                                      viewBox="0 0 1024 1536"
                                    >
                                      <path
                                        fill="currentcolor"
                                        d="M768 512q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19t-67.5-19t-46.5-52L33 691Q0 621 0 512q0-212 150-362T512 0t362 150t150 362z"
                                      />
                                    </svg>
                                    Київ
                                  </div>
                                </div>

                                {/* <div href={`#${id}`}> */}
                              </div>
                            </div>

                            <div class="mt-5">
                              <h3 class="text-[24px] font-bold">Опис</h3>
                              <p class="text-sm font-semibold w-[500px]">
                                {description}
                              </p>
                            </div>

                            <div class="flex items-center justify-between mt-5">
                              <div class="flex flex-col">
                                <span>+380 (98) 101-06-06</span>
                                <span class="text-[#598AC8]">
                                  notarius.kiev.ua@i.ua
                                </span>
                              </div>

                              
                              <div class="flex gap-5">
                                <IconTelegram />
                               <IconViber />

                               
                              </div>

                              <div class="items-end">
                  <button type="button" class="bg-[#607DBE] hover:bg-[#607DBE]/50 transition-all  border border-slate-500 text-white p-2 px-4  flex   items-center rounded-full gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 50 50"><path fill="white" d="M2.941 8c-2.941 0-1.47.779 0 1.974L25 26.763l22.059-16.737C48.531 8.831 50 8 47.059 8H2.941zM0 11.946v24.728C0 38.129 1.488 40 2.665 40h44.67C48.513 40 50 38.129 50 36.674V11.946L25 31.021L0 11.946z"/></svg>
                  Зворотній зв’язок
                  </button>
                </div>

                            </div>
                          </div>
                          <div>
                            <iframe
                            class="ml-auto"
                              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32257.47160492743!2d30.49221469769181!3d50.457551833063484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1695905368028!5m2!1sru!2sua"
                              width="100%"
                              height="100%"
                              // style="border:0;"
                              allowfullscreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title="Google Maps Location"
                            ></iframe>
                          </div>
                        </li>
                      )
                    )
                    }
              </ul>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
