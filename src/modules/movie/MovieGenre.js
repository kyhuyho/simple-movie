import React from "react";
import Heading from "../../components/heading/Heading";
import "../../styles/stylesOverview.scss";

const MovieGenre = ({ data }) => {
  if (!data) return null;
  return (
    <div className="container mt-10 max-[1023px]:mt-5">
      <Heading textCenter={true}>{data?.title}</Heading>
      <div className="flex flex-wrap items-center justify-center mt-10 gap-5 max-[1023px]:mt-5">
        {data?.genres?.length > 0 &&
          data?.genres.map((genre) => (
            <span
              key={genre.id}
              className="inline-block text-lg border border-[#f62682] px-7 py-2 rounded-3xl max-[767px]:text-sm max-[767px]:px-4"
            >
              {genre?.name}
            </span>
          ))}
      </div>
      <p className="mt-10 font-normal leading-7 text-center overview max-[1023px]:mt-5">
        {data?.overview}
      </p>
    </div>
  );
};

export default MovieGenre;
