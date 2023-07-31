import React from "react";
import MovieItem from "./MovieItem";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { apiKey } from "../../config";

const MovieList = ({ type }) => {
  const [movies, setMovies] = useState(null);
  const fetchDataNowPlayingMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`
    );
    setMovies(response?.data?.results);
  };
  useEffect(() => {
    fetchDataNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!movies > 0) return null;
  return (
    <div className="movie-list">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={"auto"}
        grabCursor={"true"}
        navigation
      >
        {movies?.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie?.id}>
              <MovieItem data={movie}></MovieItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
