import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Movie from "../../components/Movie/Movie";
import {movieActions} from "../../redux/slices/movie.slice";
import css from "./Movies.module.css"
import {Outlet} from "react-router-dom";

const Movies = () => {
    const {movies, status} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [])

    return (
        <div >
            {/*{status && <h1>{status}</h1> }*/}
            <div><Outlet/></div>
            <div className={css.movies}>{movies.map(movie => <Movie key={movie.id} movie={movie}/>)}</div>

        </div>
    );
};

export default Movies;