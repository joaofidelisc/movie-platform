import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, TextInput, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CardMovie from '../../components/CardMovie/CardMovie';
import SearchBar from '../../components/SearchBar/SearchBar';
import { styles } from './FavoritesStyles';

function Favorites() {

  const [searchFor, setSearchFor] = useState('');
  const [idGenre, setIdGenre] = useState(null);

  const favoriteMoviesList = useSelector(state => state.movie.favoriteMovies);

  const handleSearchMovie = (text:string) => {
    setSearchFor(text);
  }

  const handleSelectByGenre = (id) => {
    setIdGenre(id);
  }
  
  if (favoriteMoviesList.length == 0){
    return(
      <View style={styles.viewLoading}>
        <Text style={styles.loading}>Lista de favoritos vazia!</Text>
        <SearchBar handleSearchMovie={handleSearchMovie} handleSelectByGenre={handleSelectByGenre}/>
        <StatusBar style='light' hidden={false} translucent={false}/>
      </View>    
    )
  }

  return (
    <View style={styles.viewContainer}>
        <ScrollView style={styles.scrollView}>
      {
        !idGenre && favoriteMoviesList &&
        favoriteMoviesList.map(movie =>(
          movie.title.toLowerCase().includes(searchFor.toLowerCase())?
            <CardMovie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
              releaseYear={movie.releaseYear}
              favorites={true}
            />:<></>
        ))}
          {
        idGenre && favoriteMoviesList &&
        favoriteMoviesList.map(movie =>(
          movie.title.toLowerCase().includes(searchFor.toLowerCase()) && movie.genreIds.includes(idGenre)?
            <CardMovie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
              releaseYear={movie.releaseYear}
              favorites={true}
            />:<></>
        ))}
        </ScrollView>
      <SearchBar handleSearchMovie={handleSearchMovie} handleSelectByGenre={handleSelectByGenre}/>
      <StatusBar style='light' hidden={false} translucent={false}/>
    </View>
  );
}

export default Favorites;