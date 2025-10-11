import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colorPalette } from "../../theme/ColorPalette";
import { IconWithLabelProps } from "../../types/IconTypes";
import { renderIcon } from "../common/IconRegistry";

const IconWithLabel: React.FC<IconWithLabelProps> = ({
  name,
  iconLabel,
  size = 28,
  color = colorPalette.iconDefault,
  isSelected = false,
  onPress,
}) => {
  const dynamicColor = isSelected ? colorPalette.iconActive : color;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {renderIcon(name, size, dynamicColor)}
      <Text style={[styles.iconLabel, { color: dynamicColor }]}>
        {iconLabel}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLabel: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
    paddingTop: 2,
  },
});

export default IconWithLabel;
