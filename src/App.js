import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Recipe from "./Components/Recipe";

const App = () => {
  const APP_ID = "53feef29";
  const APP_KEY = "36c365bfb7b6e2de2a0eae7e69c49f60";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  //   const data = await response.json()
  //   console.log(data)
  // }

  const getRecipes = async () => {
    try {
      const {
        data: { hits },
      } = await axios.get("https://api.edamam.com/search", {
        params: {
          q: `/${ query }`,
          app_id: APP_ID,
          app_key: APP_KEY,
        },
      });
      setRecipes(hits);
      // console.log(hits);
      //okay lets start
      // steps we will follow
      // create a repo on github
      // push using terminal
      // to know more git commands watch some vids
      // i think we need to start afresh cos there is git in this project so don' want mistakes
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecipes();
    console.log('im running')
  },[query]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  const updateSearch = (e) => {
    setSearch(([e.target.name] = e.target.value));
  };

  return (
    <div className="App">
      <form onSubmit ={getSearch}
        className="search-form">
        <input
          onChange={updateSearch}
          className="search-bar"
          type="text"
          value={search}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
        />
      ))}
        </div>
    </div>
  );
};

export default App;
