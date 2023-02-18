import React from "react";

const Button = ({
  children,
  onClick,
  className,
  bgColor = "primary",
  ...props
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      className={`px-6 py-3 text-xl font-medium capitalize rounded-lg ${bgClassName} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
