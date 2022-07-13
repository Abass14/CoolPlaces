import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomText from './src/components/CustomText';
import OnboardingSwipe from './src/components/OboardingSwipe';
import OnboardingScreen from './src/screens/OnboardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/navigations/bottom/BottomTap';
import AuthStack from './src/navigations/stack/AuthStack';

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
          <AuthStack />
          {/* <BottomTab /> */}
        </NavigationContainer>
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
