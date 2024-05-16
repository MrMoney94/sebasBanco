/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GlobalStateProvider} from './src/provider/GlobalStateProvider';

const Root = () => (
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>
);

AppRegistry.registerComponent(appName, () => Root);
