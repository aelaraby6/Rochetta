import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { colors } from '../theme/colors';

export default function SplashScreen({ onFinish }) {
  // Animation values
  const pulseAnim = useRef(new Animated.Value(0.9)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 1. Pulsing animation for the main logo container
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.95,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // 2. Fade in for the text and indicator
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // 3. Auto-finish after 3.5 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => clearTimeout(timer);
  }, [pulseAnim, fadeAnim, onFinish]);

  return (
   <View style={styles.container}>
      <StatusBar backgroundColor={colors.forestGreen} barStyle="light-content" />

      {/* Deep forest green background overlay */}
      <View style={styles.overlay} />

      <View style={styles.contentContainer}>
        {/* Animated Pill-shaped Logo Icon */}
        <Animated.View style={[styles.logoContainer, { transform: [{ scale: pulseAnim }] }]}>
          <View style={styles.pillIcon}>
            <View style={styles.pillHalfLeft} />
            <View style={styles.pillHalfRight} />
            <View style={styles.crossHorizontal} />
            <View style={styles.crossVertical} />
          </View>
        </Animated.View>

        {/* Brand Name */}
        <Animated.View style={[styles.brandContainer, { opacity: fadeAnim }]}>
          <Text style={styles.title}>Rochetta</Text>
          <Text style={styles.subtitle}>Your Digital Health Assistant</Text>
        </Animated.View>

        {/* Beautiful Custom Loading Indicator */}
        <Animated.View style={[styles.loaderContainer, { opacity: fadeAnim }]}>
          <ActivityIndicator size="large" color={colors.primary} style={styles.spinner} />
          <Text style={styles.loadingText}>Loading experience...</Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.forestGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.25)', // slight dark overlay over the forest green
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60%',
    width: '100%',
    paddingVertical: 40,
  },
  logoContainer: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(22, 163, 74, 0.4)', // semi-transparent primary green
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 8,
  },
  pillIcon: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Custom pill shape using borders and shapes
  pillHalfLeft: {
    position: 'absolute',
    width: 25,
    height: 50,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    left: 8,
    transform: [{ rotate: '-45deg' }],
  },
  pillHalfRight: {
    position: 'absolute',
    width: 25,
    height: 50,
    backgroundColor: colors.primary,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    right: 8,
    transform: [{ rotate: '-45deg' }],
  },
  // Plus sign in the middle of logo
  crossHorizontal: {
    position: 'absolute',
    width: 20,
    height: 6,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  crossVertical: {
    position: 'absolute',
    width: 6,
    height: 20,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 8,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  brandContainer: {
    alignItems: 'center',
  },
  loaderContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  spinner: {
    marginBottom: 12,
  },
  loadingText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
