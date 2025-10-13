import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colorPalette";
import { Transaction } from "../../types/transaction.type";

const TransactionItem: React.FC<Transaction> = ({
  concept,
  date,
  amount,
  image,
  isProfile,
}) => {
  const amountColor = amount.includes("-")
    ? colorPalette.textPrimary
    : amount.includes("+")
    ? colorPalette.moneyGain
    : colorPalette.textPrimary;

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Image
          style={[
            styles.image,
            isProfile ? styles.profileImage : styles.cardImage,
          ]}
          source={image}
        />
      </View>
      <View style={styles.middleColumn}>
        <Text style={styles.concept}>{concept}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.column}>
        <Text style={[styles.amount, { color: amountColor }]}>{amount}</Text>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "100%",
    marginVertical: 16,
  },
  column: {
    width: "25%",
    alignItems: "center",
  },
  middleColumn: {
    width: "50%",
    flexDirection: "column",
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 0,
  },
  profileImage: {
    borderRadius: 25,
  },
  cardImage: {
    resizeMode: "contain",
  },
  concept: {
    fontSize: 26,
    color: colorPalette.textPrimary,
    fontWeight: "500",
    flexWrap: "wrap",
  },
  date: {
    fontSize: 20,
    color: colorPalette.textSecondary,
    flexWrap: "wrap",
  },
  amount: {
    fontSize: 26,
    flexWrap: "wrap",
  },
});
