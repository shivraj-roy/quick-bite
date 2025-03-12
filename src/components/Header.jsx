import LOGO from "../assets/logo.jpg";
import { Button } from "../UI/Button";

const Header = () => {
   return (
      <header id="main-header">
         <div id="title">
            <img src={LOGO} alt="Quick Meal Logo icon..." />
            <h1>Quick Meal</h1>
         </div>
         <nav>
            <Button textOnly>Cart (0)</Button>
         </nav>
      </header>
   );
};
export default Header;
