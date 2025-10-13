import { ImageSourcePropType } from "react-native";

export interface Transaction {
  id: number;
  concept: string;
  date: string;
  amount: string;
  image: ImageSourcePropType;
}
