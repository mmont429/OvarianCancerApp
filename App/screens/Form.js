import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from'./screenStyles'
import {Formik} from 'formik'

export default function Form(){
    return(
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>  
                <Formik
                    initialValues={{Test1: '', Test2: '', Test3:''}}
                    onSubmit={(values)=>{
                        console.log(values);
                    }}
                >
                    {props=>(
                        <View style={styles.contentContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder='Test1 Text'
                                onChangeText={props.handleChange('Test1')}
                                value={props.values.Test1}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='Test2 Text'
                                onChangeText={props.handleChange('Test2')}
                                value={props.values.Test2}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='Test3 Input'
                                onChangeText={props.handleChange('Test3')}
                                value={props.values.Test3}
                                keyboardType='numeric'
                            />

                            <Button title='Submit' color='blue' onPress={props.handleSubmit}/>

                        </View>
                    )}
                </Formik>
            </ScrollView> 
        </View>
    );
}
