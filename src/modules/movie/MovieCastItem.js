import React from "react";

const MovieCastItem = ({ data }) => {
  if (!data) return null;
  return (
    <div className="w-full h-[500px] relative group max-[1279px]:h-[320px]">
      <div className="absolute inset-0 transition-all bg-black bg-opacity-0 group-hover:bg-opacity-40"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${data?.profile_path}`}
        alt=""
        className="object-cover w-full h-full"
      />
      {data?.profile_path && (
        <h3 className="absolute invisible text-2xl text-center transition-all -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 group-hover:opacity-100 group-hover:visible">
          {data?.name}
        </h3>
      )}
    </div>
  );
};

export default MovieCastItem;
