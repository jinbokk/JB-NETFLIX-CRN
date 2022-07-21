import React from "react";

const MovieCard = ({ item }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}` +
          ")",
        backgroundPosition: "center"
      }}
    ></div>
  );
};

export default MovieCard;
