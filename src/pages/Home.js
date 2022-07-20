import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );
  console.log("home", popularMovies);
  console.log("home", topRatedMovies);
  console.log("home", upcomingMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  // useEffect의 실행 순서는 항상 render 후 이다. 따라서 Banner 컴포넌트에 데이터를 사용하기 위해서는,'조건부 렌더링' (~&&~)을 해야한다
  // react에서는 매우 중요한 개념인 '조건부 렌더링'

  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}

      <h1>popularMovies</h1>
      <MovieSlide movies={popularMovies} />
      <h1>topRatedMovies</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>upcomingMovies</h1>
      <MovieSlide moviee={upcomingMovies} />
    </div>
  );
};

export default Home;
