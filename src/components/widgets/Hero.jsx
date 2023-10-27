const Hero = () => {
  return (
    <section
      class="relative top-[-72px] w-full px-5 py-[100px] h-[calc(100vh+72px)] lg:h-[60vh]  flex items-center justify-center
  bg-hero-pattern    bg-cover bg-center bg-no-repeat 
   "
    >
      <div class="   absolute   top-0    w-full   inset-0  bg-black/[57%] "></div>
      <div class="flex flex-col  justify-center gap-4 lg:gap-10 z-[1]">
        <h1 class="text-[32px] text-center font-semibold text-white">
          РЕЄСТР НОТАРІУСІВ УКРАЇНИ
        </h1>
        <p class="text-white text-[20px] font-[200px] text-center">
          Legal solution
        </p>
      </div>
    </section>
  );
};

export default Hero;
