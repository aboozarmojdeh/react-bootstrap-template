import React from 'react';

import TMDBTVcard from './TMDBTVcard';
import WidgetHeader from '../WidgetHeader/WidgetHeader';

const TMDBTVcardList = ({ tvShows }) => {

    const TMDBTVcardArray = tvShows.map((tvShow, i) => {
        return (
            <TMDBTVcard 
            key={tvShow.id} 
            tvShowId={tvShow.id} 
            popularity={tvShow.popularity} 
            voteCount={tvShow.vote_count}
            voteAverage={tvShow.vote_average}
            tvShowLanguage={tvShow.original_language}
            tvShowTitle={tvShow.title}
            tvShowOverview={tvShow.overview}
            tvShowDate={tvShow.release_date}
            tvShowPosterPath={tvShow.poster_path}
            tvShowBGPath={tvShow.backdrop_path}
            
            
            />
        )
    });

    
    return (
        <div>
            <WidgetHeader widgetHeaderLink={`https://www.themoviedb.org/`} widgetHeaderText={`The 5 most popular movies on TMDB`}/>
            {TMDBTVcardArray}
        </div>


    )
}

export default TMDBTVcardList;