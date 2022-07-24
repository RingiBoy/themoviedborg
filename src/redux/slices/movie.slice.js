import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";


const initialState = {
    movies:[],
    status:null,
    genres:[],
    movie:{},
    genre:null,
    totalPages:null,
    checked:false,
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page, genre})=>{
        const {data} = await movieService.getAll(page,genre);
        console.log('moviesAll', data);
        console.log('genre', genre);
        console.log('page', page);

        return data
    }
);

const searchFilm = createAsyncThunk(
    'searchFilm',
    async({query, page})=>{

        const {data} =  await movieService.search(query, page );
        console.log('searchData', data);
        console.log('page', page);
        console.log('query', query);

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
        changeToggle:(state,action)=>{

            state.checked = action.payload

        }
    },
    extraReducers:{

        [getAll.pending]:(state)=>{
            state.status= 'loading'
        },
        [getAll.fulfilled]:(state, action)=>{
            state.movies= action.payload.results
            state.status= 'update'
        },
        [getAll.rejected]:(state)=>{
            state.status= 'error'
        },

        [searchFilm.fulfilled]:(state, action)=>{
            // console.log('searchArray', action.payload.results);
            state.movies= action.payload.results
            state.status= 'update'
            state.totalPages = action.payload.total_pages;
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
        }

    }
})


const {reducer:movieReducer, actions:{changeToggle}}=movieSlice;

const movieActions={
    getAll,
    searchFilm,
    getAllGenres,
    getSingleMovie,
    getMoviesWithGenre,
    changeToggle




}

export {
    movieReducer,
    movieActions
}
