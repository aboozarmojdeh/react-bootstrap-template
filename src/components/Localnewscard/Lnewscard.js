import React from 'react';
import './Lnewscard.css';
// import ProgressBar from '../ProgressBar/ProgressBar';
// import Hr from '../Hr';
// contrast color generator
function rgbToYIQ({ r, g, b }) {
  return ((r * 299) + (g * 587) + (b * 114)) / 1000;
}

function hexToRgb(hex) {
  if (!hex || hex === undefined || hex === '') {
    return undefined;
  }

  const result =
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : undefined;
}

function contrast(colorHex, threshold = 128) {
  if (colorHex === undefined) {
    return '#000';
  }

  const rgb = hexToRgb(colorHex);

  if (rgb === undefined) {
    return '#000';
  }

  return rgbToYIQ(rgb) >= threshold ? '#000' : '#fff';
}
//////////////////////



const Lnewscard = (props) => {

  function randBGenerator() {
    const bgColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + bgColor
  }

  const randColor = randBGenerator();

  
  return (
    <div>

      <div className="grid-wrapper" style={{ backgroundColor: randColor }}>
        <div className="box movie-image-wrapper">
          <img style={{width:'300px',height:'auto'}} className='zone' src={props.newsImage} alt="newsImage" /></div>
        <div className="box movie-text-wrapper" style={{ color: contrast(randColor) }}>
          <div className='movie-title'>
            <h2>{props.newsTitle}</h2>
          <br />
          
            <br />
            <h6>Published Date: {props.newsPublishedDate}</h6>
            <h3>Abstract</h3>
            <p>{props.newsDescription}</p>
            <hr style={{ height: '1px', border: 'none', color: '#fff', backgroundColor: '#fff', width: '80%', textAlign: 'center' }} />


            <small>
              <a href={props.newsURL} target='_blank' rel="noopener noreferrer" style={{ color: contrast(randColor) }}>More information...</a>
            </small>



          </div>
        </div>

      </div>



    </div>
  )
};


export default Lnewscard;