import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import {
  Navigator
} from 'react-native-deprecated-custom-components';

import Movies from './src/Movies';

import Confirmation from './src/Confirmation';

const RouteMapper = (route, navigator) => {
  if (route.name === 'movies') {
    return (
      <Movies navigator={navigator} />
    );
  } else if (route.name === 'confirmation') {
    return (
      <Confirmation code={route.code} navigator={navigator} />
    );
  }
};

export default class App extends Component {
  render() {
    return (
      <Navigator
      //Default to movies route
      initialRoute={{ name: 'movies' }}
      //Use FloatFromBottom transition between screens
      configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      // Pass a route mapper functions
      renderScene={RouteMapper}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
