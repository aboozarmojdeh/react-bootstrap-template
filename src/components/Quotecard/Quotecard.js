import React from 'react';

import './Quotecard.css';



const Quotecard=(props)=>{
    return(
        <div className="card">
        <div className="card-header header-bg">
          Quote of the day
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{}</p>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">{}</cite></footer>
          </blockquote>
        </div>
      </div>
    )
}

export default Quotecard;