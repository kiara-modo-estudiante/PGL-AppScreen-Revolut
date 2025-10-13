import { StyleSheet, Text, View } from "react-native";
import React, { PureComponent } from "react";
import TransactionItem from "../ui/TransactionItem";
import { colorPalette } from "../../theme/ColorPalette";

const TransactionList = () => {
  return (
    <View style={styles.container}>
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
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
