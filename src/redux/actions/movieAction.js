import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({type:"GET_MOVIES_REQUEST"})
      // 데이터 도착 전
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upcomingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upcomingApi,
      ]);

      // 데이터 도착 후
      console.log("promise all 이후의 popularMovies 데이터는?", popularMovies);
      console.log(
        "promise all 이후의 topRatedMovies 데이터는?",
        topRatedMovies
      );
      console.log(
        "promise all 이후의 upcomingMovies 데이터는?",
        upcomingMovies
      );

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const movieAction = {
  getMovies,
};
