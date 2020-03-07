import React from "react";
import s from "./recipe.module.css";

export default ({ title, calories, image, ingredients }) => (
  <div className={s.recipe}>
    <img className={s.image} src={image} alt="Food" />
    <h1 style={{ textAlign: "center" }}>{title}</h1>
    <strong>Calories: {Math.round(calories)}</strong>
    <ul>
      {ingredients.map(ingredient => (
        <li>{ingredient.text}</li>
      ))}
    </ul>
  </div>
);
