import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colorPalette";
import { TextButtonProps } from "../../types/button.types";

const TextButton: React.FC<TextButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorPalette.buttonPrimary,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: colorPalette.textPrimary,
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
  },
});
