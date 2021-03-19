import * as React from 'react';
import { useState, Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './screenStyles'

class Form extends Component {
    state = {
        TextInputValue: '',
        newText:'',

    }

    onPress = () => {
        this.setState({
            newText: this.state.TextInputValue,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TextInput
                        style = {styles.input}
                        onChangeText={TextInputValue => this.setState({ TextInputValue })}
                    />
                    <Text>
                        {this.state.newText}
                    </Text>

                    <Button title="Change Text" onPress={this.onPress}/>
                </ScrollView>
            </View>
        )
    }
}


export default Form;