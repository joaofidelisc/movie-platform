import React, {useEffect, useState} from 'react';
import { View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FilterGenre from '../FilterGenre/FilterGenre';


const {width, height} = Dimensions.get('window');

function SearchBar({handleSearchMovie}){
    const [openFilter, setOpenFilter] = useState(false);   
    
    const handleSelectedFilter = (state) => {
        setOpenFilter(state)
    }

    return(
        <View style={{position: 'absolute', top: 0, width: '100%', height: height*0.1, backgroundColor: '#6759C0'}}> 
            <TextInput
            style={{color: 'black', width: '80%', backgroundColor:'#E6E9F1',height: height*0.05, position: 'absolute', top:height*0.04, borderRadius: 10, marginLeft: '4%', padding: 5 }}
            placeholderTextColor='black'
            placeholder='Busca'
            onChangeText={handleSearchMovie}
            />
            <TouchableOpacity 
                onPress={()=>setOpenFilter(true)}
                style={{position: 'absolute', top: height*0.05, right: width*0.04}}
            >
                <Icon name='filter' color = 'white' size={height*0.03}/>
            </TouchableOpacity>
            {
                openFilter &&
                <FilterGenre handleSelectedFilter={handleSelectedFilter}/>
            }
        </View>
    )
}

export default SearchBar;