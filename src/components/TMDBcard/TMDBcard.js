import React from 'react';
import './TMDBcard.css';
import ProgressBar from '../ProgressBar/ProgressBar';
// import Hr from '../Hr';
// contrast color generator
function rgbToYIQ({ r, g, b }) {
  return ((r * 299) + (g * 587) + (b * 114)) / 1000;
}

function hexToRgb(hex) {
  if (!hex || hex === undefined || hex === '') {
    return undefined;
  }

  const result =
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : undefined;
}

function contrast(colorHex, threshold = 128) {
  if (colorHex === undefined) {
    return '#000';
  }

  const rgb = hexToRgb(colorHex);

  if (rgb === undefined) {
    return '#000';
  }

  return rgbToYIQ(rgb) >= threshold ? '#000' : '#fff';
}
//////////////////////



const TMDBcard = (props) => {

  function randBGenerator() {
    const bgColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + bgColor
  }

  const randColor = randBGenerator();

  // const imageBGUrl=`url('http://image.tmdb.org/t/p/w400${props.movieBGPath}')`;
  // console.log('BG',imageBGUrl)
  const movieName = `${props.movieTitle}`.split(' ').join('-');
  const movieLink = `https://www.themoviedb.org/movie/${props.MovieId}-${movieName}`
  // console.log(movieLink)
  return (
    <div>

      <div className="grid-wrapper" style={{ backgroundColor: randColor }}>
        <div className="box movie-image-wrapper">
          <img className='zone' src={`http://image.tmdb.org/t/p/w300${props.moviePosterPath}`} alt="movieImage" /></div>
        <div className="box movie-text-wrapper" style={{ color: contrast(randColor) }}>
          <div className='movie-title'>
            <h2>{props.movieTitle}</h2>
          <br />
            <ul className='movie-text-items'>
              <li className='chart' >
              <ProgressBar valueEnd={props.voteAverage * 10} />
              <div>  User <br /> Score</div>
                
              </li>
              <li>Popularity: {props.popularity}</li>

              {/* <li>Number of votes: {props.voteCount}</li> */}
              {/* <li>Language: {props.movieLanguage}</li> */}
              <li></li>
            </ul>
            <br />
            <h6>Release Date: {props.movieDate}</h6>
            <h3>Overview</h3>
            <p>{props.movieOverview}</p>
            <hr style={{ height: '1px', border: 'none', color: '#fff', backgroundColor: '#fff', width: '80%', textAlign: 'center' }} />


            <small>
              <a href={movieLink} target='_blank' rel="noopener noreferrer" style={{ color: contrast(randColor) }}>More information...</a>
            </small>



          </div>
        </div>

      </div>



    </div>
  )
};


export default TMDBcard;