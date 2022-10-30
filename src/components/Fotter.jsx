import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareGithub, faSquareTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="footer">
            <FontAwesomeIcon icon={faSquareTwitter} size="2x" />
            <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
            <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
            <FontAwesomeIcon icon={faSquareGithub} size="2x" />
        </div>
    );

}