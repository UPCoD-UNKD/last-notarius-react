import React, { useState, useEffect } from "react";
// import axios from "axios";

import { db } from "../firebase";
import {ref,   onValue} from "firebase/database";

// import datanot from "../datanot.json";
import DatasNotarius from "../components/widgets/DatasNotarius";
import Select from "react-select";
import PaginationNotar from "../components/features/PaginationNotar";
// import SearchForn from "../components/features/SearchForn";

// import { getProducts } from "../fakeAPI";

// import MultiRangeSlider from "../components/features/multiRangeSlider/MultiRangeSlider";
import Container from "../components/common/Conteiner";
// import "./styles.css";
// import IconXMark from "../components/icons/IconXMark";

const optionsRegion = [
  { value: "", label: "Регіон" },
  { value: "Херсонська обл.", label: "Херсонська обл." },
  { value: "Волинська обл.", label: "Волинська обл." },
  { value: "Київська обл.", label: "Київська обл." },
  { value: "Одеська обл.", label: "Одеська обл." },
  { value: "Львівська обл.", label: "Львівська обл." },
  { value: "Харківська обл.", label: "Харківська обл." },
  { value: "Донецька обл.", label: "Донецька обл." },
  { value: "Запорізька обл.", label: "Запорізька обл." },
  // { value: "Запорізька обл.", label: "Запорізька обл." },
];

const optionsCity = [
  { value: "", label: "	Місто" },
  { value: "Іванівка", label: "Іванівка" },
  { value: "Іваничі", label: "Іваничі" },
  { value: "Іванків", label: "Іванків" },
  { value: "Одеса", label: "Одеса" },
  { value: "Львів", label: "Львів" },
  { value: "Харків", label: "Харків" },
  { value: "Донецьк", label: "Донецьк" },
  { value: "Запоріжжя", label: "Запоріжжя" },
];

// const optionsKind = [
//   { value: "", label: "Вид нотаріальної діяльності" },
//   { value: "смт.", label: "смт." },
//   { value: "м.", label: "м." },
// ];
const optionsNameObj = [
  { value: "", label: "Вид нотаріальної діяльності" },
  { value: "Державна нотаріальна контора", label: "Державна нотаріальна контора" },
  { value: "Приватна нотаріальна контора", label: "Приватна нотаріальна контора" },
];

const optionsRating = [
  { value: "", label: "Рейтинг користувачів" },
  { value: "3.0", label: "3.0" },
  { value: "4.0", label: "4.0" },
  { value: "4.3", label: "4.3" },
  { value: "4.5", label: "4.5" },
  { value: "4.6", label: "4.6" },
  { value: "4.8", label: "4.8" },
  { value: "5", label: "5" },
];

const optionsExperience = [
  { value: "", label: "Досвід роботи" },
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "18", label: "18" },
];

const optionsLanguages = [
  { value: "", label: "Мови спілкування" },
  { value: "Українська", label: "Українська" }, 
  { value: "Українська, Англійська", label: "Українська, Англійська" }, 
  { value: "Українська, Російська, Англійська", label: "Українська, Російська, Англійська" },
  { value: "Українська, Польська, Англійська", label: "Українська, Польська, Англійська" },
  { value: "Українська, Російська", label: "Українська, Російська" },
  { value: "Українська, Англійська", label: "Українська, Англійська" },
];

const optionsAccessibility = [
  { value: "", label: "Доступність для інвалідів" },
  { value: "Пандус в наявності", label: "Пандус в наявності" },
  { value: "Пандус відсутній", label: "Пандус відсутній" },
];
const optionsWorkTime = [
  { value: "", label: "	Графік роботи" },
  { value: "08:00 - 17:00", label: "08:00 - 17:00" },
  { value: "08:30 - 17:30", label: "08:30 - 17:30" },
  { value: "09:00 - 18:00", label: "09:00 - 18:00" },
];
const optionsOnlineServices = [
  { value: "", label: "	Онлайн-послуги" },
  { value: "Онлайн", label: "Онлайн" },
  { value: "", label: "" },
];
const optionsUrgentServices = [
  { value: "", label: "	Термінові послуги" },
  { value: "Терміново", label: "Терміново" },
  { value: "", label: "" },
];
const optionsReviews = [
  { value: "", label: "	Відгуки" },
  { value: "Позитивні", label: "Позитивні" },
  { value: "Негативні", label: "Негативні" },
];

