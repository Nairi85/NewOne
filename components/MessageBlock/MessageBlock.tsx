import { useCallback } from "react"
import { View, Text, Image, TouchableHighlight } from "react-native"
import { styles } from "./MessageBlock.style"

interface Props {
  card: {
    title: string,
    text: string,
    text1: string,
    date: string,
    imige: number,
  }
}

export default (props: Props) => {
  const hendeler = useCallback(() => {
    console.log("hello world")
  }, [])
  return (<TouchableHighlight style={styles.mainBlock} onPress={hendeler}>
    <>
      <Image style={styles.sushi} source={props.card.imige}></Image>
      <View style={styles.rightBlock}>
        <Text style={styles.title}>{props.card.title}</Text>
        <Text style={styles.text} numberOfLines={2}>{props.card.text}</Text>
        <View style={styles.rightBottom}>
          <Text style={styles.buttomText}>{props.card.text1}</Text>
          <View style={styles.time}>
            <Image style={styles.clock} source={require("../../assets/Icons/clock.jpg")} />
            <Text style={styles.date}>{props.card.date}</Text>
          </View>
        </View>
      </View>
    </>
  </TouchableHighlight>)
}