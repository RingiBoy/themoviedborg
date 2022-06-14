import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";
import Genre from "../Genre/Genre";


const Genres = () => {
    const {genres}=useSelector(state => state.movies)

   // useSelector(state => console.log( 'componentGenres',state.movies.genres.genres)  )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getAllGenres())
    }, [])

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            {/*{genres.map(genre =>console.log(genre) )}*/}
        </div>
    );
};

export default Genres;