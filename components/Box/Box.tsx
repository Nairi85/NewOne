import { View, Text, Image } from "react-native"
import { styles } from "./Box.styles"

interface Props {
title:string,
text:string,
messageNumber:number
}
export default (props:Props) => {
   console.log(styles.mainBlock)
    return (
        <View style={styles.mainBlock} >
            <View style={styles.massage__box}>
            <View style={styles.title}>
                <Text>{props.messageNumber+")"+props.title}</Text>
            </View>
            <View style={styles.text}>
                <Text>{props.text}</Text>
            </View>
            </View>
            <View style={styles.img_box}>
            <Image style={styles.img} source={require('../../assets/Icons/arrow_right.png')}/>
            </View>
            
        </View>
    )
}