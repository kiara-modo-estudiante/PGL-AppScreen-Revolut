import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colorPalette } from "../../theme/colorPalette";
import { IconWithLabelProps } from "../../types/icon.types";
import Icon from "../common/Icon";

const IconWithLabel: React.FC<IconWithLabelProps> = ({
  name,
  iconLabel,
  size,
  color,
  isSelected = false,
  onPress,
}) => {
  const dynamicColor = isSelected ? colorPalette.iconActive : color;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={name} size={size} color={dynamicColor} />
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