const optionsSummons = [
  { value: "Виклик нотаріуса", label: "	Виклик нотаріуса" },
  { value: "На дім", label: "На дім" },
  { value: "В офіс", label: "В офіс" },
];
const optionsPriceRange = [
  { value: "", label: "	Ціновий діапазон" },
  { value: "800-1500", label: "800-1500" },
  { value: "800-1800", label: "800-1800" },
  { value: "900-2000", label: "900-2000" },
  { value: "1000-2500", label: "1000-2500" },
  { value: "1000-3000", label: "1000-3000" },
  { value: "1500-5000", label: "1500-5000" },
];

// const options = [
//   { value: "smartphones", label: "Іванівська державна нотаріальна контора" },
//   { value: "4.44", label: "Іваничівська державна нотаріальна контора" },
// ];

// const Notarius = () => {
const Home = () => {
  // const products = getProducts();
  // const datasNotar = datanot.Notar
  // const datasNotar = datanot.products;
 

  const [isShownFilters, setIsShownFilters] = useState(false);
  const [notaryData, setNotaryData] = useState({
    notaries: [] // Initialize an empty array to store notaries
  });

  // const datasNotar = datanot.notaries;
  const datasNotar = notaryData.notaries;

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

  useEffect(() => {
    setIsShownFilters(false);
  }, []);



  // console.log(datasNotar);
  /**
   * SearchInput
   */
  // const [searchInput, setSearchInput] = useState("");
  // const [filteredDataSearch, setFilteredDataSearch] = useState([]);
  // // Handle changes in the search input
  // const handleSearchInputChange = (e) => {
  //   setSearchInput(e.target.value);
  // };

  //   // Filter the data based on the search input
  //   useEffect(() => {
  //     const filteredResults = datasNotar.filter((data) =>
  //       data.name.toLowerCase().includes(searchInput.toLowerCase())
  //     );
  //     setFilteredDataSearch(filteredResults);
  //   }, [searchInput]);

  // const [selectedRegion, setSelectedRegion] = useState(optionsRegion);
  // const [selectedCity, setSelectedCity] = useState(optionsCity);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  // const [selectedKind, setSelectedKind] = useState("");
  const [selectedNameObj, setSelectedNameObj] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const [selectedExperience, setSelectedExperience] = useState("");

  const [selectedLanguages, setSelectedLanguages] = useState("");
  const [selectedAccessibility, setSelectedAccessibility] = useState("");
  const [selectedWorkTime, setSelectedWorkTime] = useState("");
  const [selectedOnlineServices, setSelectedOnlineServices] = useState("");
  const [selectedUrgentServices, setSelectedUrgentServices] = useState("");
  const [selectedReviews, setSelectedReviews] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedSummons, setSelectedSummons] = useState("");

  const [isFiltered, setIsFiltered] = useState(false);

  //Selecte
  const handleSelectChangeRegion = (selectedRegion) => {
    setSelectedRegion(selectedRegion.value);
    setIsFiltered(true);
  };
  const handleSelectChangeCity = (selectedCity) => {
    setSelectedCity(selectedCity.value);
    setIsFiltered(true);
  };
  const handleSelectChangeNameObj = (selectedNameObj) => {
    setSelectedNameObj(selectedNameObj.value);
    setIsFiltered(true);
  };

  const handleSelectChangeRating = (selectedRating) => {
    setSelectedRating(selectedRating.value);
    setIsFiltered(true);
  };
  const handleSelectChangeExperience = (selectedExperience) => {
    setSelectedExperience(selectedExperience.value);
    setIsFiltered(true);
  };

  const handleSelectChangeLanguages = (selectedLanguages) => {
    setSelectedLanguages(selectedLanguages.value);
    setIsFiltered(true);
  };
  const handleSelectChangeAccessibility = (selectedAccessibility) => {
    setSelectedAccessibility(selectedAccessibility.value);
    setIsFiltered(true);
  };
  const handleSelectChangeWorkTime = (selectedWorkTime) => {
    setSelectedWorkTime(selectedWorkTime.value);
    setIsFiltered(true);
  };
  const handleSelectChangeOnlineServices = (selectedOnlineServices) => {
    setSelectedOnlineServices(selectedOnlineServices.value);
    setIsFiltered(true);
  };
  const handleSelectChangeUrgentServices = (selectedUrgentServices) => {
    setSelectedUrgentServices(selectedUrgentServices.value);
    setIsFiltered(true);
  };
  const handleSelectChangeReviews = (selectedReviews) => {
    setSelectedReviews(selectedReviews);
  };
  const handleSelectChangePriceRange = (selectedPriceRange) => {
    setSelectedPriceRange(selectedPriceRange.value);
    setIsFiltered(true);
  };
  const handleSelectChangeSummons = (selectedSummons) => {
    setSelectedSummons(selectedSummons.value);
    setIsFiltered(true);
  };

  // TODO disabled
  // console.log(selectedRegion.value);
  //   const filteredData = datasNotar.filter((data) =>
  //   (selectedRegion && selectedRegion.value !== "Регіон"
  //   ? data.region === selectedRegion.value
  //   : true) ||
  // (selectedCity && selectedCity.value !== "Місто"
  //   ? data.city === selectedCity.value
  //   : true)
  //   );
  const filteredData = isFiltered
    ? datasNotar.filter(
        (data) =>
          (selectedRegion && selectedRegion !== ""
            ? data.region === selectedRegion
            : true) &&
          (selectedCity && selectedCity !== ""
            ? data.city === selectedCity
            : true) &&
          // (selectedKind && selectedKind !== ""
          //   ? data.kind === selectedKind
          //   : true) &&
          (selectedNameObj && selectedNameObj !== ""
            ? data.nameObj === selectedNameObj
            : true) &&

          (selectedRating && selectedRating !== ""
            ? data.rating === selectedRating
            : true) &&

          (selectedExperience && selectedExperience !== ""
            ? data.expirience === selectedExperience
            : true) &&

          (selectedLanguages && selectedLanguages !== ""
            ? data.language === selectedLanguages
            : true) &&
          (selectedAccessibility && selectedAccessibility !== ""
            ? data.accessibility === selectedAccessibility
            : true) &&
          (selectedWorkTime && selectedWorkTime !== ""
            ? data.worktime === selectedWorkTime
            : true) &&
          (selectedOnlineServices && selectedOnlineServices !== ""
            ? data.onlineservices === selectedOnlineServices
            : true) &&
          (selectedUrgentServices && selectedUrgentServices !== ""
            ? data.urgentservices === selectedUrgentServices
            : true) &&
          (selectedReviews && selectedReviews !== ""
            ? data.reviews === selectedReviews
            : true) &&
          (selectedPriceRange && selectedPriceRange !== ""
            ? data.pricerange === selectedPriceRange
            : true) &&
          (selectedSummons && selectedSummons !== ""
            ? data.summons === selectedSummons
            : true)
      )
    : datasNotar;

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [datasPerPage, setDataPerPage] = useState(10);
  const [datasPerPage] = useState(10);

  // useEffect(()=>{
  //  const fetchDta = async () => {
  //   setLoading(true);
  //   const res = await axios.get('http://jsonplaceholder.typicode.com/posts/')
  //   setDatas(res.data)
  //   setLoading(false)

  //  }
  //  fetchDta();
  // })

  //  eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      // setDatas(datasNotar)
      setDatas(filteredData);
      setLoading(false);
    };
    fetchData();
    // }, [datasNotar])
  }, [filteredData]);
  console.log(filteredData);

  //Get current datas
  const indexOfLastDatas = currentPage * datasPerPage;
  const indexOfFirstDatas = indexOfLastDatas - datasPerPage;
  const currentDatas = datas.slice(indexOfFirstDatas, indexOfLastDatas);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    // relative top-[56px]
    <main class="mt-[-72px] ">
      <section class="bg-white  min-h-[calc(100vh-200px)] w-full py-5 lg:py-[44px] lg:pb-[66px] ">
        <Container>
          <div class="grid xl:grid-cols-[35%_1fr] gap-4 xl:gap-0 ">
            <div
              class={`  xl:block   ${
                isShownFilters
                  ? "block absolute pt-3 pb-[60px] left-2 z-[2] w-[95%]  top-[383px] rounded-[14px] shadow-2xl border border-black/20 lg:w-[98%] lg:top-[340px]"
                  : "hidden"
              } `}
            >
              <div
                class=" bg-slate-100 mt-[-38px] border border-black/30 hover:bg-slate-200  p-2 rounded-full mx-auto max-w-max  xl:hidden"
                onClick={() => {
                  setIsShownFilters(!isShownFilters);
                  // document.body.classList.toggle("lockBody");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class=" h-5 w-5"
                  // onClick={() => {
                  //     // document.body.classList.toggle("lockBody")
                  //     setIsOpen(false)}}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <h2 class="text-[20px] font-semibold border-l-4 border-l-accent1 pl-[24px]">
                Вибір категорій
              </h2>
              <div class="px-[30px] text-[14px] mt-[26px]">
             
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused
                        ? "transparent"
                        : "transparent",
                    }), 

                  }}
                  options={optionsRegion}
                  value={optionsRegion}
                  onChange={handleSelectChangeRegion}
                  isMulti={false} // Set to true if you want to allow multiple selections
                  placeholder="Регіон"
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
                  options={optionsCity}
                  value={optionsCity}
                  onChange={handleSelectChangeCity}
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
                  options={optionsNameObj}
                  value={optionsNameObj}
                  onChange={handleSelectChangeNameObj}
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
                  options={optionsRating}
                  value={optionsRating}
                  onChange={handleSelectChangeRating}
                  isMulti={false} // Set to true if you want to allow multiple selections
                  placeholder="	Рейтинг користувачів"
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
                  onChange={handleSelectChangeExperience}
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
                  onChange={handleSelectChangeLanguages}
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
                  onChange={handleSelectChangeAccessibility}
                  isMulti={false} // Set to true if you want to allow multiple selections
                  placeholder="Доступність для інвалідів"
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
                  options={optionsWorkTime}
                  value={optionsWorkTime}
                  onChange={handleSelectChangeWorkTime}
                  isMulti={false} // Set to true if you want to allow multiple selections
                  placeholder="	Час роботи"
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
                  options={optionsOnlineServices}
                  value={optionsOnlineServices}
                  onChange={handleSelectChangeOnlineServices}
                  isMulti={false} // Set to true if you want to allow multiple selections
                  placeholder="	Онлайн-послуги"
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
                  options={optionsUrgentServices}
                  value={optionsUrgentServices}
                  onChange={handleSelectChangeUrgentServices}
                  isMulti={false} // Set to true if you want to allow multiple selections
                  placeholder="Термінові послуги"
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
                  options={optionsReviews}
                  value={optionsReviews}
                  onChange={handleSelectChangeReviews}
                  isMulti={false} // Set to true if you want to allow multiple selections
                  placeholder="Відгуки"
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
                  options={optionsSummons}
                  value={optionsSummons}
                  onChange={handleSelectChangeSummons}
                  isMulti={false} // Set to true if you want to allow multiple selections
                  placeholder=""
                />

                {/* <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? "transparent"
                      : "transparent",
                  }),
                }}
                options={options}
                placeholder="Регіон"
              /> */}

                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused
                        ? "transparent"
                        : "transparent",
                    }),
                    
                  }}
                 
                  options={optionsPriceRange}
                  value={optionsPriceRange}
                  onChange={handleSelectChangePriceRange}
                  isMulti={false} // Set to true if you want to allow multiple selections
                  placeholder="Ціновий діапазон"
                />



                {/* <MultiRangeSlider
              
                  min={0}
                  max={1000}
                  onChange={({ min, max }) =>
                    console.log(`min = ${min}, max = ${max}`)
                  }
                /> */}
              
              </div>
            </div>

            <div class="h-full w-auto ">
              <DatasNotarius
                setIsShownFilters={setIsShownFilters}
                isShownFilters={isShownFilters}
                datasNotar={currentDatas}
                // datasNotar={filteredDataSearch}
                loading={loading}
                filteredData={filteredData}
                // products={products}
                // notarius={notaries}
              />
              <PaginationNotar
                filteredData={filteredData.length}
                datasPerPage={datasPerPage}
                totalDatas={datasNotar.length}
                paginate={paginate}
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

// export default Notarius;
export default Home;
