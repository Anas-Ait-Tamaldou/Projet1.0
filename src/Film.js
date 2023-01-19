import React from "react";
import { Link } from "react-router-dom";

const Film = (props) => {
  return (
    <div className="card"  style={{ width: "20%" }}>
      <Link to={`Movie/${props.id}`}>
        <img
          className="card-img-top"
          src={props.img}
          alt=""
        />
      </Link>
      <div className="card-body">
        <h2 className = "card-title">{props.name}</h2>
        <h2 className = "card-subtitle mb-2 text-muted">{props.genre}</h2>
        <h2 className = "card-text">{props.director}</h2>
        <h2 className = "card-text">{props.rating}</h2>
      </div>
    </div>
  );
};

export default Film;
