import React from 'react';
import { FontAwesomeIcon as Awesome } from '@fortawesome/react-fontawesome';
import { socials } from '../../constans/socialData';
import './Social.scss';

export const Social = () => {
    const social = socials.map(socialItem => (
        <a
            href={socialItem.href}
            key={socialItem.href}
            target={socialItem.target}
            className="social__item"
            rel={socialItem.rel}>
            <Awesome
                className="social__item--font"
                icon={socialItem.icon} />
        </a>
    ));

    return (
        <div className="social">
            {social}
        </div>
    );
}