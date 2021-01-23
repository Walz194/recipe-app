import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Recipe from "./Recipe";

const App = () => {
  const APP_KEY = "e899907ed152e7197d224aa23737a543	";
  const APP_ID = "86bd5fcc";

  const [recipes, setRecipes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((response) => {
        console.log(response);
        setRecipes(response.data.hits);
      })
      .catch((err) => console.log(err));
  }, [query]);

  const inputChangedHandler = (e) => {
    setInputText(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(inputText);
    setInputText("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          onChange={inputChangedHandler}
          value={inputText}
        />
        <button className="search-button" type="submit">
          SEARCH
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={Math.random() * 1000}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              imgSrc={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
