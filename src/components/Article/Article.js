import React from 'react';

export const Article =({title, heading, description})=>{
    return(
        <div>
            <h1>{title}</h1>
            <h4>{heading}</h4>
            <p>{description}</p>
        </div>
    );
}