const Stat = () => {
  return (
    <div class="border-t border-t-black/50 mt-10  py-10 pb-20 mx-auto  lg:px-4  grid lg:grid-cols-[35%_1fr]">
      {/* <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> */}
      <h2 class="text-[24px] lg:text-3xl font-medium  text-neutral-800">Статистика діяльності</h2>
      <div class="xl:flex gap-10">
        <dl class="flex items-center p-5  bg-white  shadow-xl rounded-lg xl:min-w-[354px]">
          <dd class="text-[40px] lg:text-[80px]  font-semibold text-[#FF7613]">80+</dd>
          <dt class="ml-5 border-b border-b-black/50  text-[18px] lg:text-[24px]  font-medium text-gray-500 ">
            Записів
          </dt>
        </dl>

        
          <dl class="mt-5 flex items-center p-5 bg-white  shadow-xl rounded-lg">
            <dd class=" text-[40px] lg:text-[80px]  font-semibold text-[#FF7613]">50+</dd>
            <dt class="ml-5 border-b border-b-black/50  text-[18px] lg:text-[24px]  font-medium text-gray-500 ">
              Консультацій
            </dt>
          </dl>
        
        
      </div>
    </div>
  );
};

export default Stat;
