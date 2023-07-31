import ReactPaginate from "react-paginate";
import React from "react";
import lodash from "lodash";
import IconStar from "../components/icon/IconStar";
import IconSearch from "../components/icon/IconSearch";
import Button from "../components/button/Button";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { apiKey } from "../config";
import "../styles/stylesPagination.scss";
import "../styles/stylesMovieItem.scss";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
  );
  const fetchDataMovies = async () => {
    try {
      setLoading(true);
      if (filter)
        setUrl(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filter}&page=${nextPage}`
        );
      else
        setUrl(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
        );
      const response = await axios.get(url);
      setData(response?.data);
      setMovies(response?.data?.results);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, url, nextPage]);
  const itemsPerPage = data?.total_results / data?.total_pages;
  useEffect(() => {
    if (!data || !data?.total_results) return;
    setPageCount(Math.ceil(data?.total_results / itemsPerPage));
  }, [data, itemOffset, itemsPerPage]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
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
      {loading && (
        <div className="w-10 h-10 border-4 border-[#f62682] rounded-full border-t4 border-t-transparent animate-spin mx-auto mt-20"></div>
      )}
      <div className="grid grid-cols-4 gap-[30px] mt-14 max-[1279px]:grid-cols-3 max-[1023px]:grid-cols-2 movie-list-primary">
        {!loading &&
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
      <div className="mt-10 max-[767px]:mt-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviesPage;
