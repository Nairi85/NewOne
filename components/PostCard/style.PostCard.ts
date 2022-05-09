import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imigeBlock: {
    marginTop: 20,
    width: 300,
    height: 200,
    backgroundColor: "blue",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "stretch",
  },
  textBox: {
    marginTop: 20,
    width: 300,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 10,
    padding: 20,
    flexDirection: "column",
    overflow:"visible",
  },
  text: {
    fontSize: 15,
  },
  touchable: {
    flexDirection: "row",
    marginTop: 10,
    width:230,
  },
  checked: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
});
