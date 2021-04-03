import * as React from 'react';
import { Text, View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify'
import aws_exports from '../aws-exports'
import { ScrollView } from 'react-native-gesture-handler';
import styles from './screenStyles'
Amplify.configure(aws_exports);

Auth.currentAuthenticatedUser().then(user => console.log(user.attributes.email))

const attributes = Auth.currentAuthenticatedUser();
const test = attributes.pool;
const result = Auth.currentAuthenticatedUser(attributes)

export default class User extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <Text>Account Information </Text>
                    <Text> Username: {JSON.stringify(Auth.user.attributes.email)}</Text>
                </ScrollView>
            </View>

        )
    }
}