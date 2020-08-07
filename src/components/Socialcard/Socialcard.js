import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle, FaYahoo, FaLinkedinIn } from 'react-icons/fa';
import './Socialcard.css';



const Socialcard = () => {
    return (
        
            <div className="container social-container">
                <div className="row">
                    <div className="col-sm">
                    <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer"><FaFacebookF className='facebook' data-toggle="tooltip" data-placement="top" title="Facebook"/></a>
                    </div>
                    <div className="col-sm">
                    <a href='https://twitter.com/' target='_blank' rel="noopener noreferrer"><FaTwitter className='twitter' data-toggle="tooltip" data-placement="top" title="Twitter"/></a>
                        
                    </div>
                    <div className="col-sm">
                    <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer"><FaInstagram className='instagram' data-toggle="tooltip" data-placement="top" title="Instagram"/></a>
                        
                    </div>
                 
                </div>
                <div className="row">
                    <div className="col-sm">
                       
                        <a href='https://www.gmail.com/' target='_blank' rel="noopener noreferrer"><FaGoogle className='gmail' data-toggle="tooltip" data-placement="top" title="Gmail"/></a>
                    </div>
                    <div className="col-sm">
                    <a href='https://mail.yahoo.com/' target='_blank' rel="noopener noreferrer"><FaYahoo className='yahoo' data-toggle="tooltip" data-placement="top" title="Yahoo Mail"/></a>
                        
                    </div>
                    <div className="col-sm">
                    <a href='https://www.linkedin.com/' target='_blank' rel="noopener noreferrer"><FaLinkedinIn className='linkedin' data-toggle="tooltip" data-placement="top" title="Linkedin"/></a>
                        
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