import React from 'react';
import './WidgetHeader.css';
const WidgetHeader=(props)=>{
    return(
        <div>
             <a href={props.widgetHeaderLink} target='_blank' rel='noopener noreferrer'>
                  <div className='widget-header'>
                    <img src="" width="25px" height="25px" alt="" />
                    <div className='banner-text'>{props.widgetHeaderText}</div>
                  </div>
                </a>
        </div>
    )
}



export default WidgetHeader;