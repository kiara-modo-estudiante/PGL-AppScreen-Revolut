import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "../common/Icon";
import { colorPalette } from "../../theme/ColorPalette";
import { IconWithLabelProps } from "../../types/IconTypes";
import { RevolutIcon } from "../common/RevolutIcon";

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
      {name === "revolut" ? (
        <RevolutIcon size={size} color={dynamicColor} />
      ) : (
        <Icon name={name} size={size} color={dynamicColor} />
      )}
      <Text
        style={[
          styles.iconLabel,
          {
            color: dynamicColor,
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
    fontWeight: "600",
    paddingTop: 2,
  },
});
