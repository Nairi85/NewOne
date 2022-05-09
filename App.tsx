import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MessageBlock from './components/MessageBlock/MessageBlock';



export default function App() {
const [card, setcard]=useState(
  {title:"Ипонкин Brothers",
  text:"Сегодня na проспекте Ленина началацъ распрадажа поллов и еъшяшеяшцшяедяшдшядяшд",
  text1:"Сарафаняа",
  date:"12.03.2022",
  imige:require("./assets/Icons/sushi.jpg")
  }
)

  return (
    <View style={styles.container}>
      <MessageBlock  card={card}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
