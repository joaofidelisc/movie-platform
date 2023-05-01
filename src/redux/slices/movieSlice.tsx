import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movieList: [],
    favoriteMovies: [],
    genreList: [],
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovieList(state, action){
            const movieList = action.payload;
            state.movieList = movieList;
        },
        addFavoriteMovie(state, action){
            const movieInfo = action.payload;
            console.log("movieInfo:", movieInfo)
            const movieExists = state.favoriteMovies.find((movie) => movie.id === movieInfo.id);
            if (!movieExists){
                state.favoriteMovies.push({
                    id: movieInfo.id,
                    title: movieInfo.title,
                    imageUrl: movieInfo.imageUrl,
                    rating: movieInfo.rating,
                    releaseYear: movieInfo.releaseYear,
                    genreIds: movieInfo.genreIds
                });
            }
        },
        removeFavoriteMovie(state, action){
            const movieId = action.payload;
            const filteredFavoriteMovies = state.favoriteMovies.filter((movie)=>movie.id != movieId);
            state.favoriteMovies = filteredFavoriteMovies;
        },
        addGenreList(state, action){
            const genreInfo = action.payload;
            state.genreList = genreInfo;
        },
    },
});

export const { addMovieList, addFavoriteMovie, removeFavoriteMovie, addGenreList } = movieSlice.actions;
export default movieSlice.reducer;