import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaYahoo,
  FaLinkedinIn
} from "react-icons/fa";
import "./Socialcard.css";

const Socialcard = () => {
  return (
    <div className='social-container'>
      <a className='social-links'
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF
          className="facebook"
          data-toggle="tooltip"
          data-placement="top"
          title="Facebook"
        />
      </a>

      <a className='social-links' href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter
          className="twitter"
          data-toggle="tooltip"
          data-placement="top"
          title="Twitter"
        />
      </a>

      <a
      className='social-links'
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          className="instagram"
          data-toggle="tooltip"
          data-placement="top"
          title="Instagram"
        />
      </a>

      <a
      className='social-links'
        href="https://www.gmail.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGoogle
          className="gmail"
          data-toggle="tooltip"
          data-placement="top"
          title="Gmail"
        />
      </a>

      <a
      className='social-links'
        href="https://mail.yahoo.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYahoo
          className="yahoo"
          data-toggle="tooltip"
          data-placement="top"
          title="Yahoo Mail"
        />
      </a>

      <a
      className='social-links'
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn
          className="linkedin"
          data-toggle="tooltip"
          data-placement="top"
          title="Linkedin"
        />
      </a>
    </div>
  );
};

export default Socialcard;
