import React from 'react';
import {Outlet} from "react-router-dom";
import Genres from "../../components/Genres/Genres";
import css from "./MainLayout.module.css"
import Header from "../../components/Header/Header";


const MainLayout = () => {

    return (
        <div>
            <Header/>
           {/*<hr/>*/}
            <div className={css.genresMovies}>
                <div className={css.genresList}>
                    <Genres/>
                </div>
                <Outlet/>
            </div>


        </div>
    );
};

export default MainLayout;