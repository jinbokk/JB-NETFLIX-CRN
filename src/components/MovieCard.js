import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);

  return (
    <div
      className="movieCard"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}` +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="overlay">
        <h1>{item.title}</h1>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger">{genreList.find((item) => item.id == id).name}</Badge>
          ))}
        </div>
        <span>
          <div>{item.vote_average}</div>
          <div>{item.adult ? "adult" : "under 18"}</div>
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
