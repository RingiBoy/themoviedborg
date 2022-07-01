import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Movie from "../../components/Movie/Movie";
import {movieActions} from "../../redux/slices/movie.slice";

import css from "./Movies.module.css"
import {Outlet, useSearchParams} from "react-router-dom";

const Movies = () => {
    const {movies, status} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    
    const [query, setQuery]= useSearchParams({page:'1'})

    useEffect(() => {
        dispatch(movieActions.getAll(query.get('page')))
    }, [query])

    const nextPage=()=>{
        let page = query.get('page');
        page =+page+1
        setQuery({page:page.toString()})

    }

    return (
        <div >
            {/*{status && <h1>{status}</h1> }*/}
            {/*{params && <h1>{params}</h1>}*/}
            <div><Outlet/></div>
            <button onClick={()=>nextPage()}> page:  {query.get('page')}</button>
            <div className={css.movies}>{movies.map(movie => <Movie key={movie.id} movie={movie}/>)}</div>
            
        </div>
    );
};

export default Movies;