import { useContext } from "react";
import LOGO from "../assets/logo.jpg";
import { CartContext } from "../context/CartContext";
import { Button } from "../UI/Button";

const Header = () => {
   const { items } = useContext(CartContext);
   const totalItems = items.reduce((acc, item) => acc + item.amount, 0);
   return (
      <header id="main-header">
         <div id="title">
            <img src={LOGO} alt="Quick Meal Logo icon..." />
            <h1>Quick Meal</h1>
         </div>
         <nav>
            <Button textOnly>Cart ({totalItems})</Button>
         </nav>
      </header>
   );
};
export default Header;
