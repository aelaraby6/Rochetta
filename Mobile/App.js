import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onFinish={() => setCurrentScreen('login')} />;
      case 'login':
        return (
          <LoginScreen
            onNavigateToSignup={() => setCurrentScreen('signup')}
            onLoginSuccess={() => setCurrentScreen('home')}
          />
        );
      case 'signup':
        return (
          <SignupScreen
            onNavigateToLogin={() => setCurrentScreen('login')}
            onSignupSuccess={() => setCurrentScreen('home')}
          />
        );
      case 'home':
        return <HomeScreen onLogout={() => setCurrentScreen('login')} />;
      default:
        return <SplashScreen onFinish={() => setCurrentScreen('login')} />;
    }
  };

  return <SafeAreaProvider>{renderScreen()}</SafeAreaProvider>;
}
