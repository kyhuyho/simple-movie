import React from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <div className="pb-10 page-container">
      <div className="mt-10">
        <h1 className="mb-10 text-3xl font-medium capitalize">Now playing</h1>
        <MovieList></MovieList>
      </div>
      <div className="mt-10">
        <h1 className="mb-10 text-3xl font-medium capitalize">Top rated</h1>
        <MovieList type="top_rated"></MovieList>
      </div>
      <div className="mt-10">
        <h1 className="mb-10 text-3xl font-medium capitalize">Trending</h1>
        <MovieList type="popular"></MovieList>
      </div>
    </div>
  );
};

export default HomePage;
