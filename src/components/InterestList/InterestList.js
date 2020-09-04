import React from 'react';

cont InterestList=()=>{
    return(
        <div>
             <div className="card">
        <div className="card-header header-bg">
          List of Interests
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            
            <div><p onClick={() => this.getLocalNews()} style={{cursor:"pointer",fontSize:"14px"}}>Local News</p> </div>
                          <div><p onClick={() => this.getNYTNews()} style={{cursor:"pointer",fontSize:"14px"}}>World News</p> </div>
                          <div><p onClick={() => this.getTMDBMovies()} style={{cursor:"pointer",fontSize:"14px"}}>Movies</p> </div>
                          <div><p onClick={() => this.getTMDBSeries()} style={{cursor:"pointer",fontSize:"14px"}}>TV Series</p> </div>
                          
            <footer className="blockquote-footer"><cite title="Source Title" style={{fontSize:'12px'}}>{dailyQuote.author}</cite></footer>
          </blockquote>
        </div>
      </div>
        </div>
    )
}