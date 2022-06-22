import React from 'react';
import {Link} from "react-router-dom";
import css from './Genre.module.css'

const Genre = ({genre:{id, name}}) => {
    return (
        <div className={css.genres}>

            <Link to={`movies${id.toString()}`}>{name}</Link>
            {/*<a href=''>Movies</a>*/}
{/*https://api.themoviedb.org/3/discover/movie?api_key=7252238ff770ba83b38c3f3f1642c219&with_genres=12%2C14%2C28*/}
        </div>
    );
};

export default Genre;