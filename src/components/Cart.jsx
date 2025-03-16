import Modal from "../UI/Modal";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { currencyFormatter } from "../utilities/formatting";
import { Button } from "../UI/Button";
import ActionContext from "../context/ActionContext";
import CartItem from "./CartItem";

const Cart = () => {
   const { items, addItem, removeItem } = useContext(CartContext);
   const { action, hideCart, showCheckout } = useContext(ActionContext);

   const cartTotal = items.reduce((acc, item) => {
      return acc + item.amount * item.price;
   }, 0);

   const closeCartHandler = () => {
      hideCart();
   };

   const GoToCheckout = () => {
      showCheckout();
   };

   return (
      <Modal
         modalClass="cart"
         open={action === "cart"}
         onClose={action === "cart" ? closeCartHandler : null}
      >
         <h2>Cart</h2>
         <ul>
            {items.map((item) => (
               <CartItem
                  key={item.id}
                  name={item.name}
                  amount={item.amount}
                  price={item.price}
                  onAdd={() => {
                     addItem(item);
                  }}
                  onDeduct={() => {
                     removeItem(item.id);
                  }}
               />
            ))}
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
               <Button textOnly onClick={closeCartHandler}>
                  Close
               </Button>
               {items.length > 0 && (
                  <Button onClick={GoToCheckout}>Order</Button>
               )}
            </p>
         </ul>
      </Modal>
   );
};
export default Cart;
