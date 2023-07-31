import React, { useEffect, useState } from "react";
import Heading from "../../components/heading/Heading";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiKey } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "./MovieItem";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const MovieSimilar = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const fetchDataMovieDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`
    );
    // setMovie(response?.data);
    setMovies(response?.data?.results);
  };
  useEffect(() => {
    fetchDataMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  if (!movies) return null;
  return (
    <div className="px-5 mt-10 max-[767px]:mt-5">
      <Heading textCenter={true}>Movies Similar</Heading>
      <div className="mt-10 movie-list max-[767px]:mt-5">
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
    </div>
  );
};
// https://api.themoviedb.org/3/movie/movie_id/similar?language=en-US&page=1
export default MovieSimilar;
