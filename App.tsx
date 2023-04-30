import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './src/redux/store';

import EntryRoute from './src/routes/app.routes';

let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <EntryRoute/>
      </PersistGate>
    </Provider>
  );
}
