import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { colorPalette } from "../../theme/color-palette";
import { Transaction } from "../../types/transaction";
import typography from "../../theme/typography";

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
        <Text style={typography.primaryText}>{concept}</Text>
        <Text style={typography.secondaryText}>{date}</Text>
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
  amount: {
    fontSize: 26,
    flexWrap: "wrap",
  },
});
