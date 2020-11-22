import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from'./screenStyles'

export default function Info(){
    return(
        <View style={styles.container}>
            <Text> Hi </Text>
        </View>
    );
}
