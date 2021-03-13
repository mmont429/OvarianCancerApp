import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {
  Image, 
  Platform, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from'./screenStyles'
import { MonoText } from '../components/StyledText';

const {height, width} = Dimensions.get('window')

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/Ovarian-Cancer-Ribbon.png')}
            style={styles.welcomeImage}
          />
        </View>

        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
          <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 50, textAlign:"center"}}>
            Welcome to the Ovarian Cancer App
          </Text>
        </View>

        <View style={{marginTop: 40, paddingHorizontal: 20 }}>
          <Text style={{fontSize: 16, fontWeight: '500', paddingHorizontal: 30, textAlign:"center"}}>
            Information on Ovarian Cancer
          </Text>
          <View style={{width: width-40, height: 200, marginTop: 20, backgroundColor: '#fff' }}>
            <Image 
            style={{flex: 1, height: null, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 3, borderColor: '#dddfff'}}
            source={require('../assets/images/symptoms.png')}
            />
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

