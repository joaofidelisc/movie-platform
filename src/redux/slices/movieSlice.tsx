import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
    favoriteMovies: AsyncStorage.getItem("favoriteMovies") ? JSON.stringify(AsyncStorage.getItem("favoriteMovies")) : []
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
                    imageUrl: movieInfo.url,
                    rating: movieInfo.rating,
                    releaseYear: movieInfo.releaseYear
                });
            }
        },
        removeFavoriteMovie(state, action){
            const movieId = action.payload;
            const filteredFavoriteMovies = state.favoriteMovies.filter((movie)=>movie.id != movieId);
            state.favoriteMovies = filteredFavoriteMovies;
        }
    },
});

export const { addFavoriteMovie, removeFavoriteMovie} = movieSlice.actions;
export default movieSlice.reducer;