import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    viewContainer: {
        position: 'absolute',
        top: 0,
        width: width,
        height: height * 0.1,
        backgroundColor: '#6759C0',
    },
    textInput: {
        color: 'black', 
        width: '80%', 
        backgroundColor:'#E6E9F1',
        height: height*0.05, 
        position: 'absolute', 
        top:height*0.04, 
        borderRadius: 10, 
        marginLeft: '4%', 
        padding: 5 
    },
    filterButton: {
        position: 'absolute', 
        top: height*0.05, 
        right: width*0.04
    }
});
