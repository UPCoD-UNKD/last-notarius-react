import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo-02.png";
import Container from "../common/Conteiner";
import ToggleMenu from "../features/ToggleMenu";
import { useWindowScroll } from "../hooks/useWindowScroll";
import SearchForm from "../features/SearchForm";

const Header = () => {
  // const [show, setShow] = useState(true);
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState(0);
  const scrollPos = useWindowScroll();

 

  // const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false)

 

  useEffect(() => {
    const trackScroll = (scrollPos) => {
      if (scrollPos === 0 && !show) {
        setShow(true);
        setPosition(scrollPos);
        return;
      }
      if (scrollPos > 10 && scrollPos > position) {
        setShow(false);
        setPosition(scrollPos);
        return;
      }
      if (scrollPos !== 0 && scrollPos <= position) {
        setShow(true);
        setPosition(scrollPos);
        return;
      }
    };
  
    // Call trackScroll directly with the current scroll position
    trackScroll(scrollPos);
  
    // No need for pos.subscribe or unsubscribe
  }, [position, show, scrollPos]);


  
  useEffect(() => {
    // documentClickHandler.current = e => {
    //   console.log('documentClickHandler')
      
    //   if (popupRef.current.contains(e.target)) return

      setIsShown(false)
    //   removeDocumentClickHandler()
    // }
  }, [])

  return (
    // fixed w-full z-10  bg-blue-800 bg-gradient-to-b from-[#1E40AF] via-[#1E40AF] to-[#0E1D82]
    //  
    <header   class={` sticky top-0  w-full z-[10] bg-black/10 backdrop-blur-[100px]  transition duration-[1000ms] ease-in-out 
     

    ${!show ? "-translate-y-[150%] bg-black/10  " : ""}
     
     
     `}>
      <Container class="">
        {/* lg:justify-normal */}
        <div class="flex items-center justify-between  lg:justify-between border-b border-b-white py-4">
          {/*  */}
          <Link to="/" class=" w-[200px] h-auto border-b-1 border-b-accent1 hover:scale-90 transition-all">
            {/* <span class="text-2xl text-white font-bold border-b-4 border-b-blue-800 ">
              е-Нотаріус
            </span> */}
            <img width={118} height={30} src={logo} alt="logo" />
          </Link>

          <div class={`  lg:block ${isShown ? "block absolute top-[54px] left-0 w-full h-screen bg-gradient-to-b from-[#1E40AF] via-[#1E40AF] to-[#0E1D82] z-[5] p-10 transition-all text-[20px] text-white/70 hover:text-white  " : "hidden"} `} >
            {/* lg:ml-10  xl:ml-60*/}
            <div class="  flex flex-col lg:flex-row  gap-5 xl:gap-7 text-[9px] text-white uppercase"
            onClick={() => {
              if(window.innerWidth < 768 ){
                setIsShown(!isShown);
              document.body.classList.toggle("lockBody");
              }

        
             
           
           
            }}
            >
              <NavLink
                to="/"
                class="active  hover:text-white/50 transition-all max-w-max inlin-block"
              >
                Головна
              </NavLink>
              <NavLink
                to="/forcitizens"
                class="active  hover:text-white/50 transition-all max-w-max inlin-block"
              >
                Для громадян
              </NavLink>
              <NavLink
                to="/ForNotaries"
                class="active  hover:text-white/50 transition-all max-w-max inlin-block"
              >
                Для нотаріусів
              </NavLink>
              <NavLink
                to="/notarialacts"
                class="active  hover:text-white/50 transition-all max-w-max inlin-block"
              >
                Нотаріальні діяння
              </NavLink>

              {/* <NavLink to="/personal_office" class=" hover:text-white/50 transition-all">
             
                Персональний кабінет
              
            </NavLink> */}
            
            </div>
          </div>
          <SearchForm />

          <div class="flex items-center  lg:hidden">
              {/* <ToggleTheme iconClass="w-6 h-6" /> */}
              {/* <ToggleMenu iconClass="w-6 h-6" /> */}
              <ToggleMenu setIsShown={setIsShown} isShown={isShown} />
            </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
