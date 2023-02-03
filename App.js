import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import LoadURL from './LoadUrl';

export default function App() {
  return (
    <View style={styles.container}>
      <LoadURL name="test home page" eturl="https://scholarops.com/" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 0,
  }
});
