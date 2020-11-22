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


function LinksScreen({ navigation }) {
  return(
    <ReactNativeSettingsPage>
      <SectionRow text='Account Settings'>
        <NavigateRow
          text='Account Information'
          onPressCallback={()=> navigation.navigate('User')}
        />
        <NavigateRow
          text='Logout'
        />
      </SectionRow>
      
    </ReactNativeSettingsPage>
  );
}

export default LinksScreen;