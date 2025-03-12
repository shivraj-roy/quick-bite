import LOGO from "../assets/logo.jpg";

const Header = () => {
   return (
      <header id="main-header">
         <div id="title">
            <img src={LOGO} alt="Quick Meal Logo icon..." />
            <h1>Quick Meal</h1>
         </div>
         <nav>
            <button>Cart (0)</button>
         </nav>
      </header>
   );
};
export default Header;
