import { useState } from "react";

import logo from "../assets/images/Logo.png";
import menuIcon from "../assets/images/Menu.svg";

const HeaderHome: React.FC = () => {
  const navBarItem: string[] = [
    "خانه",
    "مقاصد گردشگری",
    "نقشه",
    "بلاگ",
    "درباره ما",
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        "xs:h-20 2xs:h-15 bg-primary flex justify-between lg:px-12 2xs:px-5 xs:px-8 py-3"
      }
    >
      <a href="#" className="duration-300 hover:scale-110">
        <img
          className="xs:w-9 xs:h-12 2xs:w-6 2xs:h-8"
          alt="Safar Soon"
          src={logo}
        />
      </a>
      <div className="py-2 flex flex-row 2xs:hidden md:flex">
        {navBarItem.map((item) => (
          <a
            href="#"
            className="text-white 2xs:mx-3 smd:mx-5 px-4 py-2 rounded-3xl transition duration-300 hover:bg-secondary hover:text-background hover:scale-110"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="relative 2xs:flex md:hidden justify-center items-center">
        <button
          type="button"
          className="w-10 h-10 inline-flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={menuIcon} alt="Menu Icon" className="w-10 h-10" />
        </button>

        {isOpen && (
          <div className="absolute z-10 -left-4 2xs:top-12 xs:top-16 mt-2 w-56 rounded-md shadow-lg bg-primary ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {navBarItem.map((item) => (
                <a
                  href="#"
                  className="text-background block px-4 py-2 mx-1 rounded-lg text-sm text-gray-700 transition duration-300 hover:bg-background hover:text-black"
                  role="menuitem"
                >
                  {item}
                </a>
              ))}
              <a
                href="#"
                className="text-background block px-4 py-2 mx-1 rounded-lg text-sm text-gray-700 transition duration-300 hover:bg-background hover:text-black"
              >
                تماس با ما
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="py-2 flex flex-row 2xs:hidden md:flex">
        <a
          href="#"
          className="text-background ml-5 border border-background px-4 py-2 rounded transition duration-300 hover:bg-background hover:text-secondary hover:scale-110"
        >
          تماس با ما
        </a>
      </div>
    </div>
  );
};
export default HeaderHome;
