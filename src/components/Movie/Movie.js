import React from 'react';

import css from "./Movie.module.css"

const Movie = ({movie:{original_title, release_date, vote_average, backdrop_path}}) => {
    return (
        <div className={css.movie}>


            <img className={css.image} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop_path}`}/>
            <p className={css.nameFilm}>{original_title}</p>
            <p>{release_date}</p>
            <p>{vote_average}</p>


        </div>
    );
};

export default Movie;


// https://www.themoviedb.org/t/p/w440_and_h660_face/w2loOtr8rYmIh13xyKCYdWHu58F.jpg