import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = (props) => {
  const links = [
    { id: 1, link: "home" },

    { id: 2, link: "about" },
    { id: 4, link: "terms & conditions" },
    { id: 4, link: "privacy policy" },

  

    { id: 5, link: "contact" },
    { id: 3, link: "admin" },
  ];
  return (
    <div className="fixed w-screen z-30">
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center">
            <img
              src="/assets/gamaru.png"
              class="h-12 mr-3"
              alt="Flowbite Logo"
            />
          </a>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {links.map((link) => {
                return (
                  <li>
                    <Link to={link.link} smooth duration={500}>
                      <a
                        href="#"
                        class="capitalize hover:text-purple-600 block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-gray-300"
                      >
                        {link.link}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            onClick={() => {
              props.setNav(!props.nav);
            }}
            className="cursor-pointer text-gray-600 z-20 md:hidden"
          >
            {props.nav ? (
              <FaTimes size={30}></FaTimes>
            ) : (
              <FaBars size={30}></FaBars>
            )}
          </div>
        </div>
      </nav>

      {props.nav && (
        <nav className="flex md:hidden align-top justify-end z-10 ">
          <div className="h-full w-52 bg-gray-900 ">
            <ul class="font-medium flex flex-col p-4 md:p-0  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-900">
              {links.map((link) => {
                return (
                  <li>
                    <Link to={link.link} smooth duration={500}>
                      <a
                        href="#"
                        class="capitalize hover:text-teal-50 block py-3 pl-3 pr-4 text-whit rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      >
                        {link.link}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
