import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box/Box';
import CustomButton, { IInfo } from './components/CustomButton';

const title:string='Your first message';
const text:string="Hello world";
const SN:number=1;
export default function App() {
  const [info,setinfo]=useState<IInfo>({
    text:"Hello world",
    left:true,
    right:true,
  })
  return (
    <View style={styles.container}>
      <CustomButton info={info}/>
      <Box title={title} text={text} messageNumber={SN}/>
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
