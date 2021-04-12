import './App.css';
import React,{useState, useEffect} from 'react';
import Recipe from './Recipe';

import { connect, useDispatch } from 'react-redux';
import { getRecipes } from './redux/actions'

function App(props) {
  
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const dispatch = useDispatch();
  useEffect(() => {
      //  props.getRecipes()
      dispatch(getRecipes(query));
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

  // const getRecipes = () =>{
  //   // const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //   // const data = await response.json();
  //   // console.log(data.hits);
  //   // setRecipes(data.hits);
  //   axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  //     .then(res => {
  //       console.log(res.data.hits);
  //       setRecipes(res.data.hits);})
  //     .catch(err => console.log(err))
  // }

  return (
    <div className="App">
      <form className="search-form" onSubmit={updateQuery}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-btn" type="submit" >Search </button>
      </form>
      {props.recipes.hits.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
      ))} 
    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getRecipes })(App);
