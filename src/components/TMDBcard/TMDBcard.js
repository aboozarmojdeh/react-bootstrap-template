import React from 'react';
import './TMDBcard.css';
import Hr from '../Hr';

const TMDBcard = (props) => {
  return (
    <div>
    
      <div className="zone blue grid-wrapper">
        <div className="box zone movie-image-wrapper"><img src={`http://image.tmdb.org/t/p/w300/${props.moviePosterPath}`} alt="movieImage" /></div>
        <div className="box zone movie-text-wrapper">
          <div className='movie-title'>
            <h2>{props.movieTitle}</h2>
            <h6>Release Date: {props.movieDate}</h6>
            <ul className='movie-text-items'>
              <li>Popularity: {props.popularity}</li>
              <li>Score: {props.voteAverage}</li>
              {/* <li>Number of votes: {props.voteCount}</li> */}
              {/* <li>Language: {props.movieLanguage}</li> */}
              <li></li>
            </ul>
            <h3>Overview</h3>
            <p>{props.movieOverview}</p>
            <br />
            <small>more information on </small>
      <br />
      <a href="https://www.themoviedb.org/" target='_blank' rel="noopener noreferrer">TMDB</a>
          </div>
        </div>
        
      </div>
      
      
    
    </div>
  )
};


export default TMDBcard;