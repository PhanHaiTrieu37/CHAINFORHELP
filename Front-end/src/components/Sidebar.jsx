import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiFilterAlt } from "react-icons/bi";
import { logo, logo_icon, sun } from "../assets";
import { navlinks } from "../constants";
import Filter from "./Filter";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-white"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
      />
    )}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [filterModal, setFilterModal] = useState(false);
  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh] ">
      <Link to="/">
        <img className="h-10 w-18" src={logo_icon} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center shadow-lg rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col items-center justify-center gap-3 bg-stone-50">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
        <button onClick={() => setFilterModal(true)}>
          <Icon styles=" bg-white shadow-secondary " imgUrl={sun} />
        </button>
        {filterModal && <Filter visible={setFilterModal} />}
      </div>
    </div>
  );
};

export default Sidebar;
