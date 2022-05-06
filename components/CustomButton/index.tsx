import { View, Text,Image } from "react-native";
import { styles } from './style'


export interface IInfo {
    text: string;
    left: boolean;
    right: boolean;
}
type Props = { info: IInfo }

export default (props: Props) => {
    const { info } = props
    return (
        <View style={styles.button}>
            {info.left&&<Image style={styles.imgLeft}  source={require('../../assets/Icons/arrow_left.png')}  />}
            <Text >{info.text}</Text>
            {info.right?<Image style={styles.imgRight}   source={require('../../assets/Icons/arrow_right.png')} width={20} height={20} />:null}
        </View>
    )
}