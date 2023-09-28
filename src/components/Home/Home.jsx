// import { wait } from '@testing-library/user-event/dist/utils';
// import axios from 'axios';
import {
  // QueryClient,
  // QueryClientProvider,
  useQuery,
} from "react-query";
import Select from "react-select";
// import iconTelegram from "../icons/iconTelegram";
import { NavLink } from "react-router-dom";

// async function fetchData(){
//   const {...data} = await axios.get( `https://jsonplaceholder.typicode.com/photos`);
//   return data
// }

// const POSTS = [
//   {id:1, title: "Post 1"},
//   {id:2, title: "Post 2"},
// ]

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// const MyComponent = () => (
//   <>
//     <Select options={options} />
//   </>
// );

// async function fetchData(){
//   queryKey: ["repoData"],
//   queryFn: () =>
    
//     fetch("https://dummyjson.com/products?limit=10").then((res) =>
//       res.json()
//     ),
// }


const Home = () => {
  

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
  // const dataQuery = useQuery();

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
    return "An error has occurred: " + dataQuery.error.message;


  const data = dataQuery.data.products;
  const dataLenght = dataQuery.data.total;
 

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
              <Select options={options} />
            </div>
            <div class="h-full w-auto px-5">
              <div class="flex items-center justify-between p-4 bg-white">
                <h2 class="">Знайдено: {dataLenght}</h2>
                <div class="items-end">
                  <button class="bg-slate-200 border border-slate-500 p-2 px-4  flex   items-center rounded-full">
                    Переглянути на мапі
                  </button>
                </div>
              </div>

              <NavLink to="/personal_office">
              <ul class="mt-4 grid   gap-4  text-main ">
                {Array.isArray(data) &&
                  data
                    .map(
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
                        <li key={id} class="flex justify-between bg-white p-4 ">
                          <div class="">
                            <div class="flex gap-5">
                              <img
                                class="w-32 h-32 rounded-full"
                                width={150}
                                height={150}
                                src={thumbnail}
                                alt={title}
                              />
                              <div class="grid justify-between">
                                <h2 class="text-[16px] font-bold">
                                  {description.slice(0, 30)}
                                </h2>
                                <p class="">{title.slice(0, 30)}</p>

                                {/* <p>
                              <b>Product</b>: {title}
                            </p> */}
                                <div class="flex gap-8">
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

                                  <spam class="flex items-center gap-2  text-[#F15E08]">
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
                                  </spam>
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
                                <iconTelegram />
                                <svg
                                  class="w-8 h-8"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  viewBox="0 0 256 256"
                                >
                                  <defs>
                                    <linearGradient
                                      id="logosTelegram0"
                                      x1="50%"
                                      x2="50%"
                                      y1="0%"
                                      y2="100%"
                                    >
                                      <stop offset="0%" stop-color="#2AABEE" />
                                      <stop
                                        offset="100%"
                                        stop-color="#229ED9"
                                      />
                                    </linearGradient>
                                  </defs>
                                  <path
                                    fill="url(#logosTelegram0)"
                                    d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"
                                  />
                                  <path
                                    fill="#FFF"
                                    d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z"
                                  />
                                </svg>

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="37"
                                  height="37"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="#8b17ff"
                                    fill-rule="evenodd"
                                    d="M16.676 2.628a21.9 21.9 0 0 0-9.555 0l-.339.075a4.905 4.905 0 0 0-3.684 3.58a19.467 19.467 0 0 0 0 9.577a4.905 4.905 0 0 0 3.444 3.52l.465 2.776a.5.5 0 0 0 .826.29l2.731-2.443a21.898 21.898 0 0 0 6.112-.487l.34-.075a4.905 4.905 0 0 0 3.684-3.58a19.469 19.469 0 0 0 0-9.577a4.905 4.905 0 0 0-3.685-3.58l-.339-.076ZM7.965 6.202a.822.822 0 0 0-.537.106h-.014c-.375.22-.713.497-1.001.823c-.24.277-.37.557-.404.827c-.02.16-.006.322.041.475l.018.01c.27.793.622 1.556 1.052 2.274a13.374 13.374 0 0 0 2.03 2.775l.024.034l.038.028l.023.027l.028.024a13.564 13.564 0 0 0 2.782 2.04c1.155.629 1.856.926 2.277 1.05v.006c.123.038.235.055.348.055a1.61 1.61 0 0 0 .964-.414c.325-.288.6-.627.814-1.004v-.007c.201-.38.133-.738-.157-.981A12.126 12.126 0 0 0 14.41 13c-.448-.243-.903-.096-1.087.15l-.393.496c-.202.246-.568.212-.568.212l-.01.006c-2.731-.697-3.46-3.462-3.46-3.462s-.034-.376.219-.568l.492-.396c.236-.192.4-.646.147-1.094a11.807 11.807 0 0 0-1.347-1.88a.748.748 0 0 0-.44-.263ZM12.579 5a.5.5 0 0 0 0 1c1.265 0 2.315.413 3.146 1.205c.427.433.76.946.978 1.508c.219.563.319 1.164.293 1.766a.5.5 0 0 0 1 .042a5.359 5.359 0 0 0-.361-2.17a5.442 5.442 0 0 0-1.204-1.854l-.01-.01C15.39 5.502 14.085 5 12.579 5Zm-.034 1.644a.5.5 0 0 0 0 1h.017c.912.065 1.576.369 2.041.868c.477.514.724 1.153.705 1.943a.5.5 0 0 0 1 .023c.024-1.037-.31-1.932-.972-2.646V7.83c-.677-.726-1.606-1.11-2.724-1.185l-.017-.002h-.05Zm-.019 1.675a.5.5 0 1 0-.052.998c.418.022.685.148.853.317c.169.17.295.443.318.87a.5.5 0 1 0 .998-.053c-.032-.6-.22-1.13-.605-1.52c-.387-.39-.914-.58-1.512-.612Z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
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
                              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32257.47160492743!2d30.49221469769181!3d50.457551833063484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1695905368028!5m2!1sru!2sua"
                              width="300"
                              height="100%"
                              // style="border:0;"
                              allowfullscreen=""
                              loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"
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
