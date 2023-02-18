import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const MovieCard = ({ item }) => {
  const { backdrop_path, title, release_date, vote_average, id } = item;
  const navigate = useNavigate();
  return (
    <div className="p-3 rounded-lg bg-slate-800 h-[500px] flex flex-col">
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg"
      />
      <div className="flex flex-col flex-1">
        <h2 className="mt-5 text-xl font-medium">{title}</h2>
        <div className="flex items-center justify-between my-5">
          <span className="opacity-60">
            {new Date(release_date).getFullYear()}
          </span>
          <div className="flex items-center gap-2">
            <span className="opacity-60">{vote_average}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#efcd14"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-6 h-6 border-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
        </div>
        <Button className="mt-auto" onClick={() => navigate(`/movie/${id}`)}>
          Watch now
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;
