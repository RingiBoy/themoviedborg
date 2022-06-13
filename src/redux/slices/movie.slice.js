import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";


const initialState = {
    movies:[],
    status:null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ()=>{
        const {data} = await movieService.getAll();
        return data
    }
);

const searchFilm = createAsyncThunk(
    'searchFilm',
    async({text:{
    search
}})=>{

        const {data} =  await movieService.search(search);
        console.log('searchData', data);

        return data
    }
)


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
            console.log(action.payload);
            state.movies= action.payload.results
            state.status= 'update'

        },[getAll.rejected]:(state, action)=>{
            state.status= 'error'
        },
        [searchFilm.fulfilled]:(state, action)=>{
            console.log('searchArray', action.payload.results);
            state.movies= action.payload.results
            state.status= 'update'
        },
        [searchFilm.rejected]:(state, action)=>{

            console.log('errorSearch', action.payload);
        }
    }
})


const {reducer:movieReducer, actions}=movieSlice;

const movieActions={
    getAll,
    searchFilm
}

export {
    movieReducer,
    movieActions
}