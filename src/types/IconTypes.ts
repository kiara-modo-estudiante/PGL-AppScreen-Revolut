// Base de iconos
export interface SharedIconProps {
  size: number;
  color: string;
}

// Iconos nombrados
export interface NamedIconProps extends SharedIconProps {
  name: string;
}

// Iconos importados en SVG manualmente
export interface SvgIconProps extends SharedIconProps {
  name?: never;
}

// Todos los iconos
export type IconProps = NamedIconProps | SvgIconProps;

// Icono con texto adicional
export interface IconWithLabelProps extends NamedIconProps {
  name: string;
  iconLabel: string;
  onPress: () => void;
  isSelected: boolean;
}
