import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CardMovie from '../../components/CardMovie/CardMovie';
import FilterGenre from '../../components/FilterGenre/FilterGenre';


function Favorites(props) {

  const [searchFor, setSearchFor] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(false);

  const favoriteMoviesList = useSelector(state => state.movie.favoriteMovies);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={{flex:1, height: '100%', width:'100%', marginTop: '22%'}}>
      {
        favoriteMoviesList &&
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
        </ScrollView>
      <StatusBar style='light' hidden={false} translucent={false}/>
    </View>
  );
}

export default Favorites;