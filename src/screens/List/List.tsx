import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, TextInput, Dimensions, TouchableOpacity } from 'react-native';


import CardMovie from '../../components/CardMovie/CardMovie';
import FilterGenre from '../../components/FilterGenre/FilterGenre';
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
  const [genreList, setGenreList] = useState<GenreList>({ genre: []});
  const [searchFor, setSearchFor] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterGenre, setFilterGenre] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(false);


  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p';
  const imageSize = 'w1280';

  const handleSelectedFilter = (state:boolean) =>{
    setSelectedFilter(state);
  }

  const handleSearchMovie = (text:string) => {
    setSearchFor(text);
  }

  const handleSelectFilter = () => {
    setSelectedFilter(true);
  }

  useEffect(()=>{
    const fetchMovies = () =>{
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=86d244a6682bede82e0fd58ab028b3c2&language=pt-BR&page=1')
        .then(res => res.json())
        .then(json => setMovieList(json))
        .catch(err => console.log(err));
    }
    fetchMovies();
  }, []);

  useEffect(()=>{
    if (searchFor.trim()){
      console.log('preencheu!!!');
    }else{
      console.log('vazio');
    }
    // console.log('pesquisando...');
  }, [searchFor])

  if (!movieList){
    return <Text>Carregando...</Text>
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <SearchBar handleSearchMovie={handleSearchMovie} handleSelectFilter={handleSelectFilter}/>
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
        {/* {
          selectedFilter &&
          <FilterGenre handleSelectedFilter={handleSelectedFilter} genreList={genreList}/>
        } */}
        <StatusBar style='light' hidden={false} translucent={false}/>
    </View>
  );
}

export default Lista;
