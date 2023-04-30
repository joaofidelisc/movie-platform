import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    margin: '4%',
    width: "40%",
    alignItems:'center',
    alignSelf:'center', 
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 4,
    resizeMode: 'stretch',
  },
  detailsContainer: {
    padding: '2%',
    marginBottom: '4%'
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
  },
});
