import React from 'react';

function Text({styles,classes, children}) {
    return (
        <div style={{...styles}} className={classes}>
            <p>{children}</p>
        </div>
    );
}

export default Text;