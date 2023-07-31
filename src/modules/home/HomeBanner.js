import React from "react";
import HomeBannerItem from "./HomeBannerItem";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { apiKey } from "../../config";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const HomeBanner = () => {
  const [movies, setMovies] = useState(null);
  const fetchDataHomeBanner = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
    );
    setMovies(response?.data?.results);
  };
  useEffect(() => {
    fetchDataHomeBanner();
  }, []);
  if (!movies?.length > 0) return null;
  return (
    <div className="container mt-10 max-[1279px]:mt-5 max-[767px]:mt-24">
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation>
        {movies?.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <HomeBannerItem data={movie}></HomeBannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
