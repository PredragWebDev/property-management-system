import  Icon1  from '../icons/1.png';
import  Icon2  from '../icons/2.png';
import  Icon3  from '../icons/3.png';
import  Icon4  from '../icons/4.png';
// import  Icon5  from '../icons/5.png';
import  Icon6  from '../icons/6.png';
import  Icon7  from '../icons/7.png';
import  Icon8  from '../icons/8.png';


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
      return <img src={Icon1} alt="Icon1" style={{ width: '25px', height: '25px' }} />;
    case "multiple_purchases_by_buyer":
      return <img src={Icon2} alt="Icon2" style={{ width: '25px', height: '25px' }} />;
    case "substantial_price_drop":
      return <img src={Icon3} alt="Icon3" style={{ width: '25px', height: '25px' }} />;
    case "rapid_relist_check":
      return <img src={Icon6} alt="Icon6" style={{ width: '25px', height: '25px' }} />;
    case "frequent_change_check":
      return <img src={Icon7} alt="Icon7" style={{ width: '25px', height: '25px' }} />;
    case "frequent_sales_check":
      return <img src={Icon8} alt="Icon8" style={{ width: '25px', height: '25px' }} />;
    case "bulk_sale_check":
      return <img src={Icon4} alt="Icon4" style={{ width: '25px', height: '25px' }} />;
    default:
      return "😡";
  }
};


