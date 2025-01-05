import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';
import Search from './src/Screens/Search';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

// const Home = () => {
//   return(
//     <View>
//       <Text>Home</Text>
//     </View>
//   )
// }
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: 'red', tabBarActiveBackgroundColor: 'yellow', tabBarInactiveTintColor: 'blue', tabBarLabelStyle:{fontSize: 12, }, tabBarStyle:{height: 60}}}>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => (
        <Icon name="home" size={30} color="#900" />
      )}} />
      <Tab.Screen name="Search" component={Search} options={{tabBarIcon: () => (
        <Icon name="home" size={30} color="#900" />
      )}}/>
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: () => (
        <Octicons name="search" size={30} color="#900" />
      )}}/>
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    // <View>
    //   <Text>App</Text>
    //   <Home />
    //   {/* <Profile /> */}
    //   {/* <Search /> */}
    // </View>
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
