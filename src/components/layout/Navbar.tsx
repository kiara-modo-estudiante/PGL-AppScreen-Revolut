import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import IconWithLabel from "../ui/IconWithLabel";
import { colorPalette } from "../../theme/ColorPalette";

const icons = [
  { name: "revolut", label: "Home" },
  { name: "chart-line", label: "Invest" },
  { name: "swap-horizontal", label: "Payments" },
  { name: "bitcoin", label: "Crypto" },
  { name: "hexagon", label: "RevPoints" },
];

const Navbar = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>("revolut"); // Página principal seleccionada por defecto

  const handleIconPress = (name: string) => {
    setSelectedIcon(name);
  };

  return (
    <View style={styles.container}>
      {icons.map(({ name, label }) => (
        <IconWithLabel
          key={name}
          name={name}
          iconLabel={label}
          isSelected={selectedIcon === name}
          onPress={() => handleIconPress(name)}
        />
      ))}
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
