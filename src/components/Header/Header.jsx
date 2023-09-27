import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header class="bg-blue-800 py-3">
      <div class="px-10 ">
        <div class="flex items-center ">
          <NavLink href="/">
            <h2 class="text-2xl text-white font-bold ">е-Нотаріус</h2>
          </NavLink>

          <div class="ml-60 flex gap-10 text-white ">
            <NavLink to="/">
              <span class="border-b-2 border-blue-500 hover:text-white/50 transition-all">
                Головна
              </span>
            </NavLink>
            <NavLink to="/personal_office">
              <span class="border-b-2 border-blue-500 hover:text-white/50 transition-all">
                Персональний кабінет
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
