import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  viewContainer:{
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    margin: '4%',
    width: '40%',
    alignItems:'center',
    alignSelf:'center', 
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 4,
    resizeMode: 'stretch',
  },
  detailsContainer: {
    padding: '2%',
    marginBottom: '4%'
  },
  title: {
    fontSize: width * 0.042,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingAndRY: {
    fontSize: width * 0.04,
  },
  viewRatingAndRY:{
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'flex-start'
  },
  commonButton: {
    backgroundColor: '#6759C0', 
    width: '75%', 
    height:'15%', 
    justifyContent: 'center', 
    alignItems:'center', 
    marginTop: '4%',
    borderRadius:10, 
  },
  buttonAddFavorites: {
    backgroundColor: '#6759C0', 
    width: '75%', 
    height:'15%', 
    justifyContent: 'center', 
    alignItems:'center',
    marginTop: '4%', 
    borderRadius:10, 
  },
  buttonRemoveFavorites: {
    backgroundColor: '#9B0C01', 
    width: '75%', 
    height:'15%', 
    justifyContent: 'center', 
    alignItems:'center', 
    marginTop: '4%',
    borderRadius:10, 
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.035
  }
});
