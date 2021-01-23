import React from "react";

const Recipe = ({ title, calories, imgSrc, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => {
          return <li key={imgSrc}>{ingredient.text}</li>;
        })}
      </ol>

      <p>{calories.toFixed(2)} cal</p>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default Recipe;
