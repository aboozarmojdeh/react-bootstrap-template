import React from 'react';

import TMDBcard from './TMDBcard';

const TMDBcardList = ({ movies }) => {

    const TMDBcardArray = movies.map((movie, i) => {
        return (
            <TMDBcard 
            key={movie.id} 
            id={movie.id} 
            popularity={movie.popularity} 
            voteCount={movie.vote_count}
            voteAverage={movie.vote_average}
            movieLanguage={movie.language}
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
            {TMDBcardArray}
        </div>


    )
}

export default TMDBcardList;