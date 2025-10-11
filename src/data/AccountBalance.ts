import { BalanceCardProps } from "../types/AccountBalanceTypes";

const balanceCards: BalanceCardProps[] = [
  {
    backgroundImage: require("../assets/images/backgrounds/default.jpg"),
    type: "Personal",
    currency: "EUR",
    balance: 1500.75,
  },
  {
    backgroundImage: require("../assets/images/backgrounds/default.jpg"),
    type: "Interest-Bearing Account",
    currency: "USD",
    balance: 1200.5,
  },
  {
    backgroundImage: require("../assets/images/backgrounds/default.jpg"),
    type: "Investment",
    currency: "GBP",
    balance: 5000.0,
  },
];

export default balanceCards;
