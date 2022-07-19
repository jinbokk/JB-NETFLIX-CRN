import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";

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
      {/* redux의 사용 이유는, props를 안쓰기 위해서가 아니다. 모든 상황에서 props를 사용하는 것을 지양하기 위함이다. */}
    </div>
  );
};

export default Home;
