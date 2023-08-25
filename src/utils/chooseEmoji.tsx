export const chooseEmoji = (status: string) => {
  switch (status) {
    case "Contingent":
      return "🔍";
    case "Pending":
      return "⏳";
    case "Listed":
      return "🏠";
    case "Listing Removed":
      return "❌";
    case "Price Changed":
      return "📉";
    case "Relisted":
      return "🔃";
    case "Sold":
      return "💰";
    case "rapid_sale_check":
      return "🔍";
    case "multiple_purchases_by_buyer":
      return "⏳";
    case "substantial_price_drop":
      return "🏠";
    case "rapid_relist_check":
      return "❌";
    case "frequent_change_check":
      return "📉";
    case "frequent_sales_check":
      return "🔃";
    case "bulk_sale_check":
      return "💰";
    default:
      return "😡";
  }
};


