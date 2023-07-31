import React, { useEffect, useState } from "react";
import MovieVideo from "../modules/movie/MovieVideo";
import MovieSimilar from "../modules/movie/MovieSimilar";
import MovieImage from "../modules/movie/MovieImage";
import MovieGenre from "../modules/movie/MovieGenre";
import MovieCast from "../modules/movie/MovieCast";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiKey } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const fetchDataMovieDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );
    setMovie(response?.data);
  };
  useEffect(() => {
    fetchDataMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  return (
    <div className="mt-10 max-[767px]:mt-24">
      <MovieImage data={movie}></MovieImage>
      <MovieGenre data={movie}></MovieGenre>
      <MovieCast></MovieCast>
      <MovieVideo></MovieVideo>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

export default MovieDetailsPage;
