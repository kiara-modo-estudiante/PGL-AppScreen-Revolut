import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { svgIcons } from "../../assets/icons";
import { IconProps } from "../../types/icon.types";

const Icon: React.FC<IconProps> = ({ name = "default-icon", size, color }) => {
  const SvgIcon = svgIcons[name as keyof typeof svgIcons];

  if (SvgIcon) {
    return <SvgIcon width={size} height={size} fill={color} />;
  }

  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

export default Icon;
