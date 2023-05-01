import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  releaseYear: string;
  genreIds: number[];
}

interface Genre {
  id: number;
  name: string;
}

interface MovieState {
  movieList: any[];
  favoriteMovies: Movie[];
  genreList: Genre[];
}

const initialState: MovieState = {
  movieList: [],
  favoriteMovies: [],
  genreList: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovieList(state, action: PayloadAction<any[]>) {
      const movieList = action.payload;
      state.movieList = movieList;
    },
    addFavoriteMovie(state, action: PayloadAction<Movie>) {
      const movieInfo = action.payload;
      const movieExists = state.favoriteMovies.find(
        (movie) => movie.id === movieInfo.id
      );
      if (!movieExists) {
        state.favoriteMovies.push(movieInfo);
      }
    },
    removeFavoriteMovie(state, action: PayloadAction<any>) {
      const movieId = action.payload;
      const filteredFavoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== movieId
      );
      state.favoriteMovies = filteredFavoriteMovies;
    },
    addGenreList(state, action: PayloadAction<Genre[]>) {
      const genreInfo = action.payload;
      state.genreList = genreInfo;
    },
  },
});

export const { addMovieList, addFavoriteMovie, removeFavoriteMovie, addGenreList } = movieSlice.actions;
export default movieSlice.reducer;
