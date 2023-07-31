import React from "react";
import Button from "../components/button/Button";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-7 max-[767px]:gap-y-4">
      <NavLink to="/">
        <img srcSet="./404.png 2x" alt="" />
      </NavLink>
      <p className="text-5xl font-semibold max-[767px]:text-3xl">
        Oops! Page not found
      </p>
      <Button kind="secondary" to="/">
        Back to home
      </Button>
    </div>
  );
};

export default NotFoundPage;
