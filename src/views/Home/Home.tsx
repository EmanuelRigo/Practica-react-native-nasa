import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../util/fetch";
import TodaysImage from "../../components/Header/TodaysImage";
import { PostImage } from "../../types";

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };
    loadTodaysImage().catch(null);
  }, []);


  return (
    <View style={styles.container}>
      <Header></Header>
      <TodaysImage {...todaysImage}></TodaysImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 38 },

});

export default Home;
