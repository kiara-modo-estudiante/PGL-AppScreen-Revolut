import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "../common/Icon";
import { colorPalette } from "../../theme/ColorPalette";
import { IconWithLabelProps } from "../../types/IconTypes";

const IconWithLabel: React.FC<IconWithLabelProps> = ({
  name,
  iconLabel,
  size = 28,
  color = colorPalette.iconDefault,
  isSelected = false,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        name={name}
        size={size}
        color={isSelected ? colorPalette.iconActive : color}
      />
      <Text
        style={[
          styles.iconLabel,
          {
            color: isSelected
              ? colorPalette.iconActive
              : colorPalette.iconDefault,
          },
        ]}
      >
        {iconLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default IconWithLabel;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLabel: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: 600,
    paddingTop: 2,
  },
});
