import React, { useEffect, useState } from "react";
import classes from "./AvailableMenu.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMenu = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(); 

  useEffect(() => {
    const fetchRequest = async () => {
      setIsLoading(true);

      const response = await fetch(
        "https://recruitment-5b9b5-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went Wrong!");
      }
      const data = await response.json();
      const mealsData = Object.entries(data).map(([key, value]) => {
        const {name, description, price} = value;
        return {
          id: key,
          name,
          description,
          price,
        };
      // }
      });

      console.log(mealsData.splice(0,1));
      setMeals(mealsData);
      setIsLoading(false);
    };

    fetchRequest().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem //{...meal}
      id={meal.id} 
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMenu;
