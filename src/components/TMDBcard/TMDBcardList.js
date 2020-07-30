import React from 'react';

import TMDBcard from './TMDBcard';
import WidgetHeader from '../WidgetHeader/WidgetHeader';

const TMDBcardList = ({ movies }) => {

    const TMDBcardArray = movies.map((movie, i) => {
        return (
            <TMDBcard 
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

    
    return (
        <div>
            <WidgetHeader widgetHeaderLink={`https://www.themoviedb.org/`} widgetHeaderText={`The 5 most popular movies on TMDB`}/>
            {TMDBcardArray}
        </div>


    )
}

export default TMDBcardList;