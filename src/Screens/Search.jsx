import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Search = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 10}}>
        Search
      </Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
