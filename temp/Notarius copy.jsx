import React, { useState,  } from "react";


import datanot from "../src/datanot.json";
import DatasNotarius from "../src/components/DatasNotarius";
import Select from "react-select";
import PaginationNotar from "../src/components/PaginationNotar";



// let totalRating = [];
// for (const data of datanot.Notar) {
//   console.log(data);
//   totalRating.push(data);
// }

// console.log(totalRating);
console.log(datanot);
console.log(datanot.Notar);



// console.log(datanot.Notar);
// const datanot2 = datanot.Notar.REGION
const optionsRegion = [
  { value: "Регіон", label: "Регіон" },
  { value: "Херсонська обл.", label: "Херсонська обл." },
  { value: "Волинська обл.", label: "Волинська обл." },
  { value: "Київська обл.", label: "Київська обл." },
];
const optionsCity = [
  { value: "Місто", label: "	Місто" },
  { value: "Іванівка", label: "Іванівка" },
  { value: "Іваничі", label: "Іваничі" },
  { value: "Іванків", label: "Іванків" },
];
const optionsKind = [
  { value: "", label: "Вид нотаріальної діяльності" },
  { value: "смт.", label: "смт." },
  { value: "м.", label: "м." },
];


const optionsRating = [
  { value: "", label: "Рейтинг користувачів" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },

];

const optionsExperience = [
  { value: "", label: "Досвід роботи" },
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  { value: "15", label: "15" },
];

const optionsLanguages = [
  { value: "", label: "Мови спілкування" },
  { value: "Українська", label: "Українська" },
  { value: "Англійська", label: "Англійська" },
];

