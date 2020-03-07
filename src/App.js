import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Recipe from "./components/Recipe";

function App() {
  const ID = "0d5cc5d4";
  const KEY = "7dc40ea0fb8947cd4f15771445c2d3f1";

  const [recipes, setRecipes] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const submitSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();

    setRecipes(data.hits);
  };
  return (
    <div className="App">
      <Search
        search={search}
        submitSearch={submitSearch}
        setSearch={setSearch}
      />
      {recipes ? (
        recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default App;
