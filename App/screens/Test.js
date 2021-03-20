import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './screenStyles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Test({ route }) {
    const { FH, A, M } = route.params;
    return (
        <View style={styles.containerML}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.mlInfo}>
                    <Text style={styles.mlTitle}>Recently Inputed Data</Text>
                </View>
                <View style={styles.test}>
                    <Text style={styles.mlText}>Family history: {JSON.stringify(FH)}</Text>
                    <Text style={styles.mlText}>Patients Age: {JSON.stringify(A)}</Text>
                    <Text style={styles.mlText}>Undergoing menopause: {JSON.stringify(M)}</Text>
                    <Text style={styles.mlText}>Undergone pregnancy: </Text>
                    <Text style={styles.mlText}>Exposure to asbestos: </Text>
                </View>
                <View style={styles.mlRec}>
                    <Text style={styles.mlTitle}>Recommended Action</Text>
                </View>
            </ScrollView>
        </View>
    )
}