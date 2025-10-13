import { Transaction } from "../types/transaction.type";

export const transactions: Transaction[] = [
  {
    id: 1,
    concept: "Immfly",
    date: "15 Aug, 11:45",
    amount: "-€3",
    image: require("../assets/images/pfp/immfly.jpg"),
    isProfile: true,
  },
  {
    id: 2,
    concept: "Money added via debit card",
    date: "14 Aug, 09:30",
    amount: "+€50",
    image: require("../assets/images/debit-cards/santander-card.png"),
    isProfile: false,
  },
];
