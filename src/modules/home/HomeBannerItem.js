import React, { Fragment } from "react";
import Button from "../../components/button/Button";
import "../../styles/stylesOverview.scss";

const HomeBannerItem = ({ data }) => {
  return (
    <Fragment>
      <div className="w-full">
        <div className="absolute inset-0 bg-black rounded-md bg-opacity-40"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          alt=""
          className="w-full h-[700px] object-cover rounded-md max-[1439px]:h-[600px] max-[1279px]:h-[500px] max-[1023px]:h-[400px] max-[767px]:h-[250px]"
        />
      </div>
      <div className="w-[600px] absolute bottom-10 left-10 max-[1279px]:w-[500px] max-[1023px]:w-[400px] max-[767px]:w-[300px] max-[767px]:left-2 max-[767px]:bottom-10">
        <h1 className="mb-5 text-5xl font-semibold max-[1279px]:text-4xl max-[767px]:mb-2 max-[767px]:text-base">
          {data?.title}
        </h1>
        <p className="mb-5 text-sm font-normal leading-6 overview max-[767px]:text-xs">
          {data?.overview}
        </p>
        <Button kind="secondary" to={`/movie/${data?.id}`}>
          Watch now
        </Button>
      </div>
    </Fragment>
  );
};

export default HomeBannerItem;
