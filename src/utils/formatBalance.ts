export const formatBalance = (currency: string, balance: number): string => {
  switch (currency) {
    case "EUR":
      return `€${balance.toFixed(2)}`;
    case "USD":
      return `$${balance.toFixed(2)}`;
    case "GBP":
      return `£${balance.toFixed(2)}`;
    case "JPY":
      return `¥${balance.toFixed(0)}`;
    case "AUD":
      return `A$${balance.toFixed(2)}`;
    case "CAD":
      return `C$${balance.toFixed(2)}`;
    case "CHF":
      return `CHF${balance.toFixed(2)}`;
    case "CNY":
      return `¥${balance.toFixed(2)}`;
    case "INR":
      return `₹${balance.toFixed(2)}`;
    default:
      return `${balance.toFixed(2)}`;
  }
};
