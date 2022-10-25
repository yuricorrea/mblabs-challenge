
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  LogBox
} from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes';
import theme from '@theme';
import { MainContainer } from '@components/styles';
import { store, persistor } from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import i18n from '@translate';

const App = () => {
  LogBox.ignoreAllLogs();
  const isDarkMode = useColorScheme() === 'dark';

  const currentTheme = theme();

  return (
    <NavigationContainer>
      <ThemeProvider theme={currentTheme}>
        <MainContainer>
          <SafeAreaView>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={currentTheme.backgroundColor}
            />
          </SafeAreaView>
              <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1}}
        >
          <Provider store={store}>
            <PersistGate loading={<Text>{i18n.t('splash.loading')}</Text>} persistor={persistor} >
              <Routes />
            </PersistGate>
          </Provider>
          </KeyboardAvoidingView>
          <SafeAreaView />
        </MainContainer>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
