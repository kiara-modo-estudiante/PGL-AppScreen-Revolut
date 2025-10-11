// Botón con icono (y opcionalmente texto)
export interface IconButtonProps {
  icon: string;
  label?: string;
  onClick?: () => void;
  size?: number;
  color?: string;
  iconColor?: string;
}
