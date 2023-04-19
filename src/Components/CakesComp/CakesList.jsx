import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import axios from "axios";
import Cakes from "./Cakes";
import { useDispatch, useSelector } from "react-redux";
import { CakesAction } from "../Redux/Slices/CakeSlice";

export default function CakesList() {
  const dispatch = useDispatch();

  const AllCakes = useSelector((state) => {
    return state.CakesData
  });
 console.log("ASSS", AllCakes);
  //const [cakes, setcakes] = useState([]);

  const fetchCakes = async () => {
    const configurationObject = {
      method: "get",
      url: `https://king-prawn-app-ef2xc.ondigitalocean.app/api/allcakes`,
    };
    const response = await axios(configurationObject);
    console.log(response.data.data);
    //setcakes(response.data.data);
    dispatch(CakesAction(response.data.data));
  };

  useEffect(() => {
    fetchCakes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* {cakes.map((item, index) => {
        return <Cakes data={item} key={index}/>
      })} */}

        {console.log("III", AllCakes[0])}
        {AllCakes[0] && AllCakes[0].map((item, index) => {
          return <Cakes data={item} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
