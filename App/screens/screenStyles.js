import {StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({

    //ML Page
    test: {
        //textAlign: "left",
        color:'blue',
        marginTop: 10,
        marginHorizontal: 50,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        alignItems: "flex-start",
        backgroundColor:"#3FBFBF",
        borderColor:"#3FBFBF"
    },
    text: {
        color: "#000",
        fontSize: 14,
        fontWeight: "bold"
      },
    mlInfo: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5
    },
    mlTitle: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: ('bold'),
    },
    mlText: {
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 5,
        color: '#fff'
    },
    containerML: {
        flex: 1,
        backgroundColor:'#fff'
    },
    mlRec:{
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
    },
    // End of ML page

    // Home page
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 2,
        marginLeft: -10,
    },
    bottomTextInst: {
        textAlign: "center",
        paddingTop: 20,
        fontWeight: "bold"
    },
    bottomText: {
        textAlign: "center",
        marginTop: 40
    },
    // End of home page

    // Form Page
    input: {
        borderWidth:1
    },
    // End of form page

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        paddingTop: 30,
    },
    logout: {
        color: 'red',
        textAlign: 'right',
        backgroundColor: '#F5F5F5'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginHorizontal: 20,
        marginVertical: 20,
        alignContent:"flex-start",
        alignItems:"flex-start"
    }
});

export default styles;