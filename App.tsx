import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from '@src/navigation';
import store from '@src/store';
import {theme} from '@src/theme';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <MainNavigator />
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
