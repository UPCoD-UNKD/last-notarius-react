// import { wait } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from "react";

// import {

//   useQuery,
// } from "react-query";

import Select from "react-select";

import axios from "axios";

import Datas from "../Datas";
import Pagination from "../Pagination";
import SearchForm from "../../src/components/SearchForn";

const optionsBrand = [
  { value: "products", label: "Регіон" },
  { value: "Apple", label: "Херсонська обл." },
  { value: "Samsung", label: "Волинська обл." },
  { value: "OPPO", label: "Київська обл." },
];
const optionsCategory = [
  { value: "products", label: "Вид нотаріальної діяльності" },
  { value: "smartphones", label: "Іванівська державна нотаріальна контора" },
  { value: "4.44", label: "Іваничівська державна нотаріальна контора" },
];
const optionsKind = [
  { value: "products", label: "Вид нотаріальної діяльності" },
  { value: "smartphones", label: "смт." },
  { value: "4.44", label: "м." },
];



const optionsExperience = [
  { value: "products", label: "Досвід роботи" },
  { value: "smartphones", label: "5" },
  { value: "4.44", label: "10" },
];

const optionsLanguages = [
  { value: "products", label: "Мови спілкування" },
  { value: "smartphones", label: "Українська" },
  { value: "4.44", label: "Англійська" },
];

const optionsAccessibility = [
  { value: "products", label: "Доступність для інвалідів" },
  { value: "smartphones", label: "Падус в наявності" },
  { value: "4.44", label: "Rating" },
];

const Home = () => {
  // const [selectedOption, setSelectedOption] = useState(optionsBrand);
  const [selectedBrand, setSelectedBrand] = useState(optionsBrand);
  const [selectedCategory, setSelectedCategory] = useState(optionsCategory);

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [datasPerPage, setDataPerPage] = useState(5);
  const [datasPerPage] = useState(5);

  useEffect(() => {
    const fetchDatas = async () => {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products");
      setDatas(res.data.products);
      setLoading(false);
    };
    fetchDatas();
  }, []);

  

  //   const dataQuery = useQuery({

  //     queryKey: ["repoData"],
  //     queryFn: () =>

  //       fetch("https://dummyjson.com/products").then((res) =>
  //         res.json()
  //       ),
  //   });

  //   if (dataQuery.isLoading)

  //     return (
  //       <div class="w-full h-screen bg-indigo-500/50 flex items-center justify-center">
  //         <button
  //           type="button"
  //           class=" text-white items-center font-bold text-[24px]"
  //           disabled
  //         >
  //           <svg class="animate-spin h-5 w-5 mr-3 " viewBox="0 0 100 100"></svg>
  //           Завантаження...
  //         </button>
  //       </div>
  //     );

  //   if (dataQuery.error)

  //     // return "An error has occurred: " + dataQuery.error.message;
  //     return (
  //       <div class="w-full h-screen bg-indigo-500/50 flex items-center justify-center">
  //       "An error has occurred: " + data.error.message
  //       </div>
  //       );

  //   const data = dataQuery.data.products;
  // console.log(data);

  //Get current datas
  const indexOfLastDatas = currentPage * datasPerPage;
  const indexOfFirstDatas = indexOfLastDatas - datasPerPage;
  const currentDatas = datas.slice(indexOfFirstDatas, indexOfLastDatas);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Selecte
  const handleSelectChangeBrand = (selectedBrand) => {
    setSelectedBrand(selectedBrand);
  };
  const handleSelectChangeCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  // const filteredData = datas.filter(({brand, category, }) =>
  const filteredData = datas.filter(
    (data) =>
      //  ( selectedBrand ? brand === selectedBrand.value : true ||
      //   selectedCategory ? category === selectedCategory.value : true ||
      //   selectedCategory ? rating === selectedCategory.value : true )

      (selectedBrand && selectedBrand.value !== "products"
        ? data.brand === selectedBrand.value
        : true) ||
      (selectedCategory && selectedCategory.value !== "products"
        ? data.category === selectedCategory.value
        : true)
    // (selectedCategory && selectedCategory.value === "4.44" ? parseFloat(rating) >= 4.44 : true)
    // (selectedCategory && selectedCategory.value !== "products" ? rating === selectedCategory.value : true)
  );

  return (
    <>
      <section
        class="relative w-full  h-[30vh]  flex items-center justify-center
  bg-hero-pattern    bg-cover bg-center bg-no-repeat  "
      >
        <SearchForm />
      </section>

      <section class="bg-slate-200 min-h-[calc(100vh-200px)] w-full py-10">
        <div class="px-8 ">
          <div class="grid grid-cols-[25%_1fr] gap-4 ">
            <div class="bg-white rounded-[20px] pt-5 ">
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? "transparent"
                      : "transparent",
                  }),
                }}
                class={{
                  control: (state) =>
                    state.isFocused ? "border-red-600" : "border-grey-300",
                }}
                options={optionsBrand}
                value={selectedBrand}
                onChange={handleSelectChangeBrand}
                isMulti={false} // Set to true if you want to allow multiple selections
                placeholder="Регіон"
              />
              {/* unstyled */}
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? "transparent"
                      : "transparent",
                  }),
                }}
                options={optionsCategory}
                value={selectedCategory}
                onChange={handleSelectChangeCategory}
                isMulti={false} // Set to true if you want to allow multiple selections
                placeholder="Місто"
              />

              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? "transparent"
                      : "transparent",
                  }),
                }}
                options={optionsKind}
                value={optionsKind}
                onChange={handleSelectChangeCategory}
                isMulti={false} // Set to true if you want to allow multiple selections
                placeholder="Вид нотаріальної діяльності"
              />

              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? "transparent"
                      : "transparent",
                  }),
                }}
                options={optionsExperience}
                value={optionsExperience}
                onChange={handleSelectChangeCategory}
                isMulti={false} // Set to true if you want to allow multiple selections
                placeholder="Досвід роботи"
              />
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? "transparent"
                      : "transparent",
                  }),
                }}
                options={optionsLanguages}
                value={optionsLanguages}
                onChange={handleSelectChangeCategory}
                isMulti={false} // Set to true if you want to allow multiple selections
                placeholder="Мови спілкування"
              />
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? "transparent"
                      : "transparent",
                  }),
                }}
                options={optionsAccessibility}
                value={optionsAccessibility}
                onChange={handleSelectChangeCategory}
                isMulti={false} // Set to true if you want to allow multiple selections
                placeholder="Доступність для інвалідів"
              />
            </div>
            <div class="h-full w-auto ">
              <Datas
                // datas={datas}
                datas={currentDatas}
                loading={loading}
                filteredData={filteredData}
              />
              <Pagination
                datasPerPage={datasPerPage}
                totalDatas={datas.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
