import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

function MovieDetails() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MovieDetails</Text>
      <StatusBar style='light' hidden={false} translucent={false}/>
    </View>
  );
}

export default MovieDetails;