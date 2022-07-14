import React from 'react';
import {Rating} from 'react-simple-star-rating'

const Stars = ({vote_average}) => {
    const rating = (vote_average)*10
    return (
        <div style={{padding:5}}>
            <Rating
                ratingValue={rating}
                size={25}
                tooltipDefaultText={'n/a'}
                fillColor='green'
                emptyColor='gray'
                readonly={true}
                allowHalfIcon={true}

                // className='foo' // Will remove the inline style if applied
            />
            {vote_average}
        </div>
    );
};

export default Stars;