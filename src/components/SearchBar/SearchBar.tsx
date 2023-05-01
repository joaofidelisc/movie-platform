import React, {useEffect, useState} from 'react';
import { View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FilterGenre from '../FilterGenre/FilterGenre';

import { styles } from './SearchBarStyles';

const {width, height} = Dimensions.get('window');

function SearchBar({handleSearchMovie, handleSelectByGenre}){
    const [openFilter, setOpenFilter] = useState(false);   
    
    const handleSelectedFilter = (state) => {
        setOpenFilter(state)
    }

    return(
        <View style={styles.viewContainer}> 
            <TextInput
                style={styles.textInput}
                placeholderTextColor='black'
                placeholder='Busca'
                onChangeText={handleSearchMovie}
            />
            <TouchableOpacity 
                onPress={()=>setOpenFilter(true)}
                style={styles.filterButton}
            >
                <Icon name='filter' color = 'white' size={height*0.03}/>
            </TouchableOpacity>
            {
                openFilter &&
                <FilterGenre handleSelectedFilter={handleSelectedFilter} handleSelectByGenre={handleSelectByGenre}/>
            }
        </View>
    )
}

export default SearchBar;