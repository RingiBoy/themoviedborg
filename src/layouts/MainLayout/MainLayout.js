import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import Genres from "../../components/Genres/Genres";
import css from "./MainLayout.module.css"
import SearchForm from "../../components/SearchForm/SearchForm";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";


const MainLayout = () => {


    const {checked} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    return (


        <div className={css.mainLayout}>
            <div>
                <div className={css.topLink}>
                    <div className={css.link}>
                        <NavLink className={'nav-link'} to={"/movies"}>Movies</NavLink>

                        <NavLink className={'nav-link'} to={"/about"}>About us</NavLink>
                    </div>
                    <div className={css.checkbox}>
                        <b>DARKMODE:</b>

                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => {
                                dispatch(movieActions.changeToggle(!checked))


                            }}
                        />
                        <img src="https://static.thenounproject.com/png/1664849-200.png" alt=""/>

                    </div>
                    <div className={css.user}>
                        <b>@RINGIBOY</b>
                        <img src="https://static.thenounproject.com/png/3806453-200.png" alt=""/>
                    </div>


                </div>
                <SearchForm/>


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