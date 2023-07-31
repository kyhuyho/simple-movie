import React, { useEffect, useState } from "react";
import Heading from "../../components/heading/Heading";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiKey } from "../../config";

const MovieVideo = () => {
  const { movieId } = useParams();
  const [videos, setVideos] = useState(null);
  const fetchDataMovieDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
    );
    setVideos(response?.data?.results);
  };
  useEffect(() => {
    fetchDataMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  if (!videos) return null;
  return (
    <div className="px-5 mt-10 max-[767px]:mt-5">
      <Heading textCenter={true}>Trailer</Heading>
      <div className="mt-10 max-[767px]:mt-5">
        {videos?.length > 0 &&
          videos.slice(0, 1).map((video) => (
            <div key={video?.id}>
              <h1 className="mb-5 text-2xl bg-[#7D6AFF] w-[500px] text-center px-4 py-2 rounded-md max-[1023px]:text-xl max-[767px]:w-[300px] max-[767px]:text-xs">
                {video?.name}
              </h1>
              <iframe
                className="w-full h-[700px] max-[1279px]:h-[500px] max-[1023px]:h-[400px] max-[767px]:h-[200px]"
                src={`https://www.youtube.com/embed/${video?.key}`}
                title="Rise Of The Beasts Take Over Vivid Sydney."
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieVideo;
