import React from 'react';

import Lnewscard from './Lnewscard';
import WidgetHeader from '../WidgetHeader/WidgetHeader';

const LnewscardList = ({ localNews }) => {

    const TMDBMoviecardArray = localNews.map((eachNews, i) => {
        return (
            <Lnewscard 
            // key={eachNews.uri} 
            // newsId={eachNews.uri} 
            // newsTitle={eachNews.title}
            // newsAbstract={eachNews.abstract} 
            // newsURL={eachNews.url}
            // newsPublishedDate={eachNews.published_date}
            // newsImage={eachNews.multimedia[0].url}
             
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

export default LnewscardList;