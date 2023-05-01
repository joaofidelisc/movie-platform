import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
      {/* <TextInput
        style={{width: '60%', borderWidth: 1}}
        placeholderTextColor='black'
        placeholder='Digite o seu e-mail'
        keyboardType='email-address'
      /> */}
      <StatusBar style='light' hidden={false} translucent={false}/>
    </View>
  );
}

export default Settings;