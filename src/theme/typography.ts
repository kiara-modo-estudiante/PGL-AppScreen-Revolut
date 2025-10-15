import { StyleSheet } from "react-native";
import { colorPalette } from "./color-palette";

export const typography = StyleSheet.create({
  primaryText: {
    fontSize: 24,
    color: colorPalette.textPrimary,
    fontWeight: "700",
    flexWrap: "wrap",
  },
  secondaryText: {
    fontSize: 20,
    color: colorPalette.textSecondary,
    flexWrap: "wrap",
  },
  iconLabel: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    paddingTop: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 500,
    color: colorPalette.textPrimary,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 58,
    fontWeight: "800",
    color: colorPalette.textPrimary,
  },
});

export default typography;
