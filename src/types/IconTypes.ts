export interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export interface IconWithLabelProps {
  name: string;
  iconLabel: string;
  size?: number;
  color?: string;
  onPress: () => void;
  isSelected: boolean;
}
