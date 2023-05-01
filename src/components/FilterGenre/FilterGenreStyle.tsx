import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    viewContainer: {
        position: 'absolute',
        top: height * 0.02,
        width: width * 0.8,
        height: height * 0.82,
        backgroundColor: '#6759C0',
        right: 0
    },
    closeButton: {
        position: 'absolute',
        top: height * 0.01,
        right: width * 0.04,
    },
    textItem: {
        fontSize: height * 0.022,
        marginLeft: width * 0.04,
        color: 'white',
        marginBottom: height * 0.012
    },
    buttonGenre: {
        width: width * 0.5
    }
});
