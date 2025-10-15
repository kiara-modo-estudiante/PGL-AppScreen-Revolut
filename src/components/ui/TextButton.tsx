import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colorPalette } from "../../theme/color-palette";
import { TextButtonProps } from "../../types/button";
import typography from "../../theme/typography";

const TextButton: React.FC<TextButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[typography.buttonText, textStyle]}>{title}</Text>
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
});
