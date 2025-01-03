import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
  Pressable,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import React from 'react';

const App = () => {
  const theme = useColorScheme();
  // console.log(theme, "theme");
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? 'black' : 'white';
  const textColor = isDark ? 'white' : 'black';
  return (
    // <ScrollView>
    //   <SafeAreaView style={styles.container}>
    //     <Text style={styles.text}>App hh yeh</Text>
    //     <Image
    //       style={{width: 300, height: 300,}}
    //       source={{
    //         uri: 'https://images.unsplash.com/photo-1734545503371-9a45282044d8?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //       }}
    //     />
    //     <Button title="Press Me"></Button>
    //     <TouchableOpacity style={{padding: 10, backgroundColor: "yellow"}} onPress={() => Alert.alert("Pressed!!")}>
    //       <Text style={{color:'green', fontSize: 15}}>Press Me</Text>
    //     </TouchableOpacity>

    //     <Pressable style={styles.button}>
    //       <Text style={styles.btnText}>Press Me</Text>
    //     </Pressable>
    //   </SafeAreaView>
    // </ScrollView>
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.text, {color: textColor}]}>App hh yeh</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  // container: {
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "#dadada",
  //   // alignItems: 'center',
  //   padding: 10,
  //   gap: 10,
  // },
  // text:{
  //   fontWeight: 'bold',
  //   fontSize: 20,
  // },
  // button:{
  //   width: 150,
  //   padding: 10,
  //   backgroundColor: "#666",
  //   justifyContent:'center',
  //   alignItems: 'center',
  //   borderRadius: 50,
  //   marginTop: 5,
  //   borderWidth: 2,
  //   borderColor: 'yellow'
  // },
  // btnText:{
  //   color: 'white',
  //   fontSize: 18,
  //   fontWeight: '500',
  // }
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
