import React from "react";
import Avatar from "../images/avatar-image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
    return (
        <div className="info">
            <img alt="Avatar Image" src={Avatar} className="info--avatar_img" />
            <h1 className="info--name">David Nitu</h1>
            <p className="info--position">Aspiring Software Engineer</p>
            <p className="info--gitHub">github.com/davidcnitu</p>
            <div className="info--buttons">
                <button className="button-email"><FontAwesomeIcon icon={faEnvelope} width="30px" size="lg" />Email</button>
                <button className="button-linkedin"><FontAwesomeIcon icon={faLinkedin} color="white" width="30px" size="lg" />LinkedIn</button>
            </div>
        </div>
    );
}