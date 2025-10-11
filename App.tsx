import { StyleSheet, Text, View } from "react-native";
import Navbar from "./src/components/layout/Navbar";
import Header from "./src/components/layout/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Navbar></Navbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
