import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const movieService = {
    getAll:()=>axiosService.get(urls.movies),
    getAllGenres:()=>axiosService.get(urls.genres),
    search:(text)=>axiosService.get(`${urls.search}${text}`),
    getById:(id)=>axiosService.get(`${urls.movieId}/${id}?api_key=7252238ff770ba83b38c3f3f1642c219`),
    getMovieWithGenre:(id)=>axiosService.get(`${urls.withGenres}/${id}`)
}


export {
    movieService
}