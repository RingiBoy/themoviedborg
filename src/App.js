import React from 'react';

import Movies from "./pages/Movies/Movies";
import {Route, Routes, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SingleMovie from "./pages/SingleMovie/SingleMovie";
import Search from "./pages/Search/Search";


const App = () => {

    return (

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'search'} element={<Search/>}/>
                <Route path={'search/:id'} element={<SingleMovie/>}/>
                <Route path={'movies'} element={<Movies/>}/>
                <Route path={'movies/:id'} element={<SingleMovie/>}/>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>

    )

};

export default App;