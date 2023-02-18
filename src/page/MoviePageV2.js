import React, { useEffect, useState } from "react";
import lodash from "lodash";
import { apiKey, fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";
import Button from "../components/button/Button";
import useSWRInfinite from "swr/infinite";
const itemsPerPage = 20;

const MoviePageV2 = () => {
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => url.concat(`&page=${index + 1}`),
    fetcher
  );
  const loading = !data && !error;
  const movies = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);
  useEffect(() => {
    if (filter)
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filter}`
      );
    else setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  }, [filter]);
  return (
    <div className="pb-10 mt-[150px] page-container">
      <div className="flex mb-10">
        <div className="w-full">
          <input
            type="text"
            className="w-full p-3 text-lg transition-all bg-transparent border rounded outline-none border-slate-500 focus:border-primary"
            placeholder="Type here to search..."
            onChange={lodash.debounce((e) => setFilter(e.target.value), 1000)}
          />
        </div>
        <div className="flex items-center justify-center px-4 py-2 rounded bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      {loading && (
        <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-[30px]">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      <div className="mt-10 text-center">
        <Button
          bgColor="secondary"
          onClick={() => setSize(size + 1)}
          disabled={isReachingEnd}
          className={`${isReachingEnd ? "opacity-50" : ""}`}
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default MoviePageV2;
