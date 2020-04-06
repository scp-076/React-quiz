import React from 'react';
import classes from './preloader.css';

const Preloader = (props) => {
    return(
        <div className={classes.center}>
        <div className={classes.preloader}>
            <div />
            <div />
        </div>
        </div>
    )
};

export default Preloader;