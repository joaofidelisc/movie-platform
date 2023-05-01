import React from 'react';
import { View, TouchableOpacity, Image, Text, Share, Alert } from 'react-native';

import { useNavigation, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { addFavoriteMovie, removeFavoriteMovie } from '../../redux/slices/movieSlice';
import Icon from 'react-native-vector-icons/Feather';

import Toast from 'react-native-simple-toast';

import { styles } from './CardMovieStyle';

interface CardMovieProps {
  title: string;
  imageUrl: string;
  rating: number;
  releaseYear: number;
  id: number;
  favorites: boolean;
  overview: string;
  genreIds: number[]
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
            releaseYear: props.releaseYear,
            genreIds: props.genreIds
        }
        Toast.show('Filme adicionado aos favoritos!', Toast.LONG, Toast.TOP);
        dispatch(addFavoriteMovie(selectedMovie));
    }

    const removeFavoriteMovieHandler = () => {
        dispatch(removeFavoriteMovie(props.id));
    }

    const seeDetails = () => {
        navigation.navigate('Detalhes', { id:props.id });
    }


    const onShare = async () => {
        try {
            const result = await Share.share({
                message: `Confira o filme ${props.title} que eu encontrei no DevMovies! Ano de lançamento: ${props.releaseYear}, avaliação: ${props.rating}/10. Saiba mais na plataforma DevMovies!`
            });
            if (result.action === Share.dismissedAction) {
                Toast.show('Operação negada', Toast.LONG, Toast.TOP);
            }
        } catch (error: any) {
            Alert.alert('Algum erro ocorreu');
        }
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
                 <TouchableOpacity
                    style={styles.commonButton}
                    onPress={onShare}
                >
                    <Text style={styles.buttonText}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CardMovie;
