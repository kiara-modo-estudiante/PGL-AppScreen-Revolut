import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./src/components/layout/Navbar";
import Header from "./src/components/layout/Header";
import { colorPalette } from "./src/theme/color-palette";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.main}>
        <HomeScreen />
      </View>
      <Navbar></Navbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundPrimary,
    width: "100%",
  },
  main: {
    flex: 1,
    paddingBottom: 100,
  },
});
