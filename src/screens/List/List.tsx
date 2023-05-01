import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, TextInput, Dimensions, TouchableOpacity, Text } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { addGenreList, addMovieList } from '../../redux/slices/movieSlice';
import CardMovie from '../../components/CardMovie/CardMovie';
import SearchBar from '../../components/SearchBar/SearchBar';
import PagePicker from '../../components/PagePicker/PagePicker';
import { styles } from './ListStyle';

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface MovieList {
  results: Movie[];
}

interface GenreList {
  genre: Genre[];
}

interface TotalPages {
  total_pages: number;
}

const { width, height } = Dimensions.get('window');

function Lista() {
  const [searchFor, setSearchFor] = useState('');
  const [idGenre, setIdGenre] = useState(null);
  
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);


  const dispatch = useDispatch();

  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p';
  const imageSize = 'w1280';
  
  const movieList = useSelector(state => state.movie.movieList);

  const handleSearchMovie = (text) => {
    setSearchFor(text);
  }

  const handleSelectByGenre = (id) => {
    setIdGenre(id);
  }

  const handlePageChange = (page) =>{
    setCurrentPage(page)
  }

  useEffect(()=>{
    const fetchGenre = () => {
      fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=86d244a6682bede82e0fd58ab028b3c2&language=pt-BR')
      .then(res => res.json())
      .then(json => dispatch(addGenreList(json))).then(json => setTotalPages(json.totalPages))
      .catch(err => console.log(err));
    }
    fetchGenre();
  }, []);

  useEffect(()=>{
    const fetchMovies = () =>{
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=86d244a6682bede82e0fd58ab028b3c2&language=pt-BR&page=${currentPage}`)
        .then(res => res.json())
        .then(json => dispatch(addMovieList(json)))
        .catch(err => console.log(err));
    } 
    fetchMovies();
  }, [currentPage]);

  
  if (!movieList){
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.loading}>Carregando...</Text>
      </View>
    )
  }

  return (
    <View style={styles.viewContainer}>
      <ScrollView style={styles.scrollView}>
      {
        !idGenre && movieList.results &&
        movieList.results.map(movie =>(
          movie.title.toLowerCase().includes(searchFor.toLowerCase())?
            <CardMovie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={`${BASE_IMAGE_URL}/${imageSize}/${movie.poster_path}`}
              rating={movie.vote_average}
              releaseYear={new Date(movie.release_date).getFullYear()}
              overview={movie.overview}
              favorites={false}
              genreIds={movie.genre_ids}
            />:<></>
        ))}
         {
        idGenre && movieList.results &&
        movieList.results.map(movie =>(
          movie.title.toLowerCase().includes(searchFor.toLowerCase()) && movie.genre_ids.includes(idGenre)?
            <CardMovie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={`${BASE_IMAGE_URL}/${imageSize}/${movie.poster_path}`}
              rating={movie.vote_average}
              releaseYear={new Date(movie.release_date).getFullYear()}
              overview={movie.overview}
              favorites={false}
              genreIds={movie.genre_ids}
            />:<></>
        ))}
        </ScrollView>
        <SearchBar handleSearchMovie={handleSearchMovie} handleSelectByGenre={handleSelectByGenre}/>
        <PagePicker currentPage={currentPage} totalPages={20} onPageChange={handlePageChange}/>
        <StatusBar style='light' hidden={false} translucent={false}/>
    </View>
  );
}

export default Lista;
