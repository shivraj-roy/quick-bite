import Header from "./components/Header";
import { Meals } from "./components/Meals";
import { CartContextProvider } from "./context/CartContext";

function App() {
   return (
      <>
         <CartContextProvider>
            <Header />
            <Meals />
         </CartContextProvider>
      </>
   );
}

export default App;
