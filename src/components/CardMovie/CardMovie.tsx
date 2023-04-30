import React, { useEffect } from "react";
import { View, TouchableOpacity, Image, Text, Dimensions } from "react-native";

import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteMovie } from "../../redux/slices/movieSlice";

import { styles } from "./CardMovieStyle";

interface CardMovieProps {
  title: string;
  imageUrl: string;
  rating: number;
  releaseYear: number;
  id: number
}

function CardMovie(props: CardMovieProps) {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const dispatch = useDispatch(); //tipar

    const addFavoriteMovieHandler = () => {
        const selectedMovie = {
            id: props.id,
            title: props.title,
            imageUrl: props.imageUrl,
            rating: props.rating,
            releaseYear: props.releaseYear
        }
        dispatch(addFavoriteMovie(selectedMovie));
    }

    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: props.imageUrl }} />
            </View>
            <View style={{flex:1}}>
                <Text>{props.title}</Text>
                <Text>{props.rating}</Text>
                <Text>{props.releaseYear}</Text>
                <TouchableOpacity
                    style={{backgroundColor: '#6759C0', width: '65%', height:'15%', justifyContent: 'center', alignItems:'center', borderRadius:10, marginTop: '10%'}}
                    onPress={()=>navigation.navigate("Detalhes")}
                >
                    <Text style={{color:'white'}}>Mais informações</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{backgroundColor: '#6759C0', width: '65%', height:'15%', justifyContent: 'center', alignItems:'center', borderRadius:10, marginTop: '10%'}}
                    onPress={addFavoriteMovieHandler}
                >
                    <Text style={{color:'white'}}>Salvar nos favoritos</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CardMovie;
