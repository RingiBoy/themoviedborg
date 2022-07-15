import React from 'react';

import { useNavigate} from "react-router-dom";
import css from './Genre.module.css'


const Genre = ({genre: {id, name}}) => {
    const navigate = useNavigate()

    const goMovies = () => {
        navigate(`/movies?page=1&genre=${id}`, {replace: true})

    }

    return (
        <div className={css.genres}>
            <button className={`btn btn-outline-success ${css.buttonGenre}`} onClick={goMovies}>{name}</button>
        </div>
    );
};

export default Genre;