<div className='row'>
<div className='col-md-6 col-sm-12 movie-image-wrapper'>
<img src={`http://image.tmdb.org/t/p/w300/${props.moviePosterPath}`} alt="movieImage" />
  </div>
<div className='col-md-6 col-sm-12 movie-text-wrapper'>
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
  </div>
  </div>

</div>