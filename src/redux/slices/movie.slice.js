import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";


const initialState = {
    movies:[],
    status:null,
    genres:[],
    movie:{},
    page:null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (page)=>{
        const {data} = await movieService.getAll(page);
        console.log('moviesAll', data);

        return data
    }
);

const searchFilm = createAsyncThunk(
    'searchFilm',
    async(textForm)=>{

        const {data} =  await movieService.search(textForm);
        // console.log('searchData', data);

        return data
    }
);

const getAllGenres= createAsyncThunk(
    'allGenres',
    async ()=>{
        const {data} = await movieService.getAllGenres();

        return data
    }
);
const getSingleMovie = createAsyncThunk(
    'getSingleMovie',
    async(id)=>{

        const {data} =  await movieService.getById(id);
        // console.log('singleFilm:', data);

        return data
    }
);

const getMoviesWithGenre = createAsyncThunk(
    'getMoviesWithGenre',
    async(id)=>{

        const {data} =  await movieService.getMovieWithGenre(id);
        // console.log('moviesWithGenre:', data);

        return data
    }
);


const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
    },
    extraReducers:{
        [getAll.pending]:(state, action)=>{
            state.status= 'loading'

        },
        [getAll.fulfilled]:(state, action)=>{

            state.movies= action.payload.results
            state.status= 'update'

        },[getAll.rejected]:(state)=>{
            state.status= 'error'
        },
        [searchFilm.fulfilled]:(state, action)=>{
            // console.log('searchArray', action.payload.results);
            state.movies= action.payload.results
            state.status= 'update'
        },
        [searchFilm.rejected]:(state)=>{
            state.status= 'error'

        },
        [getAllGenres.fulfilled]:(state, action)=>{

            state.genres= action.payload.genres


        },
        [getAllGenres.rejected]:(state)=>{
            state.status= 'error'

        },
        [getSingleMovie.fulfilled]:(state, action)=>{

            state.movie= action.payload


        },
        [getSingleMovie.rejected]:(state)=>{
            state.status= 'error'

        },
        [getMoviesWithGenre.fulfilled]:(state, action)=>{

            state.movie= action.payload


        },
        [getMoviesWithGenre.rejected]:(state)=>{
            state.status= 'error'

        }
    }
})


const {reducer:movieReducer, actions}=movieSlice;

const movieActions={
    getAll,
    searchFilm,
    getAllGenres,
    getSingleMovie,
    getMoviesWithGenre
}

export {
    movieReducer,
    movieActions
}