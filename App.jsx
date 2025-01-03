import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <ScrollView contentContainerStyle={{gap: 10}} style={styles.container} horizontal>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  box1:{
    width: 80,
    height: 80,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  box2:{
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    borderRadius: 50,
  },
  box3:{
    width: 80,
    height: 80,
    backgroundColor: 'green',
    borderRadius: 50,
  },
})