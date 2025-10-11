import React from "react";
import RevolutSvg from "../../assets/icons/revolut.svg";
import { IconProps } from "../../types/IconTypes";

export const RevolutIcon: React.FC<IconProps> = ({ size, color, ...rest }) => {
  return <RevolutSvg width={size} height={size} fill={color} {...rest} />;
};
