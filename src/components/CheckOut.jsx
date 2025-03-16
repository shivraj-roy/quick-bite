import { useContext } from "react";
import Modal from "../UI/Modal";
import { CartContext } from "../context/CartContext";
import ActionContext from "../context/ActionContext";
import { currencyFormatter } from "../utilities/formatting";
import Input from "../UI/Input";
import { Button } from "../UI/Button";

const CheckOut = () => {
   const { items } = useContext(CartContext);
   const { action, hideCheckout } = useContext(ActionContext);

   const cartTotal = items.reduce((acc, item) => {
      return acc + item.amount * item.price;
   }, 0);

   const cancelCheckOut = () => {
      hideCheckout();
   };

   const onCheckOut = (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const orderData = Object.fromEntries(fd.entries());
      console.log(orderData);
      // Send orderData to the server...
      fetch("http://localhost:3000/orders", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            customer: orderData,
            items: items,
         }),
      });

      // Clear the cart...
      // Close the checkout modal...
      hideCheckout();
   };

   return (
      <Modal modalClass="checkout" open={action === "checkout"}>
         <form onSubmit={onCheckOut}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            <Input label={"Full Name"} type={"text"} id={"name"} />
            <Input label={"Email"} type={"email"} id={"email"} />
            <Input label={"Address"} type={"text"} id={"street"} />
            <div className="control-row">
               <Input label={"Postal Code"} type={"text"} id={"postal-code"} />
               <Input label={"City"} type={"text"} id={"city"} />
            </div>
            <p className="modal-actions">
               <Button type="text" textOnly onClick={cancelCheckOut}>
                  Cancel
               </Button>
               <Button>Checkout</Button>
            </p>
         </form>
      </Modal>
   );
};
export default CheckOut;
