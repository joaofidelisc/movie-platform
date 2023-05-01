import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    viewContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center',
      backgroundColor: 'white',
      width: width * 0.8,
      marginBottom: width * 0.02,
      borderRadius: 10,
      position: 'absolute',
      bottom: width * 0.01,
      height: width* 0.14,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    title: {
      fontSize: width * 0.042,
      fontWeight: 'bold',
      alignSelf: 'center',
      margin: width * 0.01,
      color: 'white'
    },
    viewButtons: {
      flexDirection: 'row'
    },
    buttonPage: {
      marginTop: width * 0.01,
      marginLeft: width * 0.03,
      marginRight: width * 0.03,
      marginBottom: width * 0.01,
      justifyContent: 'center',
      alignItems: 'center'
    },  
    textItem: {
      fontSize: width * 0.042,
      color: '#6759C0' 
    },
    selectedButton: {
      marginTop: width * 0.01,
      marginLeft: width * 0.03,
      marginRight: width * 0.03,
      marginBottom: width * 0.01,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#6759C0',
      width: width * 0.06,
      borderRadius: 50 
    },
    textSelectedItem: {
      fontSize: width * 0.042,
      color: 'white' 
    }
});
