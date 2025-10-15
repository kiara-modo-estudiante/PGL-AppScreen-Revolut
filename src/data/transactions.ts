import { Transaction } from "../types/transaction";

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
  {
    id: 3,
    concept: "Money added via credit card",
    date: "10 Aug, 20:12",
    amount: "+€20",
    image: require("../assets/images/debit-cards/bbva-card.png"),
    isProfile: false,
  },
  {
    id: 4,
    concept: "Spotify monthly subscription",
    date: "9 Aug, 00:02",
    amount: "-€12",
    image: require("../assets/images/pfp/spotify.png"),
    isProfile: false,
  },
];
