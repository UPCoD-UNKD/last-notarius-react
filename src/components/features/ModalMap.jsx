const ModalMap = ({ setIsOpen }) => {
  return (
    <>
    {/* blur-[10px] */}
      <div
        class="absolute top-0 bottom-[-400px] left-0  z-[5] bg-black/50  w-full "
        onClick={() => {
            // document.body.classList.toggle("lockBody")
            setIsOpen(false)}}
      />

     
        <div class=" fixed  flex z-10 top-[50%] lg:left-[50%] lg:translate-x-[-50%] translate-y-[-50%] border-4 border-white/70 ">
         
            <iframe
            class="w-[80vw] h-[80vh] "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4419983.121085619!2d32.8270128286428!3d48.327977242625856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2z0KPQutGA0LDQuNC90LA!5e1!3m2!1sru!2sua!4v1696952641615!5m2!1sru!2sua"
              width="100%"
              height="100%"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
         <div class="bg-white p-2 rounded-full absolute -top-4 -right-4 ">

        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class=" h-5 w-5"
            onClick={() => {
                // document.body.classList.toggle("lockBody")
                setIsOpen(false)}}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
          </div>
        </div>
      
    </>
  );
};
export default ModalMap;
