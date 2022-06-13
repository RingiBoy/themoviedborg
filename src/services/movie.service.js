import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const movieService = {
    getAll:()=>axiosService.get(urls.movies),
    getAllGenres:()=>axiosService.get(urls.genres),
    search:(text)=>axiosService.get(`${urls.search}${text}`)
}


export {
    movieService
}