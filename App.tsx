import { StyleSheet, Text, View } from "react-native";
import Navbar from "./src/components/layout/Navbar";
import Header from "./src/components/layout/Header";
import { colorPalette } from "./src/theme/ColorPalette";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <HomeScreen></HomeScreen>
      <Navbar></Navbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
});
