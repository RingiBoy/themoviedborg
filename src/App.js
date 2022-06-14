import React from 'react';

import Movies from "./components/Movies/Movies";
import SearchForm from "./components/SearchForm/SearchForm";
import Genres from "./components/Genres/Genres";
import css from "./App.module.css"
const App = () => {
    return (
        <div>

            <SearchForm/>


            <hr/>
            <div className={css.div}>
                <Genres/>
                <Movies/>
            </div>

        </div>
    );
};

export default App;