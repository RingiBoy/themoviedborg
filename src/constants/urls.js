const baseURL=process.env.REACT_APP_API

// const apiKey ='7252238ff770ba83b38c3f3f1642c219'
const urls ={


    movies:'/discover/movie?api_key=7252238ff770ba83b38c3f3f1642c219',
    genres:'/genre/movie/list?api_key=7252238ff770ba83b38c3f3f1642c219',
    // search:'/search/movie?api_key=7252238ff770ba83b38c3f3f1642c219&query=',
    search:'/search/movie?api_key=7252238ff770ba83b38c3f3f1642c219',
    movieId:'/movie'
    // ,
    // withGenres:'/discover/movie?api_key=7252238ff770ba83b38c3f3f1642c219&with_genres='

}
//жанры:
// https://api.themoviedb.org/3/discover/movie?api_key=7252238ff770ba83b38c3f3f1642c219&with_genres=12%2C14%2C28



// https://api.themoviedb.org/3/discover/movie?page=2&api_key=7252238ff770ba83b38c3f3f1642c219
// https://api.themoviedb.org/3/movie/648579/lists?api_key=7252238ff770ba83b38c3f3f1642c219&language=en-US
//     https://api.themoviedb.org/3/genre/movie/list?api_key=7252238ff770ba83b38c3f3f1642c219
//         https://api.themoviedb.org/3/search/keyword?query=mario
// https://api.themoviedb.org/3/search/keyword?api_key=7252238ff770ba83b38c3f3f1642c219&query=super

export default baseURL
export {urls}


// https://api.themoviedb.org/3/search/movie?api_key=252238ff770ba83b38c3f3f1642c219&query=Jack+Reacher