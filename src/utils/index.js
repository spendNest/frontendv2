export const explore_cards = [
  {
    name: "Available Balance",
    balance: "$208.06",
    bgCustom: "/first_pattern.svg"
  },
  {
    name: "Total Savings",
    balance: "$745.92",
    bgCustom: "/second_pattern.svg"
  },
  {
    name: "Shared Balance",
    balance: "$54.00",
    bgCustom: "/third_pattern.svg"
  }
]

export const glasses = [
  {
    name: "Account Details",
    imagePath: "/mdi_account-details-outline.svg",
    link: "/home/account_details"
  },
  {
    name: "Fund Account",
    imagePath: "/ri_refund-2-line.svg",
    link: "/home/fund"
  },
  {
    name: "Withdraw",
    imagePath: "/ri_funds-box-line.png",
    link: "/home/withdraw"
  },
  {
    name: "Statement",
    imagePath: "/ep_document.svg",
    link: "/statement"
  },
  {
    name: "Lock",
    imagePath: "/iconamoon_lock.svg",
    link: "/lock_account"
  },
]
export const clubs = [
  {
    name: "Holiday in UK",
    imagePath: "/savings/dollar_coins.svg",
    bg_col: "rgba(143, 231, 108, 0.50)",
    members: 102
  },
  {
    name: "Rent",
    imagePath: "/savings/hand_sack.svg",
    bg_col: "rgba(224, 207, 186, 0.50)",

    members: 65
  },
  {
    name: "New Business",
    imagePath: "/savings/wallet_saving.svg",
    bg_col: "rgba(150, 149, 236, 0.50)",

    members: 198
  },
]

export const coins = ["/usdt.svg", "/ethereum.svg", "/bitcoin.svg"]

export const generateQuarterlyDates = () => {
  const newArray = [];
  const startDate = new Date(); // Get the current date
  startDate.setMonth(0); // Set the starting month to January (0-indexed)
  startDate.setDate(1); // Set the starting day to the 1st

  for (let i = 0; i < 8; i++) { // Generate dates for the next 8 quarters (2 years)
    const year = startDate.getFullYear();
    const month = startDate.getMonth();
    const quarterStartMonth = month - (month % 3);
    const quarterEndMonth = quarterStartMonth + 2;

    const quarterEndDate = new Date(year, quarterEndMonth + 1, 0); // Get the last day of the quarter

    const formattedDate = `31st ${new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(quarterEndDate)}`;
    newArray.push(formattedDate);
    startDate.setMonth(quarterStartMonth + 3); // Move to the next quarter
  }
  return newArray;
}