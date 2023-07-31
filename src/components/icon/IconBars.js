import React from "react";

const IconBars = ({ onClick = () => {} }) => {
  return (
    <span
      className="fixed top-5 left-5 z-30 inline-block invisible opacity-0 max-[767px]:visible max-[767px]:opacity-100"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </span>
  );
};

export default IconBars;
