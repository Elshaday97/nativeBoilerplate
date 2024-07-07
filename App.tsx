import {NavigationContainer} from '@react-navigation/native';
import ErrorBoundary from '@src/components/ErrorBoundary';
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
          <ErrorBoundary>
            <MainNavigator />
          </ErrorBoundary>
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
