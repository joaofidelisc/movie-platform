import React, { useEffect } from "react";
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from "react-native";

import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteMovie, test } from "../../redux/slices/movieSlice";
import Icon from 'react-native-vector-icons/Feather';

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
    const dispatch = useDispatch();

    const addFavoriteMovieHandler = () => {
        console.log("salvando nos favoritos...")
        const selectedMovie = {
            id: props.id,
            title: props.title,
            imageUrl: props.imageUrl,
            rating: props.rating,
            releaseYear: props.releaseYear
        }
        dispatch(addFavoriteMovie(selectedMovie));
        // dispatch(test('a'));
    }

    return (
        <View style={styles.viewContainer}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: props.imageUrl }} />
            </View>
            <View style={{flex:1}}>
                <Text style={styles.title}>{props.title}</Text>
                <View style={styles.viewRatingAndRY}>
                    <Text style={styles.ratingAndRY}>{props.rating}</Text>
                    <Icon name="star" color = 'black' size={15}/>
                    <Text style={styles.ratingAndRY}> | </Text>
                    <Text style={styles.ratingAndRY}>{props.releaseYear}</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate("Detalhes")}
                >
                    <Text style={styles.buttonText}>Mais informações</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={addFavoriteMovieHandler}
                >
                    <Text style={styles.buttonText}>Salvar nos favoritos</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CardMovie;
