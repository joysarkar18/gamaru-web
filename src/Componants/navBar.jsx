import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = (props) => {
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "terms & conditions" },
    { id: 4, link: "privacy policy" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="fixed w-screen z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/50 shadow-md transition-all duration-300">
      <nav className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img
            src="/assets/gamaru.png"
            className="h-12 mr-3 hover:scale-105 transition-transform duration-300"
            alt="Logo"
          />
        </a>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 text-gray-900 dark:text-gray-300">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  smooth
                  duration={500}
                  className="relative group"
                >
                  <span className="capitalize text-lg hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all duration-300 cursor-pointer">
                    {link.link}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          onClick={() => props.setNav(!props.nav)}
          className="cursor-pointer text-gray-600 dark:text-gray-300 z-20 md:hidden"
        >
          {props.nav ? (
            <FaTimes
              size={30}
              className="hover:rotate-90 transition-transform duration-300"
            />
          ) : (
            <FaBars
              size={30}
              className="hover:scale-110 transition-transform duration-300"
            />
          )}
        </div>
      </nav>

      {props.nav && (
        <nav className="flex md:hidden justify-end z-10">
          <div className="h-screen w-64 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg shadow-lg border border-white/30 dark:border-gray-700 rounded-lg transition-all duration-500 ease-in-out">
            <ul className="font-medium flex flex-col p-4 space-y-6 text-white">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.link}
                    smooth
                    duration={500}
                    className="relative group"
                  >
                    <span className="capitalize text-lg bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg p-3 rounded-lg hover:bg-white/30 hover:backdrop-blur-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                      {link.link}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
