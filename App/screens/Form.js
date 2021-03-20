import * as React from 'react';
import { useState, Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './screenStyles'
import Info from './Info'

class Form extends Component {
    state = {
        FamilyHistory: '',
        Age: '',
        Menopause: '',
    }

    onPress = () => {
        
        this.props.navigation.navigate('Test',{FH: this.state.FamilyHistory, A:this.state.Age, M:this.state.Menopause});
        
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>  
                    <Text style={{fontSize: 18, fontWeight: '500', paddingHorizontal: 10, textAlign:'center'}}> 
                        Please fill out the form below and answer as many questions as possible. 
                    </Text>
                    <View style={styles.contentContainer}>
                    <Text style={{fontSize: 15, fontWeight: '500', paddingHorizontal: 10}}>Is there a family history of ovarian cancer?</Text>
                    <TextInput
                        style = {styles.input}
                        onChangeText={FamilyHistory => this.setState({ FamilyHistory })}
                        placeholder ="Yes/No"
                    />
                    <Text style={{fontSize: 15, fontWeight: '500', paddingHorizontal: 10}}> Patients Age?</Text>
                    <TextInput
                        style = {styles.input}
                        onChangeText={Age => this.setState({ Age })}
                        placeholder ="e.g 52"
                        keyboardType='numeric'
                    />
                    <Text style={{fontSize: 15, fontWeight: '500', paddingHorizontal: 10}}> Is the patient undergoing menopause?</Text>
                    <TextInput
                        style = {styles.input}
                        onChangeText={Menopause => this.setState({ Menopause })}
                        placeholder ="Yes/No"
                    />

                    <Button title="Submit" onPress={this.onPress}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


export default Form;