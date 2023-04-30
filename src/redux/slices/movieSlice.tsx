import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
    favoriteMovies: []
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addFavoriteMovie(state, action){
            const movieInfo = action.payload;
            const movieExists = state.favoriteMovies.find((movie) => movie.id === movieInfo.id);
            if (!movieExists){
                state.favoriteMovies.push({
                    id: movieInfo.id,
                    title: movieInfo.title,
                    imageUrl: movieInfo.imageUrl,
                    rating: movieInfo.rating,
                    releaseYear: movieInfo.releaseYear
                });
            }
        },
        removeFavoriteMovie(state, action){
            const movieId = action.payload;
            const filteredFavoriteMovies = state.favoriteMovies.filter((movie)=>movie.id != movieId);
            state.favoriteMovies = filteredFavoriteMovies;
        },
        test(state, action){
            console.log("TESTEEEE");
        }
    },
});

export const { addFavoriteMovie, removeFavoriteMovie, test} = movieSlice.actions;
export default movieSlice.reducer;