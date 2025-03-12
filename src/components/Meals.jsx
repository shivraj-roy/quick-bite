import { useEffect, useState } from "react";
import { currencyFormatter } from "../utilities/formatting";
import { Button } from "../UI/Button";

export const Meals = () => {
   const [loadedMeal, setLoadedMeal] = useState([]);
   useEffect(() => {
      const fetchMeal = async () => {
         try {
            const response = await fetch("http://localhost:3000/meals");
            const meals = await response.json();
            if (!response.ok) {
               throw new Error("Something went wrong!");
            }
            setLoadedMeal(meals);
         } catch (error) {
            console.error(error);
         }
      };

      fetchMeal();
   }, []);

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
                     <Button>Add to Cart</Button>
                  </p>
               </article>
            </li>
         ))}
      </ul>
   );
};
