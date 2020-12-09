import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    test: {
        textAlign: 'center',
        color:'blue',
        backgroundColor:'#fff'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 2,
        marginLeft: -10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginHorizontal: 100,
        marginVertical: 20
    }
});

export default styles;