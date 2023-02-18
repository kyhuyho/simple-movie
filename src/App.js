import { Routes, Route } from "react-router-dom";
import { Fragment, lazy, Suspense } from "react";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
const HomePage = lazy(() => import("./page/HomePage"));
const MoviePage = lazy(() => import("./page/MoviePage"));
const MovieDetailsPage = lazy(() => import("./page/MovieDetailsPage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <Fragment>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </Fragment>
              }
            ></Route>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetailsPage></MovieDetailsPage>}
            ></Route>
          </Route>
          <Route
            path="*"
            element={
              <div className="pt-20 text-3xl font-medium text-center text-primary">
                Not Found 404
              </div>
            }
          ></Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
