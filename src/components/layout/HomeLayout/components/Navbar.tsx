import React from "react";
import Logo from "../../../../assets/images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { DarkMode } from "./DarkMode";
import { UserProfile } from "./UserProfile";
import { AlignJustify, Bell, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PATH from "../../../../config/path";

const Menu = [
  {
    id: 1,
    name: "Rental Listings",
    link: PATH.LANDLORD_DASHBOARD,
  },
  {
    id: 2,
    name: "Tenant Portal",
    link: PATH.LANDLORD_DASHBOARD,
  },
  {
    id: 3,
    name: "List your Oasis",
    link: PATH.LANDLORD_DASHBOARD,
  },
];
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 px-36">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a
                href="/"
                className="font-bold text-2xl sm:text-3xl flex gap-2"
                onClick={() => {
                  navigate("/");
                }}
              >
                <img src={Logo} alt="Logo" className="w-20" />
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="block whitespace-nowrap text-[#1f1f1f] text-[18px] font-semibold font-barlow capitalize px-2 py-2 pb-1 border-b-4 border-transparent hover:text-[#127782]"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button> */}
            </div>
            <div className="flex items-center gap-2">
              <DarkMode />
              <Heart className="w-6 h-6 text-[#127782]" />
              <Bell className="w-6 h-6 text-[#127782]" />
              <UserProfile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
