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

   return (
      <Modal modalClass="checkout" open={action === "checkout"}>
         <form action="">
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            <Input label={"Full Name"} type={"text"} id={"full-name"} />
            <Input label={"Email"} type={"email"} id={"email"} />
            <Input label={"Address"} type={"text"} id={"address"} />
            <div className="control-row">
               <Input label={"Postal Code"} type={"text"} id={"postal-code"} />
               <Input label={"City"} type={"text"} id={"city"} />
               <Input label={"State"} type={"text"} id={"state"} />
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
