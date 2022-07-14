import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/movie.slice";
import css from "../Movies/Movies.module.css";
import Movie from "../../components/Movie/Movie";
import {Button} from "react-bootstrap";


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

        if (paramsObj.page && paramsObj.page !== '500') {
            paramsObj.page++
            setParams(paramsObj)
        }
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
            <div className={css.buttonPagination}>
                <Button className={'page-item'} onClick={() => prevPage()}> {`<<`} </Button>
                <h5 className={'page-item disabled'}>  Page:  {page}</h5>
                <Button className={'page-item'} onClick={() => nextPage()}> {`>>`}</Button>

            </div>

            <div className={css.movies}>{movies.map(movie => <Movie key={movie.id} movie={movie}/>
            )}</div>
        </div>
    );
};

export default Search;