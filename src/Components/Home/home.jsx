import React, { useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Login from '../Login/Login';

function Home() {
    const [time, setTime] = useState(new Date().toLocaleString());   /* toLocaleTimeString  - for time ONLY */

    useEffect(() => {
        const time = () => {
            const event = new Date();
            setTime(event.toLocaleString())
        }
        const intervalId = setInterval(time, 1000);
      return () => {
        clearInterval(intervalId);
      }
    }, [])
    
  return (
    <View style={style.container} >
        <Text>{time}</Text>
        <Login />
    </View>
  )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
})

export default Home