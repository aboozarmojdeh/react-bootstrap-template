import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FaFacebookF } from 'react-icons/fa';
import './Socialcard.css';



const Socialcard = () => {
    return (
        
            <div className="container social-container">
                <div className="row">
                    <div className="col-sm facebook">
                        <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer"><FaFacebookF /></a>
                    </div>
                    <div className="col-sm">
                        <FaFacebookF />
                    </div>
                    <div className="col-sm">
                        <FaFacebookF />
                    </div>
                </div>
            
            {/* // <div className='social-container'>
        //     <div>

        //         <div className='social-header'>
        //             <p>Email and Social Network</p>
        //         </div>

        //     </div>
        //     <div className="social-zone blue social-grid-wrapper">

        //         <div className="facebook social-box social-zone"><FaFacebookF /></div>
        //         <div className="facebook social-box social-zone"><FaFacebookF /></div>
        //         <div className="facebook social-box social-zone"><FaFacebookF /></div>
        //         <div className="facebook social-box social-zone"><FaFacebookF /></div>
        //         <div className="facebook social-box social-zone"><FaFacebookF /></div>
        //         <div className="facebook social-box social-zone"><FaFacebookF /></div>
        //         <div className="facebook social-box social-zone"><FaFacebookF /></div>
        //         <div className="facebook social-box social-zone"><FaFacebookF /></div>
        //     </div>

        // </div>
        //      */}
        </div>
    )

};

export default Socialcard;