import React from 'react';

import NYTcard from './NYTcard';
import WidgetHeader from '../WidgetHeader/WidgetHeader';

const NYTcardList = ({ news }) => {

    const TMDBMoviecardArray = news.map((eachNews, i) => {
        return (
            <NYTcard 
            key={eachNews.uri} 
            newsId={eachNews.uri} 
            newsTitle={eachNews.title}
            newsAbstract={eachNews.abstract} 
            newsURL={eachNews.url}
            newsPublishedDate={eachNews.published_date}
            newsImage={eachNews.multimedia[0].url}
             
            />
        )
    });

    
    return (
        <div>
            <WidgetHeader widgetHeaderLink={`https://www.nytimes.com/`} widgetHeaderText={`New York Times 5 latest news`}/>
            {TMDBMoviecardArray}
        </div>


    )
}

export default NYTcardList;