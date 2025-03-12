import { useEffect, useState } from "react";

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
            <li key={meal.id}>
               <h3>{meal.name}</h3>
               <p>{meal.description}</p>
               <p>{meal.price}</p>
            </li>
         ))}
      </ul>
   );
};
