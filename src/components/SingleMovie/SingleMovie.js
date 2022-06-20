import React, {useEffect} from 'react';

import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";
import css from "./SingleMovie.module.css"


const SingleMovie = () => {

    const {movie} = useSelector(state => state.movies)
    // useSelector(state => console.log(state))
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(movieActions.getSingleMovie(id))
    }, [id])

    return (
        <div className={css.main}>
            {id}
            {movie.homepage}
            {movie.release_date}
        </div>
    );
};

export default SingleMovie;