import React from 'react';

const Thumbnail = ({imgSrc,classes}) => {
    return (

        <figure className={classes}>
            <img src={imgSrc} alt="Businex"/>
        </figure>
    );
};

export default Thumbnail;