import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LinkScreen from "../screens/LinksScreen"
import HomeScreen from "../screens/HomeScreen"
import User from "../screens/User"
import Form from "../screens/Form"
import Info from "../screens/Info"

const Stack = createStackNavigator();

//Home Page
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="Home" component={HomeScreen} options={{ headerStyle: { backgroundColor:'#3FBFBF', borderWidth:1, borderRadius: 10, borderColor:'rgba(0, 128, 128, 0.74)'}, headerTintColor: '#fff'}}/>
    </Stack.Navigator>
  )
}
// Settings page
const SettingStackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName={'Settings'} >
        <Stack.Screen name="Settings" component={LinkScreen} options={{ headerStyle: { backgroundColor:'#3FBFBF', borderWidth:1, borderRadius: 10, borderColor:'rgba(0, 128, 128, 0.74)'}, headerTintColor: '#fff'}}/>
        <Stack.Screen name="Profile" component={User} options={{ headerStyle: { backgroundColor:'#3FBFBF', borderWidth:1, borderRadius: 10, borderColor:'rgba(0, 128, 128, 0.74)'}, headerTintColor: '#fff'}}/>
      </Stack.Navigator>
    );
  }
  // Form Page
  const FormStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Form" component={Form} options={{ headerStyle: { backgroundColor:'#3FBFBF', borderWidth:1, borderRadius: 10, borderColor:'rgba(0, 128, 128, 0.74)'}, headerTintColor: '#fff'}}/>
      </Stack.Navigator>
    );
  }
  // Other page?
  const InfoStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Info" component={Info} options={{ headerStyle: { backgroundColor:'#3FBFBF', borderWidth:1, borderRadius: 10, borderColor:'rgba(0, 128, 128, 0.74)'}, headerTintColor: '#fff'}}/>
      </Stack.Navigator>
    );
  }
  
  export { HomeStackNavigator, SettingStackNavigator, FormStackNavigator, InfoStackNavigator }; 