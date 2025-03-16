import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import Header from "./components/Header";
import { Meals } from "./components/Meals";
import { ActionContextProvider } from "./context/ActionContext";
import { CartContextProvider } from "./context/CartContext";

function App() {
   return (
      <>
         <ActionContextProvider>
            <CartContextProvider>
               <Header />
               <Meals />
               <Cart />
               <CheckOut />
            </CartContextProvider>
         </ActionContextProvider>
      </>
   );
}

export default App;
