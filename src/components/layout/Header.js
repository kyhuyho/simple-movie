import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="fixed top-0 left-0 z-10 flex items-center justify-center w-full gap-5 py-8 text-lg font-medium bg-slate-900"
      id="header"
    >
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/movies"}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
