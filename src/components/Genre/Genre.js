import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import css from './Genre.module.css'

const Genre = ({genre:{id, name}}) => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(useLocation())
    //onClick реализовать, по нажатию
    const goMovies = ()=>navigate(`/movies/genre/${id}`,{replace:true})


    return (
        <div className={css.genres}>


            <button className={css.buttonGenre} onClick={goMovies}>{name}</button>
            {/*<Link to={goMovies}>{name}</Link>*/}
            {/*<Link to={`moviesssss`}>{name}</Link>*/}
            {/*<a href=''>Movies</a>*/}
{/*https://api.themoviedb.org/3/discover/movie?api_key=7252238ff770ba83b38c3f3f1642c219&with_genres=12%2C14%2C28*/}
        </div>
    );
};

export default Genre;