import React from 'react';
import './WidgetHeader.css';
const WidgetHeader = (props) => {
    return (
        <div>
            <div className='widget-header'>
                <a className='widget-link' href={props.widgetHeaderLink} target='_blank' rel='noopener noreferrer'>{props.widgetHeaderText}</a>

                <img 
                className='widget-image' 
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                width="100px" 
                height="45px" 
                alt="TMDB" />
                {/* <div className='banner-text'>{props.widgetHeaderText}</div> */}
            </div>
        </div>
    )
}



export default WidgetHeader;