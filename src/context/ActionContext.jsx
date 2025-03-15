import { createContext, useState } from "react";

const ActionContext = createContext({
   action: "",
   showCart: () => {},
   hideCart: () => {},
   showCheckout: () => {},
   hideCheckout: () => {},
});

export const ActionContextProvider = ({ children }) => {
   const [actionState, setActionState] = useState("");
   const showCart = () => {
      setActionState("cart");
   };
   const hideCart = () => {
      setActionState("");
   };
   const showCheckout = () => {
      setActionState("checkout");
   };
   const hideCheckout = () => {
      setActionState("");
   };
   const actionCtx = {
      action: actionState,
      showCart,
      hideCart,
      showCheckout,
      hideCheckout,
   };
   return (
      <ActionContext.Provider value={actionCtx}>
         {children}
      </ActionContext.Provider>
   );
};

export default ActionContext;
