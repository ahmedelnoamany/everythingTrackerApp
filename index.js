import React, { Component } from 'react';
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet
 } from 'react-native';
 import { Provider } from 'react-redux';
 import configureStore from './src/configureStore';

import App from './App';

const store = configureStore();

export default everythingTrackerApp = () => (

  <SafeAreaView style={styles.safeArea}>
    <Provider store={store}>
      <App />
    </Provider>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#93B4D8'
  }
})


AppRegistry.registerComponent('everythingTrackerApp', () => everythingTrackerApp);
