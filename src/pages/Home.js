import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  
  if (loading) {
    return <ClipLoader color="#ffff" loading={loading} size={150} />;
  } else {
    return (
      <div>
        <Banner movie={popularMovies.results[0]} />
        <h1>popularMovies</h1>
        <MovieSlide movies={popularMovies} />
        <h1>topRatedMovies</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1>upcomingMovies</h1>
        <MovieSlide movies={upcomingMovies} />
      </div>
    );
  }
};

export default Home;
