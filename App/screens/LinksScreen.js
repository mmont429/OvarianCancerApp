// Useless imports
//import { Ionicons } from '@expo/vector-icons';
//import * as WebBrowser from 'expo-web-browser';
//import { RectButton, ScrollView } from 'react-native-gesture-handler';
//import { NavigationContainer, StackActions } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import styles from'./screenStyles'
import User from './User'
import * as React from 'react';
import { Text, Button, View } from 'react-native';
import ReactNativeSettingsPage, { SectionRow, NavigateRow, SliderRow, CheckRow, SwitchRow } from 'react-native-settings-page';
import { State } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import  { NavigationContainer } from '@react-navigation/native'

function Settings() {
  return(
    <View>
      <Text>
        Welcome to settings
      </Text>
    </View>
  );
}

const Stack = createStackNavigator;
function LinksScreen({ navigation }) {
  return(
    <View>
      <Button 
        title="press"
        onPres={()=> navigation.navigate("User")}
      />
    </View>
  );

  /*
  //Using normal stack navigator
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Settings">
        <Stack.Screen name = "Settings" component = {Settings} />
        <Stack.Screen name = "Profile" component = {User} />

      </Stack.Navigator>
    </NavigationContainer>
  );
  */

  //This is using react native settings page
  /*
  return (
    <ReactNativeSettingsPage>
      <SectionRow text='Usage'>
        <NavigateRow
          text='Account Information'
        />
        <SliderRow
          text='Slider Row'
        />
        <CheckRow 
          text='Check Row'
        />
        <SwitchRow 
          text='Dark Mode'
        />
      </SectionRow>
      <Text style={styles.test} >Hello</Text>
    </ReactNativeSettingsPage>
  ); 
  */
}

export default LinksScreen;