import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/views/Home";

import Routes from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
    justifyContent: "center",
  },
});
