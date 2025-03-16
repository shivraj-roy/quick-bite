import { useContext, useEffect, useState } from "react";
import { currencyFormatter } from "../utilities/formatting";
import { Button } from "../UI/Button";
import { CartContext } from "../context/CartContext";
import useHttp from "../hooks/useHttp";
import ErrorPage from "./ErrorPage";

const config = {};

export const Meals = () => {
   const {
      data: loadedMeal = [],
      isLoading,
      error,
   } = useHttp("http://localhost:3000/meals", config, []);

   const { addItem } = useContext(CartContext);
   const addToCartHandler = (meal) => {
      addItem({
         id: meal.id,
         name: meal.name,
         amount: 1,
         price: meal.price,
      });
   };

   if (isLoading) {
      return <p className="center">Loading...</p>;
   }

   if (error) {
      return <ErrorPage title="An Error Occurred!" message={error} />;
   }

   return (
      <ul id="meals">
         {loadedMeal.map((meal) => (
            <li className="meal-item" key={meal.id}>
               <article>
                  <img
                     src={`http://localhost:3000/${meal.image}`}
                     alt={meal.name}
                  />
                  <div>
                     <h3>{meal.name}</h3>
                     <p className="meal-item-price">
                        {currencyFormatter.format(meal.price)}
                     </p>
                     <p className="meal-item-description">{meal.description}</p>
                  </div>
                  <p className="meal-item-actions">
                     <Button onClick={() => addToCartHandler(meal)}>
                        Add to Cart
                     </Button>
                  </p>
               </article>
            </li>
         ))}
      </ul>
   );
};
