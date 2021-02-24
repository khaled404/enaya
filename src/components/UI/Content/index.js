import React from 'react';

const Content = ({classes,children}) => {
    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Content;