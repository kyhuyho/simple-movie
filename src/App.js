import React, { lazy, Suspense } from "react";
import Main from "./components/layout/Main";
import { Routes, Route } from "react-router-dom";
import "swiper/scss/scrollbar";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss";
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const MoviesPageV2 = lazy(() => import("./pages/MoviesPageV2"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
          {/* <Route path="/movies" element={<MoviesPageV2></MoviesPageV2>}></Route> */}
          <Route
            path="/movie/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
