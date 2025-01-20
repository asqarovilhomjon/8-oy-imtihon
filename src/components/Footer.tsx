import { Link } from "react-router-dom";
import logo from "@/assets/images/SHOP.CO.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import payment from "@/assets/images/payments.svg";
import Stay from "@/components/Stay";

const Footer = () => {
  return (
    <>
    <Stay/>
    <footer className="mt-[50px] mb-[88px]">
      <div className="container px-20">
        <ul className="flex flex-col lg:flex-row items-start justify-between mb-[50px] gap-8 lg:gap-0">
          <li className="w-full lg:w-[248px] text-center lg:text-left">
            <Link to="/">
              <img className="mb-[25px] mx-auto lg:mx-0" src={logo} alt="Shop.co Logo" />
            </Link>
            <p className="font-[400] text-[14px] leading-[22px] mb-[20px] lg:mb-[33px]">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-2 items-center justify-center gap-[12px]">
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaGithub />
            </div>
          </li>
          {[
            { title: "Company", links: ["About", "Features", "Works", "Career"] },
            { title: "Help", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
            { title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"] },
            { title: "Resources", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] },
          ].map((section, index) => (
            <li key={index} className="flex flex-col gap-[12px] text-left max-sm:text-left">
              <strong className="font-[500] text-[16px] leading-[18px] uppercase mb-[12px] lg:mb-[20px]">
                {section.title}
              </strong>
              {section.links.map((link, idx) => (
                <span
                  key={idx}
                  className="font-[400] text-[14px] lg:text-[16px] leading-[19px] text-[#606060]"
                  >
                  {link}
                </span>
              ))}
            </li>
          ))}
        </ul>
        <hr />
        <div className="flex flex-col lg:flex-row items-center justify-between mt-[20px] gap-4 lg:gap-0 text-center lg:text-left">
          <span className="text-[12px] lg:text-[14px]">
            Shop.co © 2000-2023, All Rights Reserved
          </span>
          <img src={payment} alt="Payment Methods" className="w-[200px] lg:w-auto" />
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
