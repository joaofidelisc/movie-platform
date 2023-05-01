import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoriteMovies: []
}

const preferenceSlice = createSlice({
    name: 'preference',
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
    },
});

export const { addFavoriteMovie, removeFavoriteMovie} = preferenceSlice.actions;
export default preferenceSlice.reducer;