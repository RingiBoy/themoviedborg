import React from 'react';
import {Rating} from 'react-simple-star-rating'

const Stars = ({vote_average}) => {


    const rating = Math.round(vote_average*10)/10
    return (
        <div style={{padding:5}}>
            <Rating
                ratingValue={((vote_average)*10)}
                size={25}
                tooltipDefaultText={'n/a'}
                fillColor='green'
                emptyColor='gray'
                readonly={true}
                allowHalfIcon={true}

                // className='foo' // Will remove the inline style if applied
            />
            {rating}


        </div>
    );
};

export default Stars;