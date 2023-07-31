import React, { Fragment } from "react";
import Heading from "../components/heading/Heading";
import HomeBanner from "../modules/home/HomeBanner";
import MovieList from "../modules/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <HomeBanner></HomeBanner>
      <div className="container mt-10 max-[767px]:mt-5">
        <Heading>Now Playing Movies</Heading>
        <div className="mt-8 max-[767px]:mt-4">
          <MovieList type="upcoming"></MovieList>
        </div>
      </div>
      <div className="container mt-10 max-[767px]:mt-5">
        <Heading>Top Rated Movies</Heading>
        <div className="mt-8 max-[767px]:mt-4">
          <MovieList type="top_rated"></MovieList>
        </div>
      </div>
      <div className="container mt-10 max-[767px]:mt-5">
        <Heading>Treding Movies</Heading>
        <div className="mt-8 max-[767px]:mt-4">
          <MovieList type="popular"></MovieList>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
