import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colorPalette } from "../../theme/color-palette";
import { IconWithLabelProps } from "../../types/icon";
import Icon from "../common/Icon";
import typography from "../../theme/typography";

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
      <Text style={[typography.iconLabel, { color: dynamicColor }]}>
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
});

export default IconWithLabel;
