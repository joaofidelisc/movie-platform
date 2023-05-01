import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Dimensions, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');


function FilterGenre({handleSelectedFilter, genreList}) {
  return (
    <View style={{position: 'absolute', top: 0, width: '70%', height: height*0.6, backgroundColor: '#6759C0', right: 0, zIndex: 999}}>
        <TouchableOpacity 
          onPress={()=>handleSelectedFilter(false)}
          style={{position: 'absolute', top: height*0.05, right: width*0.04}}
        >
          <Icon name='x' color = 'white' size={height*0.03}/>
        </TouchableOpacity>
        {
          genreList.genres && 
          genreList.genres.map(genre =>(
            <TouchableOpacity
              key={genre.id}
              style={{width: '50%'}}          
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: height*0.022
                
                }}
              >
                {genre.name}
              </Text>
            </TouchableOpacity>
          ))
        } 
        <StatusBar style='light' hidden={false} translucent={false}/>
    </View>
  );
}

export default FilterGenre;