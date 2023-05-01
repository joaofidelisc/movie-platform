import React, {useState, useEffect} from 'react';
import { View, Text, Dimensions, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './FilterGenreStyle';

const { width, height } = Dimensions.get('window');

interface Props{
  handleSelectedFilter: (value: boolean) => void;
  handleSelectByGenre: (id: number | null) => void;
}

function FilterGenre({handleSelectedFilter, handleSelectByGenre} : Props) {
  const genreList = useSelector(state => state.movie.genreList);

  const handleSelectGenre = (genreId: number | null) => {
    handleSelectByGenre(genreId);
    handleSelectedFilter(false);
  }

  return (
    <View style={styles.viewContainer}>
        <TouchableOpacity 
          onPress={()=>handleSelectedFilter(false)}
          style={styles.closeButton}
        >
          <Icon name='x' color = 'white' size={height*0.03}/>
        </TouchableOpacity>
        {
          genreList.genres && 
          genreList.genres.map(genre =>(
            <TouchableOpacity
              key={genre.id}
              style={styles.buttonGenre}
              onPress={()=>handleSelectGenre(genre.id)}          
            >
              <Text style={styles.textItem}>{genre.name}</Text>
            </TouchableOpacity>
          ))
        }
        <TouchableOpacity 
          style={styles.filterRemove}
          onPress={()=>handleSelectGenre(null)}
        >
          <Text style={styles.filterRemoveText}>Remover filtros</Text>
        </TouchableOpacity> 
    </View>
  );
}

export default FilterGenre;