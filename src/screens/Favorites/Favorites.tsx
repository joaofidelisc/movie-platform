import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";


function Favorites() {

  const favoriteMoviesList = useSelector(state => state.movie.favoriteMovies);
  useEffect(()=>{
    console.log("Favorite movies:", favoriteMoviesList);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites</Text>
      <StatusBar style='light' hidden={false} translucent={false}/>
    </View>
  );
}

export default Favorites;