import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Icon from 'react-native-vector-icons/Feather';
import StarRating from 'react-native-star-rating';


const { width, height } = Dimensions.get('window');
import { styles } from './MovieDetailsStyle';
import { useRoute } from '@react-navigation/native';

interface Movie {
  title: string;
  vote_average: number;
  original_language: string;
  release_date: string;
  runtime: number;
  overview: string;
  production_companies: Array<{
    id: number;
    logo_path: string;
  }>;
  poster_path: string;
}


function MovieDetails() {
  const route = useRoute();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [movieCredits, setMovieCredits] = useState(null);
  
  const { id } = route.params;

  const minutesToHours = (minutes:number) => {
    const hours = Math.floor(minutes/60);
    const remainingMinutes = minutes%60;
    return `${hours}h${remainingMinutes}m`;
  }

  useEffect(()=>{
    const fetchMovieDetails = () =>{
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=86d244a6682bede82e0fd58ab028b3c2&language=pt-BR`)
      .then(res => res.json())
      .then(json => setMovie(json))
      .catch(err => console.log(err));
    }
    const fetchMovieCredits = () =>{
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=86d244a6682bede82e0fd58ab028b3c2&language=pt-BR`)
      .then(res => res.json())
      .then(json => setMovieCredits(json))
      .catch(err => console.log(err));
    }
    fetchMovieDetails();
    fetchMovieCredits()
  }, [id]);


  if (!movie && !movieCredits){
    return (
      <View style={styles.viewLoading}>
        <Text style={styles.loading}>Carregando...</Text>
      </View>
    )
  }

  return (
    <View style={styles.viewContainer}>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} />
        </View>
        <View>
          <Text style={styles.title}>{movie.title}</Text>
          <StarRating
            disabled={true}
            maxStars={10}
            rating={movie.vote_average}
            starSize={width * 0.06}
            fullStarColor={'#6759C0'}
            halfStarColor={'#6759C0'}
            emptyStarColor={'#6759C0'}
            starStyle={styles.starStyle}
          />
          <View style={styles.viewGeneralInfo}>
            <View style={styles.item}>
              <Text style={styles.title}>Idioma</Text>
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>{movie.original_language.toUpperCase()}</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Lançamento</Text>
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>{movie.release_date}</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Duração</Text>
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>{minutesToHours(movie.runtime)}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.title}>Sinopse</Text>
            <Text style={styles.overview}>{movie.overview}</Text>
        </View>
        <View style={styles.wrapper}>
          <Icon name='arrow-left' color = '#6759C0' size={25} style={styles.arrowLeft}/>
          <Text style={[styles.title, styles.extraTitle]}>Atores</Text>
          <ScrollView 
            style={styles.scrollViewItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
          {
            movieCredits &&
            movieCredits.cast.map((credit) => (
              <View key={credit.id} style={styles.artistView}>
                {
                  credit.profile_path &&
                  <Image style={styles.artistImage} source={{ uri: `https://image.tmdb.org/t/p/w500/${credit.profile_path}` }} />
                }
                <Text style={styles.artistName}>{credit.character}</Text>
                <Text style={styles.artistName}>{credit.name}</Text>
              </View>
            ))
          }
          </ScrollView>
          <Icon name='arrow-right' color = '#6759C0' size={25} style={styles.arrowRight}/>
        </View>
        <View style={styles.wrapper}>
          <Icon name='arrow-left' color = '#6759C0' size={25} style={styles.arrowLeft}/>
          <Text style={[styles.title, styles.extraTitleCompany]}>Empresas de produção</Text>
          <ScrollView 
            style={styles.scrollViewItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
          {
            movie.production_companies.map((company) => (
              <View key={company.id} style={styles.companyView}>
                <Image style={styles.imageItem} source={{ uri: `https://image.tmdb.org/t/p/w500/${company.logo_path}`}} />
              </View>
            ))
          }
          </ScrollView>
          <Icon name='arrow-right' color = '#6759C0' size={25} style={styles.arrowRight}/>
        </View>
      </ScrollView>
      <StatusBar style='light' hidden={false} translucent={false}/>
    </View>
  );
}

export default MovieDetails;