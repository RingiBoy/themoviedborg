import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import Genres from "../../components/Genres/Genres";
import css from "./MainLayout.module.css"

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div className={css.mainLayout}>

            <div>

                <a href="/movies">Movies</a>
                <a href="/about">About us</a>
                <div>
                    <button onClick={()=>navigate(-1)}>prev</button>
                    <button onClick={()=>navigate(+1)}>next</button>
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