import React from 'react';

import Carddeck from './Carddeck';
import WidgetHeader from '../WidgetHeader/WidgetHeader';

import {Dataobj} from './Dataobj';

const CarddeckList = () => {

    
    

    const localNewscardArray = Dataobj.map((eachNews, i) => {
        console.log(eachNews)
        return (
            <Carddeck 
           
            
            newsTitle={eachNews.title}
            newsName={eachNews.name}
            newsDescription={eachNews.description}
            
            
            newsImage={eachNews.urlToImage}
             
            />
        )
    });

    
    return (
        <div>
            <WidgetHeader widgetHeaderLink={`https://www.nytimes.com/`} widgetHeaderText={`New York Times 5 latest news`}/>
            {localNewscardArray}
        </div>


    )
}

export default CarddeckList;