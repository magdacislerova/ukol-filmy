import React from 'react';
import './style.css';
import Actor from '../Actor';

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>Premiéra: {year}</p>
      <p>Hodnocení: {rating}</p>
      <p>Režie: {director}</p>
      <p>Žánr: {genre}</p>
      <div>
        <h4>V hlavních rolích:</h4>
        {cast.map((actor) => (
          <Actor name={actor.name} as={actor.as} key={actor.name} />
        ))}
      </div>
      <img src={`../../assets/${poster}`} alt={title} />
    </>
  );
};

export default Movie;
