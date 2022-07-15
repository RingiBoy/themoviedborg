import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const movieService = {
    getAll: (page, with_genres, language,) => axiosService.get(urls.movies, {
        params: {
            language,
            page,
            with_genres


        }
    }),
    getAllGenres: () => axiosService.get(urls.genres),

    search: (query, page) => axiosService.get(urls.search, {
        params: {
            page,
            query

        }
    }),
    getById: (id, language) => axiosService.get(`${urls.movieId}/${id}?api_key=7252238ff770ba83b38c3f3f1642c219`, {
        params: {
            language
        }
    })
    // ,
    // getMovieWithGenre: (id) => axiosService.get(`${urls.withGenres}/${id}`)
}


export {
    movieService
}