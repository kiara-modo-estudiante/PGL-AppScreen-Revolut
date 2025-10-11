import React from "react";
import { StyleSheet, View } from "react-native";
import BalanceCard from "../components/layout/BalanceCard";
import { colorPalette } from "../theme/ColorPalette";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BalanceCard
        backgroundImage={require("../assets/images/backgrounds/default.jpg")}
        type="Savings Account"
        currency="USD"
        balance={145.66}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
});
