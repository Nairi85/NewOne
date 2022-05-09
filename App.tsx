import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MessageBlock from './components/MessageBlock/MessageBlock';
import PostCard from './components/PostCard/PostCard';



export default function App() {
const [card, setcard]=useState(
  {title:"Ипонкин Brothers",
  text:"Сегодня na проспекте Ленина началацъ распрадажа поллов и еъшяшеяшцшяедяшдшядяшд",
  text1:"Сарафаняа",
  date:"12.03.2022",
  imige:require("./assets/Icons/sushi.jpg")
  });
const [postCardTitle,setPostCardTitle]=useState("Контакти зоопарк Мадакаскар паздравляет всех дам с Международным Женским днем!");
const [postCardList,setPostCardList]=useState([
 "Работает по обычном графику. До 22:00!",
 "Инфармация для тех кто ешо не купил подарок",
 "Бегом за цветами и к нам за цертификатом!",
])


  return (
    <View style={styles.container}>
      <MessageBlock  card={card} />
      <PostCard title={postCardTitle} list={postCardList} />
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
