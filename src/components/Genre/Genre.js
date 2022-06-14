import React from 'react';

const Genre = ({genre:{id, name}}) => {
    return (
        <div>
        {name}
        </div>
    );
};

export default Genre;