import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native';

import { useNavigation, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovie, removeFavoriteMovie } from '../../redux/slices/movieSlice';
import Icon from 'react-native-vector-icons/Feather';

import { styles } from './CardMovieStyle';

interface CardMovieProps {
  title: string;
  imageUrl: string;
  rating: number;
  releaseYear: number;
  id: number;
  favorites: boolean;
  overview: string;
}

function CardMovie(props: CardMovieProps) {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const dispatch = useDispatch();

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

    const removeFavoriteMovieHandler = () => {
        dispatch(removeFavoriteMovie(props.id));
    }

    const seeDetails = () => {
        navigation.navigate('Detalhes', { id:props.id });
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
                    <Icon name='star' color = 'black' size={15}/>
                    <Text style={styles.ratingAndRY}> | </Text>
                    <Text style={styles.ratingAndRY}>{props.releaseYear}</Text>
                </View>
                <TouchableOpacity
                    style={styles.commonButton}
                    onPress={seeDetails}
                >
                    <Text style={styles.buttonText}>Mais informações</Text>
                </TouchableOpacity>
                {
                    !props.favorites &&
                    <TouchableOpacity
                    style={styles.buttonAddFavorites}
                    onPress={addFavoriteMovieHandler}
                    >
                        <Text style={styles.buttonText}>Salvar nos favoritos</Text>
                    </TouchableOpacity>
                }
                {
                    props.favorites &&
                    <TouchableOpacity
                    style={styles.buttonRemoveFavorites}
                    onPress={removeFavoriteMovieHandler}
                    >
                        <Text style={styles.buttonText}>Remover dos favoritos</Text>
                    </TouchableOpacity>
                }
                
            </View>
        </View>
    );
}

export default CardMovie;
