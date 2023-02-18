import React, { useEffect, useState } from "react";
import useSWR from "swr";
import lodash from "lodash";
import ReactPaginate from "react-paginate";
import { apiKey, fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";

const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
  );
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  const movies = data?.results || [];
  useEffect(() => {
    if (filter)
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filter}&page=${nextPage}`
      );
    else
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
      );
  }, [filter, nextPage]);
  const itemsPerPage = data?.total_results / data?.total_pages;
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset, itemsPerPage]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
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
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePage;
