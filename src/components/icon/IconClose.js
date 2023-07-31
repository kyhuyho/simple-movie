import React from "react";

const IconClose = ({ onClick = () => {} }) => {
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </span>
  );
};

export default IconClose;
