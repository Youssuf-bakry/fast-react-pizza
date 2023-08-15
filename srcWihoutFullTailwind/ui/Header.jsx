import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex justify-around  bg-yellow-500 px-4 py-3 uppercase border-b border-stone-200 sm:px-6">
      <SearchOrder />
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <UserName />
    </header>
  );
}

export default Header;
