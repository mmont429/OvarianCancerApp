import React, {Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import styles from'./screenStyles'
import { ScrollView } from 'react-native-gesture-handler';

const Info = ({route}) =>{

        return(
            <View style={styles.containerML}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.mlInfo}>
                        <Text style={styles.mlTitle}>Recently Inputed Data</Text>
                    </View>
                    <View style={styles.test}>
                        <Text style={styles.mlText}>Family history: </Text>
                        <Text style={styles.mlText}>Patients Age: </Text>
                        <Text style={styles.mlText}>Undergoing menopause: </Text>
                        <Text style={styles.mlText}>Undergone pregnancy: </Text>
                        <Text style={styles.mlText}>Exposure to asbestos: </Text>
                    </View>
                    <View style={styles.mlRec}>
                        <Text style={styles.mlTitle}>Recommended Action</Text>
                    </View>
                </ScrollView>
                
            </View>
        );
    }
    


export default Info;