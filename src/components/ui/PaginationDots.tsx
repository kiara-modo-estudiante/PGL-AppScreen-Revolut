import React from "react";
import balanceCards from "../../data/balanceCards";
import Dot from "../common/Dot";
import { StyleSheet, View } from "react-native";

const PaginationDots: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  // Número de cuentas
  const accountCount = balanceCards.length;

  return (
    <View style={styles.container}>
      {Array.from({ length: accountCount }).map((_, index) => (
        <Dot key={index} active={index === activeIndex} />
      ))}
    </View>
  );
};

export default PaginationDots;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
