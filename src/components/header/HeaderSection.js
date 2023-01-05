import { Container, Row } from "react-bootstrap";
import "../header/HeaderSection.scss";

import spiderman from "../../assets/images/spiderman.png";
import ironman from "../../assets/images/ironman3.png";
import avenger from "../../assets/images/avenger.png";
import avatar from "../../assets/images/avatar.png";
import thewalkingdead from "../../assets/images/the-walking-dead.png";
// import iconPlay from "../../assets/images/btn-play.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { getMovieList, searchMovie } from "../../api";
// import React, { useEffect, useState } from "react";

const HeaderSection = () => {
  // Slick JS
  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,

    draggable: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    touchThreshold: 1000,
  };

  // API Search
  // const [popularMovies, setPopularMovies] = useState([]);

  // useEffect(() => {
  //   getMovieList().then((result) => {
  //     setPopularMovies(result);
  //   });
  // }, []);

  // const PopularMovieList = () => {
  //   return popularMovies.map((movie, i) => {
  //     return (
  //       <div className="wrapper-movie" key={i}>
  //         <img
  //           className="img-movie"
  //           src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
  //         />

  //         <div className="title-movie">{movie.title}</div>
  //         <div className="desc-movie">
  //           {movie.vote_average} • {movie.release_date}
  //         </div>
  //       </div>
  //     );
  //   });
  // };

  // const search = async (q) => {
  //   if (q.length > 3) {
  //     const query = await searchMovie(q);
  //     setPopularMovies(query.results);
  //   }
  // };

  return (
    <>
      <Container fluid className="title-header">
        <Row>
          <h1>WATCH MOVIE</h1>
          <p>for free without using a ticket</p>

          {/* <div className="wrapper-search">
            <input
              placeholder="Search Movie..."
              className="search-movie"
              onChange={({ target }) => search(target.value)}
            />
          </div> */}
          {/* <a href="#">
            <img src={iconPlay}></img>
          </a> */}
        </Row>
      </Container>

      <Container className="img-header">
        <Row>
          <div>
            <Slider {...settings}>
              <>
                <div>
                  <img src={spiderman}></img>
                </div>
              </>
              <>
                <div>
                  <img src={ironman}></img>
                </div>
              </>
              <>
                <div>
                  <img src={avenger}></img>
                </div>
              </>
              <>
                <div>
                  <img src={avatar}></img>
                </div>
              </>
              <>
                <div>
                  <img src={thewalkingdead}></img>
                </div>
              </>
            </Slider>
          </div>
        </Row>
      </Container>

      {/* <PopularMovieList /> */}
    </>
  );
};

export default HeaderSection;
