import React from 'react';
import './style.css';
import Actor from '../Actor';

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <div className="movie">
      <div className="poster">
        <div className="rating">
          <div className="rating-value">{rating}</div>
        </div>
        <img src={`../../assets/${poster}`} alt={title} />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <div>
          <span className="label">Premiéra: </span> {year}
        </div>
        <div>
          <span className="label">Režie: </span>
          {director}
        </div>
        <div>
          <span className="label">Žánr: </span>
          {genre}
        </div>
        <h4>V hlavních rolích:</h4>
        <div className="cast">
          {cast.map((actor) => (
            <div className="cast-member">
              <Actor name={actor.name} as={actor.as} key={actor.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
