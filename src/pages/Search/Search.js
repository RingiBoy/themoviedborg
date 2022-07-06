import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/movie.slice";
import css from "../Movies/Movies.module.css";
import Movie from "../../components/Movie/Movie";

const Search = () => {

    const {movies, status} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const [query, setQuery] = useSearchParams()

    useEffect(() => {
        dispatch(movieActions.getAll(query.get('page'), ))
    }, [query])


    const nextPage = () => {
        // let page = query.get('page');
        // page =+page+1
        const queryObj = Object.fromEntries(query.entries())
        queryObj.page++
        setQuery(queryObj)
    }

    const prevPage = () => {
        const queryObj = Object.fromEntries(query.entries())
        if (queryObj.page && queryObj.page !== '1') {
            queryObj.page--
            setQuery(queryObj)
        }
    }

    return (
        <div>
            <div><Outlet/></div>

            <button onClick={() => prevPage()}> prev</button>
            <button onClick={() => nextPage()}> next</button>
            <div className={css.movies}>{movies.map(movie => <Movie key={movie.id} movie={movie}/>
            )}</div>
        </div>
    );
};

export default Search;