import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiKey } from "../../config";
import MovieCastItem from "./MovieCastItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Heading from "../../components/heading/Heading";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);
  const fetchDataMovieDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    );
    setCasts(response?.data?.cast);
  };
  useEffect(() => {
    fetchDataMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  if (!casts) return null;
  return (
    <div className="px-5 mt-10 max-[1023px]:mt-5">
      <Heading textCenter={true}>Casts</Heading>
      <div className="mt-10 cast-list max-[1023px]:mt-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={"auto"}
          grabCursor={"true"}
          navigation
        >
          {casts?.length > 0 &&
            casts.map((cast) => (
              <SwiperSlide key={cast?.id}>
                <MovieCastItem data={cast}></MovieCastItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieCast;
