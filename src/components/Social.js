import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import '../styles/Social.scss';
const Social = props =>{
    const facebook = "https://www.facebook.com/eventrulers"
    const instagram = "https://www.instagram.com/eventrulers";
    const email = "mailto: wedding@eventrulers.pl";
    const tel= "tel: +48534677234";

    return(
        <div className="social">
            <a className="social__item" href={facebook} target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="social__item--font" icon={faFacebookF}/></a>
            <a className="social__item" href={instagram} target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="social__item--font" icon={faInstagram} /></a>
            <a className="social__item" href={email}><FontAwesomeIcon className="social__item--font" icon={faEnvelope} /></a>
            <a className="social__item" href={tel}><FontAwesomeIcon className="social__item--font" icon={faPhone} /></a>
        </div>
    );
}
export default Social;