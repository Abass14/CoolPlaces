import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomText from './src/components/CustomText';
import OnboardingSwipe from './src/components/OboardingSwipe';

export default function App() {
  return (
    <View style={styles.container}>
        <OnboardingSwipe />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});
