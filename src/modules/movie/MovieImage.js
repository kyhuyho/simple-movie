import React, { Fragment } from "react";

const MovieImage = ({ data }) => {
  if (!data) return null;
  return (
    <Fragment>
      <div className="relative w-full h-[700px] max-[1439px]:h-[600px] max-[1279px]:h-[500px] max-[1023px]:h-[400px] max-[767px]:h-[250px]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[1200px] h-[350px] mx-auto relative z-10 max-[1439px]:w-[1100px] max-[1439px]:h-[300px] max-[1279px]:w-[950px] max-[1023px]:w-[720px] max-[1023px]:h-[250px] max-[767px]:w-[320px] max-[767px]:h-[200px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
          alt=""
          className="object-cover w-full h-full mt-[-175px] max-[1439px]:mt-[-150px] max-[1023px]:mt-[-125px] max-[767px]:mt-[-100px]"
        />
      </div>
    </Fragment>
  );
};

export default MovieImage;
