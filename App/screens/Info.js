import * as React from 'react';
import { Text, View } from 'react-native';
import styles from'./screenStyles'

export default class Info extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.test}> Machine Learning  </Text>
            </View>
        );
    }
}
