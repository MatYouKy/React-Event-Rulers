import React from 'react';
import '../styles/Services.scss';
const ServiceIcons = ({item, alt, fill}) => (
    <div>
         <img src={item} alt={alt} fill={fill}/>
    </div>
)
 export default ServiceIcons;
