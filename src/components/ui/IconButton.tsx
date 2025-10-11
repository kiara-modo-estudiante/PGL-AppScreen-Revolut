import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { IconButtonProps } from "../../types/ButtonTypes";
import Icon from "../common/Icon";
import { colorPalette } from "../../theme/ColorPalette";

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  onClick,
  size = 50,
  color = colorPalette.buttonPrimary,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onClick}
        style={[
          styles.button,
          {
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: size / 2,
          },
        ]}
      >
        <Icon name={icon} size={30} color={colorPalette.iconActive}></Icon>
      </TouchableOpacity>
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 600,
    color: colorPalette.textPrimary,
    textAlign: "center",
  },
});

export default IconButton;
