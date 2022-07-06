import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Container from './src/components/Container';

export default function App() {
  return (
    <Container style={{backgroundColor: 'white'}}>
      <View>
        <Text>Change</Text>
        <StatusBar style="auto" />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});