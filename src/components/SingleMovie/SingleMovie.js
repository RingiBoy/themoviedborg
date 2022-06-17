import React, {useEffect} from 'react';

import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";


const SingleMovie = () => {


    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(movieActions.getSingleMovie(id))
    }, [])

    return (
        <div>
            {id}
        </div>
    );
};

export default SingleMovie;