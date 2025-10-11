import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RevolutSvg from "../../assets/icons/revolut.svg";

export const iconMap: Record<string, any> = {
  revolut: RevolutSvg,
  // You can add more SVGs here later
};

export const renderIcon = (name: string, size: number, color: string) => {
  const CustomIcon = iconMap[name];
  if (CustomIcon) {
    return <CustomIcon width={size} height={size} fill={color} />;
  }
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};
