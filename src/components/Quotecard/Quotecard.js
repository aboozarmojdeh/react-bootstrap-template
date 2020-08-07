import React from 'react';

import './Quotecard.css';



const Quotecard=({dailyQuote})=>{
    return(
        <div className="card">
        <div className="card-header header-bg">
          Quote of the day
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{dailyQuote.text}</p>
            <footer className="blockquote-footer"><cite title="Source Title">{dailyQuote.author}</cite></footer>
          </blockquote>
        </div>
      </div>
    )
}

export default Quotecard;