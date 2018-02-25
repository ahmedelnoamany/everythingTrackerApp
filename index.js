import React, { Component } from 'react';
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet
 } from 'react-native';
 import { Provider } from 'react-redux';
 import store from './src/configureStore';

import App from './App';


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
    backgroundColor: '#F3F9D2'
  }
})


AppRegistry.registerComponent('everythingTrackerApp', () => everythingTrackerApp);
