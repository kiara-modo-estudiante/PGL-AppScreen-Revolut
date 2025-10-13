import { StyleSheet, View } from "react-native";
import React from "react";
import TransactionItem from "../ui/TransactionItem";
import { colorPalette } from "../../theme/ColorPalette";
import { transactions } from "../../data/transactions";

const TransactionList = () => {
  return (
    <View style={styles.container}>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          id={transaction.id}
          concept={transaction.concept}
          date={transaction.date}
          amount={transaction.amount}
          image={transaction.image}
          isProfile={transaction.isProfile}
        />
      ))}
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPalette.buttonPrimary,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 16,
    marginVertical: 20,
    marginHorizontal: 12,
  },
});
