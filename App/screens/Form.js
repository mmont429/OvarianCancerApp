import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from'./screenStyles'
import {Formik, Field} from 'formik'

export default function Form(){
    return(
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>  
            <Text style={{fontSize: 18, fontWeight: '500', paddingHorizontal: 10, textAlign:'center'}}> Please fill out the form below and answer as many questions as possible. </Text>
                <Formik
                    initialValues={{Test1: '', Test2: '', Test3:''}}
                    onSubmit={(values)=>{
                        console.log(values);
                    }}
                >
                    {props=>(
                        <View style={styles.contentContainer}>
                            <Text style={{fontSize: 15, fontWeight: '500', paddingHorizontal: 10}}> Is there a family history of ovarian cancer?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Yes/No'
                                onChangeText={props.handleChange('Test1')}
                                value={props.values.Test1}
                            />
                            <Text style={{fontSize: 15, fontWeight: '500', paddingHorizontal: 10}}> Patients Age?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='e.g. 52'
                                onChangeText={props.handleChange('Test2')}
                                value={props.values.Test2}
                                keyboardType='numeric'
                            />
                            <Text style={{fontSize: 15, fontWeight: '500', paddingHorizontal: 10}}> Is the patient undergoing menopause?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Yes/No'
                                onChangeText={props.handleChange('Test3')}
                                value={props.values.Test3}
                            />
                            <Text style={{fontSize: 15, fontWeight: '500', paddingHorizontal: 10}}> Has the patient undergone pregnancy?</Text>
                            <TextInput
                                style={styles.input} 
                                placeholder='Yes/No'
                                onChangeText={props.handleChange('Test4')}
                                value={props.values.Test3}
                            />
                            <Text style={{fontSize: 15, fontWeight: '500', paddingHorizontal: 10}}> Has the patient been exposed to asbestos?</Text>
                            <TextInput
                                style={styles.input} 
                                placeholder='Yes/No'
                                onChangeText={props.handleChange('Test4')}
                                value={props.values.Test3}
                            />
                            <Text style={{fontSize: 15, fontWeight: '500', paddingHorizontal: 10}}> Please select all the symptoms the patient currently has:</Text>
                            <Text style={{fontSize: 15, fontWeight: '500', paddingHorizontal: 10}}> </Text>

                            <Button title='Submit' color='blue' onPress={props.handleSubmit}/>

                        </View>
                    )}
                </Formik>
            </ScrollView> 
        </View>
    );
}
