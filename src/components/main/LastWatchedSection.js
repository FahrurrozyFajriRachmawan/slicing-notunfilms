import { Container, Row, Col, Card } from "react-bootstrap";
import React from "react";

import "../main/MovieSection.scss";

// import iconPlay from "../../assets/images/btn-play.png";

const LastWatchedSection = (props) => {
  return (
    <>
      <div className="movie-section">
        <a href="#">
          <div className="wrapper-movie">
            <img className="img-movie" src={props.image} />

            <div className="title-movie">{props.title}</div>
            <div className="desc-movie">
              {props.rate} • {props.date}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default LastWatchedSection;
