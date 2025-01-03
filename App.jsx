import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [text, setText] = useState('');
  // console.log("Name", text);
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = () => {
    // console.log("Pressed!!")
    setSubmittedText(text);
    setText('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>We'll learn how to handle User Input</Text>
      <TextInput
        placeholder="Enter a text here......"
        style={styles.input}
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {submittedText ? <Text>Result: {submittedText}</Text> : null}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    padding: 5,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
  },
});