const optionsAccessibility = [
  { value: "", label: "Доступність для інвалідів" },
  { value: "Падус в наявності", label: "Падус в наявності" },
  { value: "Падус відсутній", label: "Падус відсутній" },
];
const optionsWorkTime = [
  { value: "", label: "	Час роботи" },
  { value: "08:00 - 17:00", label: "08:00 - 17:00" },
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
const optionsPriceRange = [
  { value: "", label: "	Ціновий діапазон" },
  { value: "", label: "" },
  { value: "", label: "" },
];


const Notarius = () => {
  const datasNotar = datanot.Notar
  // console.log(datasNotar);

  const optionsSummons = [
    { value: "Виклик нотаріуса", label: "	Виклик нотаріуса" },
    { value: "На дім", label: "На дім" },
    { value: "В офіс", label: "В офіс" },
  ];

  const [selectedRegion, setSelectedRegion] = useState(optionsRegion);
  const [selectedCity, setSelectedCity] = useState(optionsCity);
  const [selectedKind, setSelectedKind] = useState(optionsKind);
  const [selectedRating, setSelectedRating] = useState(optionsRating);
  const [selectedExperience, setSelectedExperience] = useState(optionsExperience);
  const [selectedLanguages, setSelectedLanguages] = useState(optionsLanguages);
  const [selectedAccessibility, setSelectedAccessibility] = useState(optionsAccessibility);
  const [selectedWorkTime, setSelectedWorkTime] = useState(optionsWorkTime);
  const [selectedOnlineServices, setSelectedOnlineServices] = useState(optionsOnlineServices);
  const [selectedUrgentServices, setSelectedUrgentServices] = useState(optionsUrgentServices);
  const [selectedReviews, setSelectedReviews] = useState(optionsReviews);
  const [selectedPriceRange, setSelectedPriceRange] = useState(optionsPriceRange);
  const [selectedSummons, setSelectedSummons] = useState(optionsSummons);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [datas, ] = useState([]);
  const [loading, ] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [datasPerPage, setDataPerPage] = useState(5);
  const [datasPerPage] = useState(100);

  //Get current datas
  const indexOfLastDatas = currentPage * datasPerPage;
  const indexOfFirstDatas = indexOfLastDatas - datasPerPage;
  const currentDatas = datas.slice(indexOfFirstDatas, indexOfLastDatas);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Selecte
  const handleSelectChangeRegion = (selectedRegion) => {
    setSelectedRegion(selectedRegion);
  };
  const handleSelectChangeCity = (selectedCity) => {
    setSelectedCity(selectedCity);
  };
  const handleSelectChangeKind = (selectedKind) => {
    setSelectedKind(selectedKind);
  };
  const handleSelectChangeRating = (selectedRating) => {
    setSelectedRating(selectedRating);
  };
  const handleSelectChangeExperience = (selectedExperience) => {
    setSelectedExperience(selectedExperience);
  };
  const handleSelectChangeLanguages = (selectedLanguages) => {
    setSelectedLanguages(selectedLanguages);
  };
  const handleSelectChangeAccessibility = (selectedAccessibility) => {
    setSelectedAccessibility(selectedAccessibility);
  };
  const handleSelectChangeWorkTime = (selectedWorkTime) => {
    setSelectedWorkTime(selectedWorkTime);
  };
  const handleSelectChangeOnlineServices = (selectedOnlineServices) => {
    setSelectedOnlineServices(selectedOnlineServices);
  };
  const handleSelectChangeUrgentServices = (selectedUrgentServices) => {
    setSelectedUrgentServices(selectedUrgentServices);
  };
  const handleSelectChangeReviews = (selectedReviews) => {
    setSelectedReviews(selectedReviews);
  };
  const handleSelectChangePriceRange = (selectedPriceRange) => {
    setSelectedPriceRange(selectedPriceRange);
  };
  const handleSelectChangeSummons = (selectedSummons) => {
    setSelectedSummons(selectedSummons);
  };

  // const filteredData = datas.filter(({brand, category, }) =>

  // TODO disabled
  const filteredData =  datasNotar.filter( (data) =>   

      (selectedRegion && selectedRegion.value !== "Регіон"
        ? data.REGION === selectedRegion.value
        : true) ||
      (selectedCity && selectedCity.value !== "Місто"
        ? data.City === selectedCity.value
        : true) ||
      (selectedKind && selectedKind.value !== ""
        ? data.Kind === selectedKind.value
        : true) ||
      (selectedRating && selectedRating.value !== ""
        ? data.Rating === selectedRating.value
        : true) ||
      (selectedExperience && selectedExperience.value !== ""
        ? data.Experience === selectedExperience.value
        : true) ||
      (selectedLanguages && selectedLanguages.value !== ""
        ? data.Languages === selectedLanguages.value
        : true) ||
      (selectedAccessibility && selectedAccessibility.value !== ""
        ? data.Accessibility === selectedAccessibility.value
        : true) ||
      (selectedWorkTime && selectedWorkTime.value !== ""
        ? data.WorkTime === selectedWorkTime.value
        : true) ||
      (selectedOnlineServices && selectedOnlineServices.value !== ""
        ? data.OnlineServices === selectedOnlineServices.value
        : true) ||
      (selectedUrgentServices && selectedUrgentServices.value !== ""
        ? data.UrgentServices === selectedUrgentServices.value
        : true) ||
      (selectedReviews && selectedReviews.value !== ""
        ? data.Reviews === selectedReviews.value
        : true) ||
      (selectedPriceRange && selectedPriceRange.value !== ""
        ? data.PriceRange === selectedPriceRange.value
        : true) ||
      (selectedSummons && selectedSummons.value !== ""
        ? data.Summons === selectedSummons.value
        : true)
        
   ) ;

  
 

  return (
    // <div class="bg-slate-200 min-h-[calc(100vh-200px)] w-full py-10">
    //   <div class="px-10">
    //     <h1>Notarius</h1>
    //   </div>

    //   <ul>
    //     {notars.map((data) => (
    //       <li key={data.id}>
    //         <h3>{data.FIO}</h3>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <section class="bg-white min-h-[calc(100vh-200px)] w-full py-10">
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
           
            options={optionsRegion}
            value={optionsRegion}
            onChange={handleSelectChangeRegion}
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
            options={optionsCity}
            value={optionsCity}
            onChange={handleSelectChangeCity}
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
            onChange={handleSelectChangeKind}
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
            options={optionsPriceRange}
            value={optionsPriceRange}
            onChange={handleSelectChangePriceRange}
            isMulti={false} // Set to true if you want to allow multiple selections
            placeholder="Ціновий діапазон"
          />
          <Select
            // styles={{
            //   control: (baseStyles, state) => ({
            //     ...baseStyles,
            //     borderColor: state.isFocused
            //       ? "transparent"
            //       : "transparent",
            //   }),
            // }}
            options={optionsSummons}
            value={optionsSummons}
            onChange={handleSelectChangeSummons}
            isMulti={false} // Set to true if you want to allow multiple selections
            placeholder=""
          />

<Select options={options} />
        </div>



        <div class="h-full w-auto ">
          <DatasNotarius
            // datas={datas}
            datasNotar={currentDatas}
            loading={loading}
            filteredData={filteredData}
          />
          <PaginationNotar
            datasPerPage={datasPerPage}
            totalDatas={datasNotar.length}
          
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Notarius;







