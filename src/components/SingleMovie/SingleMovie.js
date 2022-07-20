import React, {useEffect} from 'react';

import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";
import css from "./SingleMovie.module.css"
import Genre from "../Genre/Genre";
import Stars from "../Stars/Stars";


const SingleMovie = () => {

    const {movie, checked} = useSelector(state => state.movies)
    // useSelector(state => console.log(state))
    const dispatch = useDispatch()
    const {id} = useParams()


    useEffect(() => {
        dispatch(movieActions.getSingleMovie(id))
    }, [id])



    const lightTheme = css.main;
    const darkTheme = css.mainDark;

    return (

        <div className={(checked ? darkTheme : lightTheme)}>


            {/*{id}*/}
            {/*{movie.homepage}*/}
            {/*{movie.release_date}*/}

            <img className={css.img} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}/>
            <div className={css.description}>
                <div>
                    <h1>{movie.title}</h1>
                    <div>
                        <span>Release Date: {movie.release_date}</span>
                        {movie.genres &&
                        <span className={css.genresMap}>
                            {movie.genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
                        </span>}
                        <span>User Score: <Stars vote_average={movie.vote_average}/></span>


                    </div>

                </div>
                <div>
                    <h3 style={{fontFamily: "'Source Sans Pro', 'Arial', 'sans-serif'",}}>{movie.tagline}</h3>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                </div>
            </div>


        </div>
    );
};

export default SingleMovie;