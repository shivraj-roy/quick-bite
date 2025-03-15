import Modal from "../UI/Modal";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { currencyFormatter } from "../utilities/formatting";
import { Button } from "../UI/Button";
import ActionContext from "../context/ActionContext";

const Cart = () => {
   const { items } = useContext(CartContext);
   const { action, hideCart } = useContext(ActionContext);

   const cartTotal = items.reduce((acc, item) => {
      return acc + item.amount * item.price;
   }, 0);

   const openCartHandler = () => {
      hideCart();
   };
   return (
      <Modal modalClass="cart" open={action === "cart"}>
         <h2>Cart</h2>
         <ul>
            {items.map((item) => (
               <li key={item.id}>
                  <div>
                     <h3>{item.name}</h3>
                     <div>
                        <span>{item.amount}</span>
                        <span>x</span>
                        <span>{item.price}</span>
                     </div>
                  </div>
               </li>
            ))}
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-action">
               <Button textOnly onClick={openCartHandler}>
                  Close
               </Button>
               <Button>Order</Button>
            </p>
         </ul>
      </Modal>
   );
};
export default Cart;
