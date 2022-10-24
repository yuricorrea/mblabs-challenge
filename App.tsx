
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes';
import theme from '@theme';
import { MainContainer } from '@components/styles';

const App = () => {
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
          <Routes />
          </KeyboardAvoidingView>
          <SafeAreaView />
        </MainContainer>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
