import React from "react";
import { useParams } from "react-router";
import film from "./FilmData";

const Movie = () => {
  const { id } = useParams();
  const f = film.find((item) => item.id === parseInt(id));
  return (
    <div style={{ textAlign: "center" }}>
      <div className="card">
        <img
          className="card-img-top"
          style={{ width: "20%" }}
          src={f.img}
          alt=""
        />
        <div className="card-body">
          <h2 className = "card-title">{f.name}</h2>
          <h2 className = "card-subtitle mb-2 text-muted">{f.genre}</h2>
          <h2 className = "card-title">{f.director}</h2>
          <h2 className = "card-title">{f.rating}</h2>
        </div>
      </div>
    </div>
  );
};

export default Movie;
