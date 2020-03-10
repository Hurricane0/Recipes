import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Recipe from "./components/Recipe";
import ModeButton from "./components/ModeButton";

function App() {
  const ID = "0d5cc5d4";
  const KEY = "7dc40ea0fb8947cd4f15771445c2d3f1";

  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [mode, setMode] = useState(true);

  useEffect(() => {
    const localMode = localStorage.getItem("mode");
    setMode(localMode === "true" ? true : false);
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [query]);

  const submitSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const getRecipes = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
    setIsLoading(false);
  };

  const toggleMode = () => {
    setMode(!mode);
  };
  return (
    <div className={`App ${mode ? "light_app" : "dark_app"}`}>
      <Search
        search={search}
        submitSearch={submitSearch}
        setSearch={setSearch}
        mode={mode}
      />
      <div className={"recipes"}>
        {!isLoading ? (
          recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label + recipe.recipe.calories}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              mode={mode}
            />
          ))
        ) : (
          <span>Loading...</span>
        )}
      </div>
      <ModeButton mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;
