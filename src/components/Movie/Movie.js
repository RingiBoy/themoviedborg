import React from 'react';

const Movie = ({movie:{original_title, release_date, vote_average, backdrop_path}}) => {
    return (
        <div>


            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop_path}`}/>
            <p>{original_title}</p>-
            <p>{release_date}</p>
            vote_average:{vote_average}


        </div>
    );
};

export default Movie;


// https://www.themoviedb.org/t/p/w440_and_h660_face/w2loOtr8rYmIh13xyKCYdWHu58F.jpg