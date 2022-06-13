import React from 'react';
import Movies from "./components/Movies/Movies";
import SearchForm from "./components/SearchForm/SearchForm";

const App = () => {
    return (
        <div>
            <SearchForm/>
            <hr/>
          <Movies/>
        </div>
    );
};

export default App;