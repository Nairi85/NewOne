import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainBlock: {
    width: 250,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flexDirection: "row",
    overflow: "hidden"
  },
  sushi: {
    height: 80,
    width: 80,
  },
  rightBlock: {
    flexDirection: "column",
    justifyContent:"space-around",
    paddingLeft: 10,
  },
  title:{
    fontWeight:"900",
    fontSize:16,
  },
  text:{
    fontSize:14,
    color:"silver",
    fontWeight:"400",
    width:150,
  },
  rightBottom:{
    width:150,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  buttomText:{
    fontSize:12,
    color:"silver",
  },
  time:{
    flexDirection:"row",
   width:60,
    justifyContent:"space-between",
    alignItems:'center'
  },
  clock:{
    height:12,
    width:12,
  },
  date:{
    fontSize:10,
    color:"silver",
  }

});
