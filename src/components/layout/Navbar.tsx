import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import IconWithLabel from "../ui/IconWithLabel";
import { colorPalette } from "../../theme/ColorPalette";

const Navbar = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>("revolut"); // Página principal seleccionada por defecto

  const handleIconPress = (name: string) => {
    setSelectedIcon(name);
  };

  return (
    <View style={styles.container}>
      <IconWithLabel
        name="revolut"
        iconLabel="Home"
        isSelected={selectedIcon === "revolut"}
        onPress={() => handleIconPress("revolut")}
      />
      <IconWithLabel
        name="chart-line"
        iconLabel="Invest"
        isSelected={selectedIcon === "chart-line"}
        onPress={() => handleIconPress("chart-line")}
      />
      <IconWithLabel
        name="swap-horizontal"
        iconLabel="Payments"
        isSelected={selectedIcon === "swap-horizontal"}
        onPress={() => handleIconPress("swap-horizontal")}
      />
      <IconWithLabel
        name="bitcoin"
        iconLabel="Crypto"
        isSelected={selectedIcon === "bitcoin"}
        onPress={() => handleIconPress("bitcoin")}
      />
      <IconWithLabel
        name="hexagon"
        iconLabel="RevPoints"
        isSelected={selectedIcon === "hexagon"}
        onPress={() => handleIconPress("hexagon")}
      />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: colorPalette.backgroundSecondary,
    paddingTop: 10,
    paddingBottom: 40,
    paddingHorizontal: 5,
    position: "absolute",
    bottom: 0,
  },
});
