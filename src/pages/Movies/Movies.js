import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Movie from "../../components/Movie/Movie";
import {movieActions} from "../../redux/slices/movie.slice";

import css from "./Movies.module.css"
import {Outlet, useSearchParams} from "react-router-dom";
import {Button} from "react-bootstrap";

const Movies = () => {
    const {movies, status} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    const [params, setParams] = useSearchParams({page: '1'})
    const page = params.get('page')
    const genre = params.get('genre')

    // const [query, setQuery] = useSearchParams({page: '1'})

    useEffect(() => {

        dispatch(movieActions.getAll({page, genre}))

    }, [params])

    const nextPage = () => {
        // let page = query.get('page');
        // page =+page+1
        const paramsObj = Object.fromEntries(params.entries())

        if (paramsObj.page && movies&& paramsObj.page !== '500') {
            paramsObj.page++
            setParams(paramsObj)
        }
    }

    const prevPage = () => {
        const paramObj = Object.fromEntries(params.entries())
        if (paramObj.page && paramObj.page !== '1') {
            paramObj.page--
            setParams(paramObj)
        }
    }

    return (
        <div>


            <div className={css.buttonPagination}>
                <Button className={'page-item'} onClick={() => prevPage()}> {`<<`} </Button>
                <h5 className={'page-item disabled'}>  Page:  {page}</h5>
                <Button className={'page-item'} onClick={() => nextPage()}> {`>>`}</Button>

            </div>
            <div className={css.movies}>{movies.map(movie => (<Movie key={movie.id} movie={movie}/>)
            )}</div>

        </div>
    );
};

export default Movies;