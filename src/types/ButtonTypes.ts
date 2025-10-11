import { TextStyle, ViewStyle } from "react-native";
// Botón con icono (y opcionalmente texto)
export interface IconButtonProps {
  icon: string;
  label?: string;
  onClick?: () => void;
  size?: number;
  color?: string;
  iconColor?: string;
}

// Botón de texto
export interface TextButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
