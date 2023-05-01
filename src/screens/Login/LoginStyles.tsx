import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    viewContainer: {
       flex: 1, 
       width: width,
       justifyContent: 'center',
       backgroundColor: '#6759C0'
    },
    textLogin: {
        alignSelf:'center',
        color: 'white'
    }
});
