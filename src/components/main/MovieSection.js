import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import "../main/MovieSection.scss";
import iconPlay from "../../assets/images/btn-play.png";
import { getMovieList, searchMovie } from "../../api";
import { useEffect, useState } from "react";

const MovieSection = (props) => {
  // API Search
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-section" key={i}>
          <a href="#">
            <div className="wrapper-movie">
              <img
                className="img-movie"
                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
              />

              <div className="title-movie">{movie.title}</div>
              <div className="desc-movie">
                {movie.vote_average} • {movie.release_date}
              </div>
            </div>
          </a>
        </div>
      );
    });
  };

  return (
    <>
      <div className="wrapper-search">
        <div className="title-movie-section">{props.titleSection}</div>
        <input
          placeholder="Search Movie..."
          className="search-movie"
          onChange={({ target }) => search(target.value)}
        />
      </div>
      <PopularMovieList />
    </>
  );
};

export default MovieSection;
