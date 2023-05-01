import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './LoginStyles';

function Login() {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textLogin}>Login</Text>
      <StatusBar style='light' hidden={false} translucent={false}/>
    </View>
  );
}

export default Login;