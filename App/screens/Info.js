import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from'./screenStyles'
import { ScrollView } from 'react-native-gesture-handler';

export default class Info extends React.Component{
    render(){
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
}

const typography = StyleSheet.create({
    header: {
      color: "#61dafb",
      fontSize: 30,
      marginBottom: 36
    }
  });
  
  const flattenStyle = StyleSheet.flatten([
    styles.text,
    typography.header
  ]);
