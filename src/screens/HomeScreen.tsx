import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BalanceCard from "../components/layout/BalanceCard";
import { colorPalette } from "../theme/colorPalette";
import PromoCard from "../components/layout/PromoCard";
import ActionRow from "../components/layout/ActionRow";
import TransactionList from "../components/layout/TransactionList";
import balanceCards from "../data/accountBalance";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent}>
        <BalanceCard
          backgroundImage={balanceCards[0].backgroundImage}
          type={balanceCards[0].type}
          currency={balanceCards[0].currency}
          balance={balanceCards[0].balance}
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
