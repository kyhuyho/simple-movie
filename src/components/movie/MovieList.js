import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { apiKey } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";
import axios from "axios";

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const fetchDataTypeMovie = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`
    );
    setMovies(response?.data?.results);
  };
  useEffect(() => {
    fetchDataTypeMovie();
  }, []);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={30} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
