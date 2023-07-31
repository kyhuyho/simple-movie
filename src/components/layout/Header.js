import useClickOutSide from "../../hooks/useClickOutSide";
import React, { Fragment } from "react";
import IconClose from "../icon/IconClose";
import IconBars from "../icon/IconBars";
import { NavLink } from "react-router-dom";
// max-[767px]:-translate-x-full

const Header = () => {
  const { nodeRef, show, setShow } = useClickOutSide("path");
  return (
    <Fragment>
      <header
        className={`flex w-full items-center justify-center py-10 text-lg font-semibold gap-x-5 max-[767px]:fixed max-[767px]:left-0 max-[767px]:top-0 max-[767px]:bottom-0 max-[767px]:z-20 max-[767px]:flex-col max-[767px]:justify-start max-[767px]:py-24 max-[767px]:px-5 max-[767px]:w-[200px] max-[767px]:bg-slate-700 max-[767px]:transition-all max-[767px]:${
          show ? "" : "-translate-x-full"
        }`}
        ref={nodeRef}
      >
        <div className="max-[767px]:w-full max-[767px]:pb-2 max-[767px]:mb-5 max-[767px]:text-center max-[767px]:border-b max-[767px]:border-b-gray-400">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-[#f62682]" : "")}
          >
            Home
          </NavLink>
        </div>
        <div className="max-[767px]:w-full max-[767px]:pb-2 max-[767px]:mb-5 max-[767px]:text-center max-[767px]:border-b max-[767px]:border-b-gray-400">
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "text-[#f62682]" : "")}
          >
            Movies
          </NavLink>
        </div>
      </header>
      {!show ? (
        <IconBars onClick={() => setShow(!show)}></IconBars>
      ) : (
        <IconClose onClick={() => setShow(!show)}></IconClose>
      )}
    </Fragment>
  );
};

export default Header;
