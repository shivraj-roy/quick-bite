export const Button = ({ children, textOnly, buttonClass, ...props }) => {
   let buttonStyle = textOnly ? "text-button" : "button";
   buttonStyle += " " + buttonClass;
   return (
      <button {...props} className={buttonStyle}>
         {children}
      </button>
   );
};
