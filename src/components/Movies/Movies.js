import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Movie from "../Movie/Movie";
import {movieActions} from "../../redux/slices/movie.slice";
import css from "./Movies.module.css"

const Movies = () => {
    const {movies, status} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [])

    return (
        <div className={css.movies}>
            {/*{status && <h1>{status}</h1> }*/}
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default Movies;