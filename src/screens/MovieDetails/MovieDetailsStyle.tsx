
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
  viewContainer: {
    flex: 1, 
    alignItems: 'center'
  },
  viewGeneralInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    margin: '4%',
    width: '80%',
    height: height * 0.5,
    alignItems:'center',
    alignSelf:'center', 
  },
  image: {
    width: '100%',
    height: height / 2,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: width * 0.042,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
    textAlign:'justify', 
    margin: '1%'
  },
  viewGeneralInfoText: {
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'center',
  },
  overview: {
    fontSize: width * 0.04,
    textAlign: 'justify',
    marginLeft: '6%', 
    marginRight: '6%',
    alignSelf:'center' 
  },
  viewGeneralInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',
    marginBottom: '2%'
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  itemTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.035
  },
  itemText: {
    fontSize: width * 0.04,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  companyView: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageItem: {
    width: width * 0.4,
    marginLeft: width * 0.04,
    marginRight: width * 0.04,
    alignSelf: 'center',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  scrollViewItem: {
    alignContent: 'center',
  },
  starStyle: {
    flex: 1,
    marginHorizontal: 8,
    alignSelf: 'center',
    margin: '4%'
  },
  contentContainer: {
    // marginTop: width * 0.04
  }
});