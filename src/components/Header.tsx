import { useState } from "react";
import logo from "@/assets/images/SHOP.CO.svg";
import { Link } from "react-router-dom";
import Sign from "./Sign";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoPersonCircleOutline, IoCartOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.length;

  return (
    <>
      <Sign />
      <header className="py-[13px] mt-[24px]">
        <div className="container mt-[-20px] mx-auto max-w-[1240px]">
          <div className="flex items-center justify-between relative">
            <button
              className="lg:hidden text-[25px] z-20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>

            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="logo"
                className="w-[160px] mr-10 ml-[-40px] h-[22px] max-sm:w-[120px]"
              />
            </Link>

            <ul
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute top-[25px] gap-5 left-[10px] w-full bg-white shadow-md z-10 rounded-lg lg:static lg:flex sm:mt lg:items-center lg:gap-[24px] lg:shadow-none lg:bg-transparent`}
            >
              <li
                className="font-[400] text-[16px] leading-[21px] flex items-center gap-[5px] relative"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <p>Shop</p>
                <MdKeyboardArrowDown />
                {isDropdownOpen && (
                  <ul className="absolute top-[100%] left-0 bg-white shadow-md rounded-lg p-4 z-20">
                    <li className="py-2 px-4 hover:bg-gray-100 rounded">
                      <Link to="/shop/kiyimlar">Kiyimlar</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100 rounded">
                      <Link to="/shop/sport-jihozlari">Sport Jihozlari</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100 rounded">
                      <Link to="/shop/texnikalar">Texnikalar</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="font-[400] text-[16px] leading-[21px]">On Sale</li>
              <li className="font-[400] text-[16px] leading-[21px]">New Arrivals</li>
              <li className="font-[400] text-[16px] leading-[21px]">Brands</li>
            </ul>

            <div className="hidden lg:block relative mr-10 min-w-[570px]">
              <GoSearch className="absolute top-[10px] left-[22px] text-[22px]" />
              <input
                placeholder="Search for products..."
                type="text"
                className="pl-[60px] pr-[60px] outline-none w-full bg-[#F0F0F0] rounded-[20px] py-[9px]"
              />
            </div>

            <div className="flex items-center gap-[20px]">
              <Link to="/cart" className="relative">
                <IoCartOutline className="text-[25px]" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] font-bold rounded-full w-[20px] h-[20px] flex items-center justify-center">
                  {cartItemCount}
                </span>
              </Link>
              <IoPersonCircleOutline className="text-[25px]" />
            </div>
          </div>

          <div className="block lg:hidden mt-4">
            <div className="relative">
              <GoSearch className="absolute top-[10px] left-[22px] text-[22px]" />
              <input
                placeholder="Search for products..."
                type="text"
                className="pl-[60px] pr-[60px] outline-none w-full bg-[#F0F0F0] rounded-[20px] py-[9px]"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
