import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    test: {
        textAlign: 'center',
        color:'blue',
        backgroundColor:'#fff'
    },
    mlInfo: {
        textAlign: 'center',
        textAlignVertical: 'bottom',
        position: 'absolute',
        bottom: 100,
        left: 120
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerML: {
        flex: 1,
        backgroundColor:'#fff'
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    logout: {
        color: 'red',
        textAlign: 'right',
        backgroundColor: '#F5F5F5'
    }
});

export default styles;