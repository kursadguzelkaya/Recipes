import './App.css';
import React,{useState, useEffect} from 'react';
import Recipe from './Recipe';

function App() {

  const APP_ID = "9f178d34";
  const APP_KEY = "f7c5251d00d1db301596ede69d69597a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  
  useEffect(() => {
    getRecipes();
  },[query])

  const updateSearch = e => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  const updateQuery = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
    console.log(query);
  }

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }



  return (
    <div className="App">
      <form className="search-form" onSubmit={updateQuery}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-btn" type="submit" >Search </button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
