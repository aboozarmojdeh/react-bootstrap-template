import React from 'react';

import TMDBMoviecard from './TMDBMoviecard';
import WidgetHeader from '../WidgetHeader/WidgetHeader';

const TMDBMoviecardList = ({ movies }) => {


    const TMDBMoviecardArray = movies.map((movie, i) => {
        return (
            <TMDBMoviecard 
            key={movie.id} 
            MovieId={movie.id} 
            popularity={movie.popularity} 
            voteCount={movie.vote_count}
            voteAverage={movie.vote_average}
            movieLanguage={movie.original_language}
            movieTitle={movie.title}
            movieOverview={movie.overview}
            movieDate={movie.release_date}
            moviePosterPath={movie.poster_path}
            movieBGPath={movie.backdrop_path}
            
            
            />
        )
    });

    // const tMDBLogo=`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg`;
    return (
        <div>
            <WidgetHeader widgetHeaderLink={`https://www.themoviedb.org/`} widgetHeaderText={`The 5 most popular movies on TMDB`}/>
            {TMDBMoviecardArray}
        </div>


    )
}

export default TMDBMoviecardList;