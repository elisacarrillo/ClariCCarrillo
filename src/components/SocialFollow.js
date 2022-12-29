import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SocialFollow.css';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
    
      <a href="https://www.facebook.com/profile.php?id=100005163076310"
        className="facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/clarisa-carrillo-771bb81b3/"
        className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://twitter.com/clarisawashere" className="twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/cl4risa/?hl=en"
        className="instagram">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}