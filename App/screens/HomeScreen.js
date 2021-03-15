import * as React from 'react';
import {Image,Text, TouchableOpacity, View,Dimensions, Linking, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from'./screenStyles';
import { NavigationContainer } from '@react-navigation/native';

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

        <View style={{marginTop: 10, paddingHorizontal: 20 }}>
          <Text style={{fontSize: 16, fontWeight: '500', paddingHorizontal: 30, textAlign:"center"}}>
            A machine learning Ovarian Cancer recommendation software
          </Text>
          <View style={{width: width -40, height: 200, marginTop: 20, backgroundColor: '#fff', marginTop:50 }}>
            {/*Image Properties*/}
            <TouchableOpacity 
              onPress={() => Linking.openURL('https://ovariancanada.org/About-Ovarian-Cancer')} 
              style={{flex: 1, height: 20, width: null, resizeMode: 'contain'}} 
            >
              <Image 
                style={{flex: 1, height: 20, width: null, resizeMode: 'contain', borderRadius: 5, borderWidth: 2, borderColor: '#008080'}}
                source={require('../assets/images/symptoms.png')}
              />
            </TouchableOpacity>
            <Text style={{textAlign: "center", fontSize: 10, paddingTop: 5}}>
              Click the image above to visit Ovarian Cancer Canada for more information
            </Text>
          </View>
          <Text style={styles.bottomTextInst}>
            Please head to the Form page to begin
          </Text>
          <Text style={styles.bottomText}>
            Ovarian cancer is prominent cancer that effects many women. The American Cancer Society
            estimates over 21,000 women will be diagnosed this year and over 13,000 will die from ovarian cancer in the US.
            A large reason for a fatality rater over 50% is the lack of understanding of the cancer causing late detection. By using this
            app you will allow a machine learning algorithm to assist with prognoses. The app will continue to learn 
            from inputted data.
          </Text>
        </View>

      </ScrollView>
    </View>
  );

  
}

