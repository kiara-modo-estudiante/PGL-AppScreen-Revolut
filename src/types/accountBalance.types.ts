import { ImageSourcePropType, ViewStyle } from "react-native";

export type Currency = "EUR" | "USD" | "GBP";

export interface BalanceAccount {
  type: string;
  currency: Currency;
  balance: number;
}

export interface BalanceCardProps extends BalanceAccount {
  backgroundImage: ImageSourcePropType;
  style?: ViewStyle;
}

export interface NavigationDotProps {
  active: boolean;
}
