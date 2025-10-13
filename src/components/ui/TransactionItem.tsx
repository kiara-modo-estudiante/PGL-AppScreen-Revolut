import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { colorPalette } from "../../theme/ColorPalette";

const TransactionItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Image
          style={styles.image}
          source={require("../../assets/images/pfp/immfly.jpg")}
        />
      </View>
      <View style={styles.middleColumn}>
        <Text style={styles.concept}>Immfly</Text>
        <Text style={styles.date}>15 Aug, 11:45</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.amount}>-€3</Text>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  column: {
    width: "20%",
    alignItems: "center",
  },
  middleColumn: {
    width: "60%",
    flexDirection: "column",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 0,
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
    color: colorPalette.textPrimary,
    flexWrap: "wrap",
  },
});
