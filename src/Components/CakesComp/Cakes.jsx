import React , {useState, useEffect} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Cakes(props) {

  const [time, setTime] = useState(new Date().toLocaleString());   /* toLocaleTimeString  - for time ONLY */

  const navigation = useNavigation();
  const data = props.data;
  function handleImagepress() {
    navigation.navigate('CakeDetail', {
      cakeid: data.cakeid,
    });
  }
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
    <View style={styles.container}>
      <Text>{time}</Text>
      {data.image && (
        <View>
          <View style={styles.card_template}>
            <TouchableOpacity onPress={handleImagepress}>
              <Image
                style={styles.card_image}
                source={{
                  uri: data.image,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.text_container}>
            <Text style={styles.card_title}>{data.name}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  card_template: {
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
  },
  card_image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  text_container: {
    position: "absolute",
    width: 250,
    height: "auto",
    bottom: 0,
    padding: 5,
    alignItems: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_title: {
    color: "black",
  },
});

export default Cakes;
