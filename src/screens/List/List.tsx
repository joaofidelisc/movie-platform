import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { addGenreList } from '../../redux/slices/movieSlice';
import CardMovie from '../../components/CardMovie/CardMovie';
import SearchBar from '../../components/SearchBar/SearchBar';

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
  const [movieList, setMovieList] = useState<MovieList>({ results: [] });
  const [searchFor, setSearchFor] = useState('');
  
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p';
  const imageSize = 'w1280';
  
  const dispatch = useDispatch();

  const handleSearchMovie = (text:string) => {
    setSearchFor(text);
  }

  useEffect(()=>{
    const fetchMovies = () =>{
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=86d244a6682bede82e0fd58ab028b3c2&language=pt-BR&page=1')
        .then(res => res.json())
        .then(json => setMovieList(json))
        .catch(err => console.log(err));
    }
    const fetchGenre = () => {
      fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=86d244a6682bede82e0fd58ab028b3c2&language=pt-BR')
      .then(res => res.json())
      .then(json => dispatch(addGenreList(json)))
      .catch(err => console.log(err));
    }
    fetchMovies();
    fetchGenre();
  }, []);


  if (!movieList){
    return <Text>Carregando...</Text>
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView style={{flex:1, height: '100%', width:'100%', marginTop: '22%'}}>
      {
        movieList.results &&
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
            />:<></>
        ))}
        </ScrollView>
        <SearchBar handleSearchMovie={handleSearchMovie}/>
        <StatusBar style='light' hidden={false} translucent={false}/>
    </View>
  );
}

export default Lista;
