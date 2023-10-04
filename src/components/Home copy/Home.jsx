import React, { Component } from "react";
import axios from "axios";

// axios.defaults.baseURL = "https://hn.algolia.com/api/v1";
// axios.defaults.baseURL = "https://https://jsonplaceholder.typicode.com";
console.log(axios.defaults.baseURL);
const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}  class="mt-2 p-2 bg-white">
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

class Home extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try{
    // const response = await axios.get("/search?query=react");
    const response = await axios.get("https://hn.algolia.com/api/v1/search");
    // const response = await axios.get("/photos");
    this.setState({ articles: response.data.hits });
    }catch(error){
      this.setState({ error})
      
    } finally {
      this.setState({isLoading: false});
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;
    return (

      <>
            
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
                <h1>Home</h1>
      
                <div class="grid grid-cols-[25%_75%] ">
                  <div class="bg-white  ">
                    {/* onSubmit={handleSubmit} */}
                    <form name="myForm"  method="post">
                      {/* <label for="size">Size</label> */}
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
                      {/* <input type="submit" value="Submit" class="w-full p-2 ml-0" /> */}
                    </form>
                  </div>
                  <div class="h-full w-auto px-5">
                    <h2 class="pb-5">Знайдено: {2030}</h2>
                    <div class="bg-white h-20 p-5">Card</div>
      
                    <div >
                      {error && <p>На жаль, щось пішло не так: {error.message} </p>}
                      {isLoading && <p>Loading...</p> }
      
                      {articles.length > 0 && <ArticleList articles={articles} />}
      </div>
                  </div>
                </div>
              </div>
            </section>
          
      
      
      </>
    );
  }
}




// const Home = () => {
  
//   /**
//    * Search in hero
//    */

//   //  function validateForm(e) {
//   //   e.preventDefault();
//   //   let x = document.forms["myForm"]["fname"].value;

//   //   console.log(x)

//   //   // if (x === "") {
//   //   //   alert("Name must be filled out");
//   //   //   return false;

//   //   // }
//   // }
//   // validateForm()

//   /**
//    * Select
//    */
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here
//   };

//   /**
//    * Fetch json data from server
//    */

//   // const fetchUsersBtn = document.querySelector(".btn");
//   // const userList = document.querySelector(".user-list");

//   // fetchUsersBtn.addEventListener("click", () => {
//   //   fetchUsers()
//   //     .then((users) => renderUserList(users))
//   //     .catch((error) => console.log(error));
//   // });

//   // function fetchUsers() {
//   //   return fetch("https://jsonplaceholder.typicode.com/users").then(
//   //     (response) => {
//   //       if (!response.ok) {
//   //         throw new Error(response.status);
//   //       }
//   //       return response.json();
//   //     }
//   //   );
//   // }

//   // function renderUserList(users) {
//   //   const markup = users
//   //     .map((user) => {
//   //       return `<li>
//   //            <p><b>Name</b>: ${user.name}</p>
//   //            <p><b>Email</b>: ${user.email}</p>
//   //            <p><b>Company</b>: ${user.company.name}</p>
//   //          </li>`;
//   //     })
//   //     .join("");
//   //   userList.innerHTML = markup;
//   // }

//   return (
//     <>
//       {/* <Hero/> */}
//       {/* h-[calc(10vh+72px)] bg-black/50  mt-[0px]  pt-[38vh] pb-[50px]*/}
//       <section
//         class="relative w-full  h-[30vh]  flex items-center justify-center
//   bg-hero-pattern    bg-cover bg-center bg-no-repeat  "
//       >
//         {/* onsubmit="return validateForm()" method="post" */}
//         <form class="relative" name="myForm" action="/action_page.php">
//           <input
//             type="text"
//             name="fname"
//             class="  w-[500px] h-[60px] rounded-full"
//           />
//           <input
//             type="submit"
//             value="Submit"
//             class=" absolute bg-[#F0CA00]  top-0 right-0 h-full w-[70px] rounded-r-full"
//           />
//         </form>
//       </section>

//       <section class="bg-slate-200 min-h-[calc(100vh-200px)] w-full py-10">
//         <div class="px-10 ">
//           <h1>Home</h1>

//           <div class="grid grid-cols-[25%_75%] ">
//             <div class="bg-white  ">
//               <form name="myForm" onSubmit={handleSubmit} method="post">
//                 {/* <label for="size">Size</label> */}
//                 <select id="option1" name="region" class="w-full p-2">
//                   <option value="option1" selected>
//                     {" "}
//                     Регіон
//                   </option>
//                   <option value="option2">Область</option>
//                   <option value="option3"> Область </option>
//                   <option value="option4">Область</option>
//                 </select>
//                 <select id="option2" name="size" class="w-full p-2">
//                   <option value="option1" selected>
//                     {" "}
//                     Місто
//                   </option>
//                   <option value="option1">Область</option>
//                   <option value="option1"> Область </option>
//                   <option value="option1">Область</option>
//                 </select>
//                 <select id="option3" name="size" class="w-full p-2">
//                   <option value="xs" selected>
//                     {" "}
//                     Приватний
//                   </option>
//                   <option value="s">державний нотаріус</option>
//                   <option value="m">нотаріальна контора </option>
//                   <option value="l">бюро нотаріальних перекладів</option>
//                 </select>
//                 <select id="option4" name="size" class="w-full p-2">
//                   <option value="option1" selected>
//                     {" "}
//                     Рейтинг користувачів
//                   </option>
//                   <option value="option1">5</option>
//                   <option value="option1"> 10 </option>
//                   <option value="option1">15</option>
//                 </select>
//                 <select id="option5" name="size" class="w-full p-2">
//                   <option value="option1" selected>
//                     {" "}
//                     Досвід роботи
//                   </option>
//                   <option value="option1">5 років</option>
//                   <option value="option1">10 років </option>
//                   <option value="option1">15 років</option>
//                 </select>
//                 {/* <input type="submit" value="Submit" class="w-full p-2 ml-0" /> */}
//               </form>
//             </div>
//             <div class="h-full w-auto px-5">
//               <h2 class="pb-5">Знайдено: {2030}</h2>
//               <div class="bg-white h-20 p-5">Card</div>

//               <button type="button" class="btn">
//                 Fetch users
//               </button>
//               <ul class="user-list"></ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

export default Home;
