import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo-notarius_02.png";
import Container from "../common/Conteiner";
import ToggleMenu from "../features/ToggleMenu";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false)
  useEffect(() => {
    // documentClickHandler.current = e => {
    //   console.log('documentClickHandler')
      
    //   if (popupRef.current.contains(e.target)) return

      setIsShown(false)
    //   removeDocumentClickHandler()
    // }
  }, [])

  return (
    // fixed w-full z-10  bg-blue-800
    <header class=" py-3  bg-gradient-to-b from-[#1E40AF] via-[#1E40AF] to-[#0E1D82]">
      <Container>
        <div class="flex items-center justify-between lg:justify-normal ">
          {/*  */}
          <Link to="/" class=" w-[200px] h-auto border-b-1 border-b-blue-800 hover:scale-90 transition-all">
            {/* <span class="text-2xl text-white font-bold border-b-4 border-b-blue-800 ">
              е-Нотаріус
            </span> */}
            <img width={200} height={30} src={logo} alt="logo" />
          </Link>

          <div class={`  lg:block ${isShown ? "block absolute top-[54px] left-0 w-full h-screen bg-gradient-to-b from-[#1E40AF] via-[#1E40AF] to-[#0E1D82] z-[5] p-10 transition-all text-[20px] text-white/70 hover:text-white  " : "hidden"} `} >
            <div class=" lg:ml-10 xl:ml-60 flex flex-col lg:flex-row gap-5 xl:gap-10 text-white "
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
