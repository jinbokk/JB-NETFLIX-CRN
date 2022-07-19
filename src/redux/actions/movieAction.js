import api from "../api";

function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = await api.get(
      `/movie/popular?api_key=a25b654a5fefe228544dc5b8b1712130&language=en-US&page=1`
    );
  };
}

export const movieAction = {
  getMovies,
};
