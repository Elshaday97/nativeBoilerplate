import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from '@src/navigation';
import store from '@src/store';
import {theme} from '@src/theme';
import React from 'react';
import {Provider as ThemeProvider} from 'react-native-paper';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainNavigator />
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
