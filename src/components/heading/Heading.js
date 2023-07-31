import React from "react";

const Heading = ({ children, textCenter }) => {
  return (
    <h1
      className={`text-3xl font-semibold ${
        textCenter ? "text-center" : ""
      } max-[1023px]:text-2xl max-[767px]:text-xl`}
    >
      {children}
    </h1>
  );
};

export default Heading;
