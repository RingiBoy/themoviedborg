import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";
import {useNavigate, useSearchParams} from "react-router-dom";



const SearchForm = () => {
    const {reset, register, handleSubmit} = useForm();
    // const dispatch = useDispatch()
    const navigate = useNavigate()


    // const [query, setQuery] = useSearchParams()
    const submit = async ({searchText}) => {


        const formatSearchText = searchText.trim().replaceAll(" ", "+");
        await navigate(`/search?page=1&query=${formatSearchText}`)
        // const queryObj =  Object.fromEntries(query.entries())

        // await dispatch(movieActions.searchFilm(formatSearchText));
        // await console.log('queryObj',queryObj.page);
        // await console.log('queryObj',queryObj.query);
        // await console.log('formatSearchText',formatSearchText);
        // await setQuery(queryObj)

        // await console.log('navigate to search');
        // await console.log('query param:',formatSearchText);

        //
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <lable>search <input type="text" {...register('searchText')}/></lable>

            </div>

        </form>
    );
};

export default SearchForm;