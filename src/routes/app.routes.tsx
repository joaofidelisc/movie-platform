import React from 'react';
import { Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';

import List from '../screens/List/List';
import Login from '../screens/Login/Login';
import Favorites from '../screens/Favorites/Favorites';
import MovieDetails from '../screens/MovieDetails/MovieDetails';

type ParamList = {
    Login: undefined;
    Lista: undefined;
    Favoritos: undefined;
    Detalhes: undefined;
};
  

const Tab = createBottomTabNavigator<ParamList>();
const Stack = createStackNavigator<ParamList>();
const { width, height } = Dimensions.get("window");

function MovieDetailsRoute(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Lista">
                <Stack.Screen name="Lista" component={List} options={{headerShown: false}}/>
                <Stack.Screen name="Detalhes" component={MovieDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function EntryRoute(){
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="Lista"
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor:'#6759C0',

                }}
            >
                <Tab.Screen 
                    name="Lista" 
                    component={MovieDetailsRoute}
                    options={{

                        tabBarIcon:(({color})=>
                            <Icon name="list" color = {color} size={height*0.03}/>
                        )
                    }}
                />
                <Tab.Screen 
                    name="Favoritos" 
                    component={Favorites}
                    options={{

                        tabBarIcon:(({color})=>
                            <Icon name="star" color = {color} size={height*0.03}/>
                        )
                    }}
                />
                <Tab.Screen 
                    name="Login" 
                    component={Login}
                    options={{

                        tabBarIcon:(({color})=>
                            <Icon name="user" color = {color} size={height*0.03}/>
                        )
                    }}
                />
              
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default EntryRoute;