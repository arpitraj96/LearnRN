import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flex: 1/2,
    flexDirection: 'column',
    backgroundColor: '#6e6e6f',
    // justifyContent: 'center',
    // justifyContent: 'space-around',
    // justifyContent: 'space-between',
    // justifyContent: 'space-evenly',
    alignItems: 'center', // It will not work with wrap
    alignContent: 'center', //This will work with wrap
    flexWrap: 'wrap',
  },
  box1: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    // alignSelf: 'flex-end',
    flexGrow: 1,
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: 'green',
  },
});
