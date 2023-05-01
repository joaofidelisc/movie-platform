import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    scrollView: {
        flex:1, 
        height: '100%', 
        width:'100%', 
        marginTop: '22%'
    }
});
