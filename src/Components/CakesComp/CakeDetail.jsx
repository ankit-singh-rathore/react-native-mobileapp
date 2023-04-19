import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Button, Text } from "react-native";
import axios from "axios";

function CakeDetail({ route }) {
  const { cakeid } = route.params;
  const [cakeDetail, setcakeDetail] = useState();
  const fetchCakeDetails = async () => {
    const configurationObject = {
      method: "get",
      url: `https://king-prawn-app-ef2xc.ondigitalocean.app/api/cake/${cakeid}`,
    };
    const response = await axios(configurationObject);
    console.log("Cake Detail",response.data.data);
    setcakeDetail(response.data.data);
  };

  useEffect(() => {
    fetchCakeDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.card_title}>{cakeDetail?.name}</Text>
      <Image style={styles.card_image} source={{ uri: cakeDetail?.image }} />
      <Button style={styles.btn} title="Add To Cart"></Button>
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
  btn :{
    marginTop: '20'
  }
});

export default CakeDetail;
