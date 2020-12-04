import { Auth } from 'aws-amplify';
import styles from'./screenStyles'
import User from './User'
import * as React from 'react';
import ReactNativeSettingsPage, { SectionRow, NavigateRow } from 'react-native-settings-page';



function LinksScreen({ navigation }) {
  return(
    <ReactNativeSettingsPage>
      <SectionRow text='Account Settings'>
        <NavigateRow
          text='Account Information'
          onPressCallback={()=> navigation.navigate('Profile')}
        />
        <NavigateRow
          text='Logout'
          onPressCallback={() => Auth.signOut({ global:true })}
        />
      </SectionRow>
      
    </ReactNativeSettingsPage>
  );
}

export default LinksScreen;