import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { IconButtonProps } from "../../types/button";
import Icon from "../common/Icon";
import { colorPalette } from "../../theme/color-palette";
import typography from "../../theme/typography";

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
      {label && <Text style={typography.buttonText}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 70,
    height: 70,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
});

export default IconButton;
