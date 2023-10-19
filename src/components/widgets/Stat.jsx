const Stat = () => {
  return (
    <div class="border__top  py-10 mt-10 mx-auto  lg:px-4  grid lg:grid-cols-[35%_1fr]">
      {/* <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> */}
      <h2 class="text-[24px] lg:text-2xl font-medium  text-neutral-800">Статистика діяльності</h2>
      <div class="xl:flex gap-10 xl:items-end xl:ml-auto">
        <dl class="flex items-center p-4 py-1 bg-white   rounded-lg xl:min-w-[229px] border-2 border-slate-300">
          <dd class="text-[40px] lg:text-[64px]  font-semibold text-accent1">80+</dd>
          <dt class="ml-5  text-[16px]   font-medium text-gray-500 ">
            Записів
          </dt>
        </dl>

        
          <dl class="mt-5 flex items-center p-4  py-1 bg-white border-2 border-slate-300 rounded-lg">
            <dd class=" text-[40px] lg:text-[64px]  font-semibold text-accent1">50+</dd>
            <dt class="ml-5   text-[16px]   font-medium text-gray-500 ">
              Консультацій
            </dt>
          </dl>
        
        
      </div>
    </div>
  );
};

export default Stat;
