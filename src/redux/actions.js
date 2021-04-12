import axios from 'axios';
import {GET_RECIPES,FETCH_RECIPE_SUCCEDED, FETCH_RECIPE_FAILED} from './types';

const APP_ID = "9f178d34";
const APP_KEY = "f7c5251d00d1db301596ede69d69597a";
const query = "chicken";


export const getRecipes = (query) => ({ type: GET_RECIPES, payload: query })

export const catchErrors = (error) => ({ type: FETCH_RECIPE_FAILED, payload: error })

export const loadRecipes = (recipes) => ({ type: FETCH_RECIPE_SUCCEDED, payload: recipes})