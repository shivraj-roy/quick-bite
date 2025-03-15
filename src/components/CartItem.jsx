import { currencyFormatter } from "../utilities/formatting";

const CartItem = ({ name, amount, price, onAdd, onDeduct }) => {
   return (
      <li className="cart-item">
         <p>
            {name} - {amount} x {currencyFormatter.format(price)}
         </p>
         <p className="cart-item-actions">
            <button onClick={onDeduct}>-</button>
            <span>{amount}</span>
            <button onClick={onAdd}>+</button>
         </p>
      </li>
   );
};
export default CartItem;
