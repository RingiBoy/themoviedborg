import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import Genres from "../../components/Genres/Genres";
import css from "./MainLayout.module.css"
import SearchForm from "../../components/SearchForm/SearchForm";

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div className={css.mainLayout}>

            <div>
                <div className={css.link}>

                    <NavLink className={'nav-link'} to={"/movies"}>Movies</NavLink>
                    <NavLink className={'nav-link'} to={"/tv"}>TV</NavLink>
                    <NavLink className={'nav-link'} to={"/about"}>About us</NavLink>
                </div>

                <div className={css.buttonn}>
                    <button className={`btn btn-outline-primary `} onClick={() => navigate(-1)}>prev</button>
                    <button className={`btn btn-outline-primary `} onClick={() => navigate(+1)}>next</button>
                    <SearchForm/>
                </div>

            </div>
            <hr/>

            <div className={css.genresMovies}>
                <div className={css.genresList}><Genres/></div>


                <Outlet/>
            </div>


        </div>
    );
};

export default MainLayout;