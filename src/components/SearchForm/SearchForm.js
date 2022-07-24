import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import css from './SearchForm.module.css';




const SearchForm = () => {
    const {reset, register, handleSubmit} = useForm();
   
    const navigate = useNavigate()


    
    const submit = async ({searchText}) => {

        const formatSearchText = searchText.trim().replaceAll(" ", "+");
        await navigate(`/search?page=1&query=${formatSearchText}`)
        
        reset()
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <div className={css.inputForm}>
                <label className={'input-group-text'}>Search:  <input className={'form-control'} type="text" placeholder={'Type to search...'} {...register('searchText')}/></label>

            </div>

        </form>
    );
};

export default SearchForm;