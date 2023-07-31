import useSWRInfinite from "swr/infinite";
import React from "react";
import lodash from "lodash";
import IconStar from "../components/icon/IconStar";
import IconSearch from "../components/icon/IconSearch";
import Button from "../components/button/Button";
import { useState } from "react";
import { useEffect } from "react";
import { apiKey, fetcher } from "../config";
import "../styles/stylesMovieItem.scss";

const MoviesPageV2 = () => {
  const [filter, setFilter] = useState(null);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const { data, size, setSize, isLoading } = useSWRInfinite(
    (index) => url.concat(`&page=${index + 1}`),
    fetcher
  );
  const movies = data ? data.reduce((a, b) => a.concat(b?.results), []) : [];
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < 20);
  useEffect(() => {
    if (filter)
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filter}`
      );
    else setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  }, [filter]);
  return (
    <div className="container mt-10 max-[1279px]:mt-5 max-[767px]:mt-24">
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Type here to search..."
          className="w-full p-3 bg-transparent border border-gray-500 rounded outline-none transition-all focus:border-[#f62682] max-[767px]:text-sm"
          onChange={lodash.debounce((e) => setFilter(e.target.value), 1000)}
        />
        <IconSearch></IconSearch>
      </div>
      {isLoading && (
        <div className="w-10 h-10 border-4 border-[#f62682] rounded-full border-t4 border-t-transparent animate-spin mx-auto mt-20"></div>
      )}
      <div className="grid grid-cols-4 gap-[30px] mt-14 max-[1279px]:grid-cols-3 max-[1023px]:grid-cols-2 movie-list-primary">
        {!isLoading &&
          movies?.length > 0 &&
          movies.map((movie) => (
            <div
              key={movie.id}
              className="p-3 rounded-lg bg-slate-700 h-[400px] max-[767px]:h-[350px] movie-list-primary-item"
            >
              <div className="w-full h-[200px] max-[767px]:h-[170px]">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="pt-4 h-[calc(100%-200px)] flex flex-col justify-between max-[767px]:h-[calc(100%-170px)]">
                <div className="w-full">
                  <h2 className="text-lg font-semibold">{movie?.title}</h2>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="opacity-60">
                      {new Date(movie?.release_date).getFullYear()}
                    </span>
                    <div className="flex items-center gap-x-2">
                      <span className="opacity-60">{movie?.vote_average}</span>
                      <IconStar></IconStar>
                    </div>
                  </div>
                </div>
                <div>
                  <Button kind="primary" full={true} to={`/movie/${movie?.id}`}>
                    Watch now
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-10 text-center max-[767px]:mt-5">
        <Button
          kind="secondary"
          onClick={() => setSize(size + 1)}
          disabled={isReachingEnd}
          className={`${isReachingEnd ? "bg-opacity-40" : ""}`}
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default MoviesPageV2;
