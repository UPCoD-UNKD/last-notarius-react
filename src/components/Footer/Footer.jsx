import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-blue-800 py-10 text-white ">
      <div class="px-10 ">
        <div class="flex justify-between  ">
          <div>
            <NavLink href="/" lang="en">
              <h3 class=" font-bold">LOGO</h3>
            </NavLink>

            <address>
              <ul>
                <li>
                  <a
                    href="mailto:"
                    title="Click on the link to send the letter."
                  >
                    user@gmail.com
                  </a>
                </li>
              </ul>
            </address>
          </div>

          <div>
            <h3 class="text-white">Слідуй за нами</h3>

            <ul></ul>
          </div>
        </div>

        <div>Copyright © 2022 . Created by .</div>
      </div>
    </footer>
  );
};

export default Footer;
