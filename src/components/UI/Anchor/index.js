import React from 'react';

function Anchor({path,classes,target,children}) {
    return <a href={path} className={classes} target={target}>{children}</a>
}

export default Anchor;