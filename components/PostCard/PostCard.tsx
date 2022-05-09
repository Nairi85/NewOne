import { useCallback } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style.PostCard";

interface PostCardProps{
  title:string,
  list:Array<string>
}

export default (props:PostCardProps) => {
  const handeler=useCallback(()=>{
    console.log("I`s works")
  },[])
  console.log(props)
  return <>
    <View style={styles.imigeBlock} >
      <Image style={styles.image} source={require("../../assets/Icons/march8.jpg")} />
    </View>
    <View style={styles.textBox}>
      <Text style={styles.text}>{props.title}</Text>
      <FlatList data={props.list} renderItem={({item,index})=>(
      <TouchableOpacity key={index} onPress={handeler}>
      <View style={styles.touchable}>
        <Image style={styles.checked} source={require("../../assets/Icons/checked.jpg")}/>
      <Text style={styles.text} numberOfLines={2}>{item}</Text>
      </View>
    </TouchableOpacity>)}/>
    </View>
  </>
}