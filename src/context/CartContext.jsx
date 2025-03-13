import { createContext, useReducer } from "react";

export const CartContext = createContext({
   items: [],
   totalAmount: 0,
   addItem: (item) => {},
   removeItem: (id) => {},
});

const cartReducer = (state, action) => {
   if (action.type === "ADD_ITEM") {
      // This is to find the index of the existing item in the cart...
      const existingCartItemIndex = state.items.findIndex(
         (item) => item.id === action.item.id
      );

      // This is to find the existing item in the cart...
      const existingCartItem = state.items[existingCartItemIndex];

      // This is to update the existing item in the cart...
      let updatedItems;

      if (existingCartItem) {
         const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,
         };
         updatedItems = [...state.items]; // Copy the existing items in the cart...
         updatedItems[existingCartItemIndex] = updatedItem; // Add the updated item to the cart...
      } else {
         updatedItems = state.items.concat(action.item); // Copy the existing items in the cart and add the new item...
      }

      const updatedTotalAmount =
         state.totalAmount + action.item.price * action.item.amount; // Add the new item price to the total amount...
      return {
         items: updatedItems,
         totalAmount: updatedTotalAmount,
      };
   }
   if (action.type === "REMOVE_ITEM") {
      const existingCartItemIndex = state.items.findIndex(
         (item) => item.id === action.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem.amount === 1) {
         updatedItems = state.items.splice(existingCartItemIndex, 1);
      } else {
         const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount - 1,
         };
         updatedItems = [...state.items];
         updatedItems[existingCartItemIndex] = updatedItem;
      }
      const updatedTotalAmount = state.totalAmount - existingCartItem.price;

      return {
         items: updatedItems,
         totalAmount: updatedTotalAmount,
      };
   }
   return {
      items: [],
      totalAmount: 0,
   };
};
export const CartContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(cartReducer, {
      items: [],
      totalAmount: 0,
   });
   const addItemToCartHandler = (item) => {
      dispatch({ type: "ADD_ITEM", item: item });
   };
   const removeItemFromCartHandler = (id) => {
      dispatch({ type: "REMOVE_ITEM", id: id });
   };
   const cartContext = {
      items: state.items,
      totalAmount: state.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
   };
   console.log(cartContext);

   return (
      <CartContext.Provider value={cartContext}>
         {children}
      </CartContext.Provider>
   );
};
