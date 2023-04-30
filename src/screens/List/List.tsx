import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import CardMovie from '../../components/CardMovie/CardMovie';
import FilterGenre from '../../components/FilterGenre/FilterGenre';

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
  const [filterGenre, setFilterGenre] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(false);


  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p';
  const imageSize = 'w1280';

  const handleSelectedFilter = (state:boolean) =>{
    setSelectedFilter(state);
  }


  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=86d244a6682bede82e0fd58ab028b3c2&language=pt-BR&page=1')
      .then(res => res.json())
      .then(json => setMovieList(json))
      .catch(err => console.log(err));
    
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=86d244a6682bede82e0fd58ab028b3c2&language=pt-BR')
      .then(res => res.json())
      .then(json => setGenreList(json))
      .catch(err => console.log(err));
    console.log('total pages:', totalPages);
  }, []);

  useEffect(()=>{
    if (searchFor.trim()){
      console.log("preencheu!!!");
    }else{
      console.log('vazio');
    }
    // console.log("pesquisando...");
  }, [searchFor])


  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{position: 'absolute', top: 0, width: '100%', height: height*0.1, backgroundColor: '#6759C0'}}> 
        <TextInput
          style={{color: 'black', width: '80%', backgroundColor:'#E6E9F1',height: height*0.05, position: 'absolute', top:height*0.04, borderRadius: 10, marginLeft: '4%' }}
          placeholderTextColor='black'
          placeholder='Busca'
          onChangeText={(text)=>setSearchFor(text as never)}
          //tipar dps
        />
        <TouchableOpacity 
          onPress={() => handleSelectedFilter(true)}
          style={{position: 'absolute', top: height*0.05, right: width*0.04}}
        >
          <Icon name="filter" color = 'white' size={height*0.03}/>
        </TouchableOpacity>
       
      </View>
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
            />:<></>
        ))}
        </ScrollView>
        {
          selectedFilter &&
          <FilterGenre handleSelectedFilter={handleSelectedFilter} genreList={genreList}/>
        }
        <StatusBar style='light' hidden={false} translucent={false}/>
    </View>
  );
}

export default Lista;
