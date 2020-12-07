import * as React from 'react';
import { Text, View } from 'react-native';
import styles from'./screenStyles'

export default class Info extends React.Component{
    render(){
        return(
            <View style={styles.containerML}>
                <Text style={styles.test}> Machine Learning  </Text>
                <Text style={styles.mlInfo}>Likelyhood: </Text>
            </View>
        );
    }
}
