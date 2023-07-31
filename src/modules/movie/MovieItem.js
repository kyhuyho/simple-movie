import React, { Fragment } from "react";
import Button from "../../components/button/Button";
import IconStar from "../../components/icon/IconStar";

const MovieItem = ({ data }) => {
  if (!data) return null;
  const date = new Date(data?.release_date).getFullYear();
  return (
    <div className="p-3 rounded-lg bg-slate-700 h-[450px] max-[1023px]:h-[400px] max-[767px]:h-[350px]">
      <div className="w-full h-[250px] max-[1023px]:h-[200px] max-[767px]:h-[170px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="pt-4 h-[calc(100%-250px)] flex flex-col justify-between max-[1023px]:h-[calc(100%-200px)] max-[767px]:h-[calc(100%-170px)]">
        <div className="w-full">
          <h2 className="text-lg font-semibold max-[1023px]:text-base">
            {data?.title}
          </h2>
          <div className="flex justify-between mt-2 text-sm max-[1023px]:text-xs">
            <span className="opacity-60">{date}</span>
            <div className="flex items-center gap-x-2">
              <span className="opacity-60">{data?.vote_average}</span>
              <IconStar></IconStar>
            </div>
          </div>
        </div>
        <Fragment>
          <Button kind="primary" full={true} to={`/movie/${data?.id}`}>
            Watch now
          </Button>
        </Fragment>
      </div>
    </div>
  );
};

export default MovieItem;
