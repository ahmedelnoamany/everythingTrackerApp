import React from 'react';
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';

import App from './App';

const store = configureStore();

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
});

const everythingTrackerApp = () => (

  <SafeAreaView style={styles.safeArea}>
    <Provider store={store}>
      <App />
    </Provider>
  </SafeAreaView>
);


AppRegistry.registerComponent('everythingTrackerApp', () => everythingTrackerApp);
