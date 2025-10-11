import { StyleSheet, Text, View } from "react-native";
import Navbar from "./src/components/layout/Navbar";
import Header from "./src/components/layout/Header";
import BalanceCard from "./src/components/layout/BalanceCard";
import { colorPalette } from "./src/theme/ColorPalette";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <BalanceCard
        backgroundImage={require("./src/assets/images/backgrounds/default.jpg")}
        type="Savings Account"
        currency="USD"
        balance={145.66}
      />
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
