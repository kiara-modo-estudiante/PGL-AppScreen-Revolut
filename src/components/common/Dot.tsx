import React from "react";
import { View, StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colorPalette";
import { NavigationDotProps } from "../../types/accountBalance.types";

const Dot: React.FC<NavigationDotProps> = ({ active }) => {
  return <View style={[styles.dot, active && styles.activeDot]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colorPalette.iconDefault,
  },
  activeDot: {
    backgroundColor: colorPalette.iconActive,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default Dot;
