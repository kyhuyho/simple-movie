import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import { apiKey, fetcher } from "../../config";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
    fetcher
  );
  useEffect(() => {
    if (data) setMovies(data?.results);
  }, [data]);
  return (
    <div className="relative mt-[150px] banner page-container">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

const BannerItem = ({ item }) => {
  const { backdrop_path, title, overview, id } = item;
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute bottom-10 left-10">
        <h1 className="mb-5 text-5xl font-medium">{title}</h1>
        <p className="w-[600px] text-lg leading-7 mb-5">{overview}</p>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
      </div>
    </Fragment>
  );
};

export default Banner;
