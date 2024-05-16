import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MyTheme} from './src/utils/screenColor';
import {AppStack} from './src/routes/AppStack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
