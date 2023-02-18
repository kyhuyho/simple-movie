/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import { apiKey, fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="pb-10 mt-[150px]">
      <div className="relative h-[700px]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[800px] h-[350px] relative z-5 mx-auto">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="object-cover w-full h-full -mt-[175px]"
        />
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-medium text-center">{title}</h1>
        <div className="flex items-center justify-center mt-10 gap-x-5">
          {genres.length > 0 &&
            genres.map((item) => (
              <span
                key={item.id}
                className="px-6 py-3 border border-primary rounded-3xl"
              >
                {item.name}
              </span>
            ))}
        </div>
        <p className="w-[700px] text-base leading-6 mx-auto mt-10 text-center">
          {overview}
        </p>
      </div>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilars></MovieSimilars>
    </div>
  );
};

const MovieCredits = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const movies = data.cast || [];
  return (
    <div className="mt-10">
      {movies.length > 0 && (
        <h2 className="mb-5 text-3xl font-medium text-center">Casts</h2>
      )}
      <div className="grid grid-cols-4 gap-x-5">
        {movies.length > 0 &&
          movies.slice(0, 4).map((item) => (
            <div key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                alt=""
                className="w-full h-[500px] object-cover"
              />
              <h2 className="mt-5 text-2xl font-medium text-center">
                {item.name}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
};

const MovieVideos = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const movies = data.results || [];
  return (
    <div className="mt-10">
      {movies.length > 0 && (
        <h2 className="mb-5 text-3xl font-medium text-center">Trailer</h2>
      )}
      {movies.length > 0 &&
        movies.slice(0, 1).map((item) => (
          <div key={item.id}>
            <h2 className="inline-block px-6 py-3 mb-5 text-2xl font-medium rounded-lg bg-secondary">
              {item.name}
            </h2>
            <iframe
              width="1280"
              height="675"
              src={`https://www.youtube.com/embed/${item.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-[600px] object-fill"
            ></iframe>
          </div>
        ))}
    </div>
  );
};

const MovieSimilars = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const movies = data.results || [];
  return (
    <div className="mt-10">
      {movies.length > 0 && (
        <h2 className="mb-10 text-3xl font-medium text-center">
          Movie Similars
        </h2>
      )}
      {movies.length > 0 && (
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
      )}
    </div>
  );
};
export default MovieDetailsPage;
