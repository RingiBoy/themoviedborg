import React from 'react';
import {Outlet} from "react-router-dom";
import Genres from "../../components/Genres/Genres";
import css from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div className={css.mainLayout}>

            <div>

                <a href="/movies">Movies</a>
                <a href="/about">About us</a>

            </div>
            <hr/>

            <div className={css.genresMovies}>
                <Genres/>
                <Outlet/>
            </div>


        </div>
    );
};

export default MainLayout;