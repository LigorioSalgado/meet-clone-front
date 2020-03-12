import React from "react";
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <a href="#">
          <img
            className="card-img-top"
            src="http://placehold.it/700x400"
            alt=""
          />
        </a>
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/events/${props.id}`} className="title-link">{props.title}</Link>
          </h4>
          <h5>{props.author}</h5>
          <p className="card-text">
            {props.description}
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            &#9733; &#9733; &#9733; &#9733; &#9734;
          </small>
        </div>
      </div>
    </div>
  );
}

export default Card;
