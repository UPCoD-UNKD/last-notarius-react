import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header class="bg-blue-800 py-3">
      <div class="px-10 ">
        <div class="flex items-center ">
          <NavLink href="/" class="border-b border-b-transparent" >
            <span  class="text-2xl text-white font-bold  ">
            е-Нотаріус
            </span>
     
          </NavLink>

          <div class="ml-60 flex gap-10 text-white ">
            <NavLink to="/" class="active  hover:text-white/50 transition-all">
              {/* border-b-2 border-blue-500 */}
            
                Головна
             
            </NavLink>
            <NavLink to="/personal_office" class=" hover:text-white/50 transition-all">
             
                Персональний кабінет
              
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
