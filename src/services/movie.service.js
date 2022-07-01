import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const movieService = {
    getAll:(page, language)=>axiosService.get(urls.movies, {
        params:{
            language,
            page


    }}),
    getAllGenres:()=>axiosService.get(urls.genres),
    search:(text)=>axiosService.get(`${urls.search}${text}`),
    getById:(id, language)=>axiosService.get(`${urls.movieId}/${id}?api_key=7252238ff770ba83b38c3f3f1642c219`,{
        params:{
            language
        }
    }),
    getMovieWithGenre:(id)=>axiosService.get(`${urls.withGenres}/${id}`)
}


export {
    movieService
}