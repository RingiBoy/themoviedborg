import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";

const SearchForm = () => {
    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch()



    const submit = async ({searchText}) => {

        console.log(searchText);
        const textToPlus = await searchText.trim().replace(" ", "+");
        await console.log(textToPlus);
        await dispatch(movieActions.searchFilm({text: textToPlus}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <lable>search<input type="text" {...register('searchText')}/></lable>
            </div>

        </form>
    );
};

export default SearchForm;