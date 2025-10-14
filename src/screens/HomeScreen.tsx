import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BalanceCard from "../components/layout/BalanceCard";
import { colorPalette } from "../theme/colorPalette";
import PromoCard from "../components/layout/PromoCard";
import ActionRow from "../components/layout/ActionRow";
import TransactionList from "../components/layout/TransactionList";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent}>
        <BalanceCard
          backgroundImage={require("../assets/images/backgrounds/default.jpg")}
          type="Savings Account"
          currency="USD"
          balance={145.66}
        />
        <ActionRow />
        <PromoCard />
        <TransactionList />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundPrimary,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
  },
});
