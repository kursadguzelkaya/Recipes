import {GET_RECIPES,FETCH_RECIPE_SUCCEDED, FETCH_RECIPE_FAILED, LIST_FOR_CALORIES, SORT_CALORIES} from './types';


export const getRecipes = (query) => ({ type: GET_RECIPES, payload: query })

export const catchErrors = (error) => ({ type: FETCH_RECIPE_FAILED, payload: error })

export const loadRecipes = (recipes) => ({ type: FETCH_RECIPE_SUCCEDED, payload: recipes})

export const listCalories = (calories) => ({ type: LIST_FOR_CALORIES, payload: calories })

export const sortCalories = (greating) => ({ type: SORT_CALORIES, payload: greating })


