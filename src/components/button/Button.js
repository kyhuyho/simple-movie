import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({
  kind,
  children,
  full = false,
  to,
  className = "",
  ...props
}) => {
  let bgButton = "";
  switch (kind) {
    case "primary":
      bgButton = "bg-[#f62682]";
      break;
    case "secondary":
      bgButton = "bg-[#7D6AFF]";
      break;
    default:
      break;
  }
  if (to)
    return (
      <NavLink to={to}>
        <button
          className={`px-6 py-3 text-lg font-semibold rounded-md hover:bg-opacity-40 transition-all max-[1439px]:text-base max-[1279px]:px-5 max-[767px]:text-xs max-[767px]:px-3 max-[767px]:py-2 ${className} ${bgButton} ${
            full ? "w-full" : ""
          }`}
          {...props}
        >
          {children}
        </button>
      </NavLink>
    );
  return (
    <button
      className={`px-6 py-3 text-lg hover:bg-opacity-40 transition-all font-semibold rounded-md max-[1439px]:text-base max-[1279px]:px-5 max-[767px]:text-xs max-[767px]:px-3 max-[767px]:py-2 ${className} ${bgButton} ${
        full ? "w-full" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
