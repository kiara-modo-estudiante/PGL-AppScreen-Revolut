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

export const formatBalanceParts = (currency: string, balance: number) => {
  const formatted = balance.toFixed(2);
  const [main, cents] = formatted.split(".");

  let symbol = "";
  switch (currency) {
    case "EUR":
      symbol = "€";
      break;
    case "USD":
      symbol = "$";
      break;
    case "GBP":
      symbol = "£";
      break;
    case "JPY":
      symbol = "¥";
      break;
    case "AUD":
      symbol = "A$";
      break;
    case "CAD":
      symbol = "C$";
      break;
    case "CHF":
      symbol = "CHF";
      break;
    case "CNY":
      symbol = "¥";
      break;
    case "INR":
      symbol = "₹";
      break;
  }

  return { symbol, main, cents };
};
