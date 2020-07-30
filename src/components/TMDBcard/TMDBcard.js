import React from 'react';
import './TMDBcard.css';
// import Hr from '../Hr';


const TMDBcard = (props) => {

  // const imageBGUrl=`url('http://image.tmdb.org/t/p/w400${props.movieBGPath}')`;
  // console.log('BG',imageBGUrl)
const movieName=`${props.movieTitle}`.split(' ').join('-');
  const movieLink=`https://www.themoviedb.org/movie/${props.MovieId}-${movieName}`
  // console.log(movieLink)
  return (
    <div>
    
      <div className="grid-wrapper">
        <div className="box movie-image-wrapper">
          <img className='zone' src={`http://image.tmdb.org/t/p/w300${props.moviePosterPath}`} alt="movieImage" /></div>
        <div className="box movie-text-wrapper">
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
            <hr style={{height:'1px', border:'none', color:'#fff', backgroundColor:'#fff', width:'80%', textAlign:'center'}}/>
            
                      
            <small>  
              <a href={movieLink} target='_blank' rel="noopener noreferrer">More information...</a>
              </small>
            
      
      
          </div>
        </div>
        
      </div>
      
      
    
    </div>
  )
};


export default TMDBcard;