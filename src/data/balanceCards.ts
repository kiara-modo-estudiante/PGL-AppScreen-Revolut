import { BalanceCardProps } from "../types/accountBalance.types";

const balanceCards: BalanceCardProps[] = [
  {
    backgroundImage: require("../assets/images/backgrounds/default.jpg"),
    type: "Personal",
    currency: "EUR",
    balance: 51.1,
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
  {
    backgroundImage: require("../assets/images/backgrounds/default.jpg"),
    type: "Crypo",
    currency: "USD",
    balance: 3300.0,
  },
];

export default balanceCards;
