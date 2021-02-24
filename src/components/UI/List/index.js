import React from 'react';

function List({children, classes}) {
    return (
        <ul className={classes}>
            {children}
        </ul>
    );
}

export default List;