import React from 'react';

import css from "./Movie.module.css"
import {Link} from "react-router-dom";

const Movie = ({movie:{original_title, release_date, vote_average, backdrop_path, id}}) => {
    return (
        <div className={css.movie}>


            <img className={css.image} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop_path}`}/>
            <p className={css.nameFilm}>{original_title}</p>
            <p>{release_date}</p>
            <p>{vote_average}</p>
            <Link to={id.toString()}>get Details</Link>

        </div>
    );
};

export default Movie;


// https://www.themoviedb.org/t/p/w440_and_h660_face/w2loOtr8rYmIh13xyKCYdWHu58F.jpg