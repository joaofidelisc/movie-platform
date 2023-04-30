import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import movieReducer from './slices/movieSlice.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducer = combineReducers({
  movie: movieReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
