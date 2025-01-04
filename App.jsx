import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';
import Search from './src/Screens/Search';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// const Home = () => {
//   return(
//     <View>
//       <Text>Home</Text>
//     </View>
//   )
// }
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile Screens',
          headerStyle: {backgroundColor: 'red'},
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    // <View>
    //   <Text>App</Text>
    //   <Home />
    //   {/* <Profile /> */}
    //   {/* <Search /> */}
    // </View>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
