
// import React, { useState, useEffect } from "react";
import React from "react";

// import {

//   useQuery,
// } from "react-query";

// import Select from "react-select";

// import axios from "axios";

// import Datas from "../Datas";
// import Pagination from "../Pagination";
import SearchForm from "../components/features/SearchForn";

// const optionsBrand = [
//   { value: "products", label: "Регіон" },
//   { value: "Apple", label: "Херсонська обл." },
//   { value: "Samsung", label: "Волинська обл." },
//   { value: "OPPO", label: "Київська обл." },
// ];


const Home = () => {
  // const [selectedOption, setSelectedOption] = useState(optionsBrand);
  // const [selectedBrand, setSelectedBrand] = useState(optionsBrand);
  

  // const [datas, setDatas] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // // const [datasPerPage, setDataPerPage] = useState(5);
  // const [datasPerPage] = useState(5);



  



  //Get current datas
  // const indexOfLastDatas = currentPage * datasPerPage;
  // const indexOfFirstDatas = indexOfLastDatas - datasPerPage;
  // const currentDatas = datas.slice(indexOfFirstDatas, indexOfLastDatas);

  // // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // //Selecte
  // const handleSelectChangeBrand = (selectedBrand) => {
  //   setSelectedBrand(selectedBrand);
  // };
 
 

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
              {/* <Select
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
              /> */}
           
            </div>
            <div class="h-full w-auto ">
              {/* <Datas
                // datas={datas}
                datas={currentDatas}
                loading={loading}
                filteredData={filteredData}
              />
              <Pagination
                datasPerPage={datasPerPage}
                totalDatas={datas.length}
                paginate={paginate}
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
