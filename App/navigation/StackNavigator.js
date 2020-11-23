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
      <Stack.Screen name ="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
// Settings page
const SettingStackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName={'Settings'} >
        <Stack.Screen name="Settings" component={LinkScreen} />
        <Stack.Screen name="Profile" component={User} />
      </Stack.Navigator>
    );
  }
  // Form Page
  const FormStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    );
  }
  // Other page?
  const InfoStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    );
  }
  
  export { HomeStackNavigator, SettingStackNavigator, FormStackNavigator, InfoStackNavigator }; 