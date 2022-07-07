import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/movie.slice";
import css from "../Movies/Movies.module.css";
import Movie from "../../components/Movie/Movie";


const Search = () => {

    const {movies, status} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const [params, setParams] = useSearchParams()
    const query = params.get('query')
    const page = params.get('page')

    useEffect(() => {
        dispatch(movieActions.searchFilm({query, page}))

    }, [params])



    const nextPage = () => {
        // let page = query.get('page');
        // page =+page+1
        const paramsObj = Object.fromEntries(params.entries())
        paramsObj.page++
        console.log('query',paramsObj.query);
        console.log('page',paramsObj.page);
        setParams(paramsObj)
    }

    const prevPage = () => {
        const paramsObj = Object.fromEntries(params.entries())
        if (paramsObj.page && paramsObj.page !== '1') {
            paramsObj.page--
            setParams(paramsObj)
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