import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Container from './src/components/Container';
import OnboardingView from './src/components/OnboardingView';
import CustomText from './src/components/CustomText';

export default function App() {
  return (
    <View style={styles.container}>
        <CustomText type="text">Cool Places</CustomText>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
