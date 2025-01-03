import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '50%', height: '50%', backgroundColor: 'red'}}>
        <Text>
          App
        </Text>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#6e6e6f',
  },

})