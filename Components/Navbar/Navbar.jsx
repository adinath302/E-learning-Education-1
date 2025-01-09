import React from "react";
import { IoMdMenu } from "react-icons/io";

// Navbar Data
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
  },
  {
    id: 3,
    title: "About us",
    path: "/about",
  },
  {
    id: 4,
    title: "Our Team",
    path: "/about",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/about",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container py-10 flex justify-between items-center">
        {/* Logo section  */}
        <div>
          <h1 className="text-2xl font-bold">The Coding Journey</h1>
        </div>

        {/* menu section  */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href="" className="inline-block py-2 px-3 hover:text-secondary relative group">
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobail hamburger section  */}
        <div>
          <IoMdMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
