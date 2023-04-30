import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import movieReducer from './slices/movieSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  movie: movieReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
