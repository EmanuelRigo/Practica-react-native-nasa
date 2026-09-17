import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { format, sub } from 'date-fns'

import Header from "../../components/Header";
import fetchApi from "../../util/fetch";
import TodaysImage from "../../components/TodaysImage";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";
import { PostImage } from "../../types";

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([])
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

    const loadLastFiveDaysImage = async () => {
      try {
        const date = new Date()
        const todaysDate = format(date, 'yyyy-MM-dd')
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd')

        const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`)

        setLastFiveDaysImages(lastFiveDaysImagesResponse)

      }
      catch (error) {
        console.error(error)
      }
    }

    loadTodaysImage().catch(null);
    loadLastFiveDaysImage().catch(null)

  }, []);


  return (
    <View style={styles.container}>
      <Header></Header>
      <TodaysImage {...todaysImage}></TodaysImage>
      <LastFiveDaysImages postImages={lastFiveDaysImages}></LastFiveDaysImages>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 38 },

});

export default Home;
