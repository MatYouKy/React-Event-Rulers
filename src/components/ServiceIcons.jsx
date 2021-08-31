import React from 'react';
import '../styles/Services.scss';

export const ServiceIcons = ( {item, alt, fill} ) => (
    <div>
         <img src={item} alt={alt} fill={fill}/>
    </div>
)
