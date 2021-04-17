import { take, call, put, all } from '@redux-saga/core/effects';
import axios from 'axios';
import { getRecipes }from '../apis/recipes';

import { GET_RECIPES, FETCH_RECIPE_SUCCEDED, FETCH_RECIPE_FAILED } from '../reducers/recipeReducer/types';


const APP_ID = "9f178d34";
const APP_KEY = "f7c5251d00d1db301596ede69d69597a";
const URL = "https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}"

export function* fetchRecipes(query) {
 
    try {
        // const result = yield call(axios, `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const result = yield call(getRecipes);
        yield put({ type: FETCH_RECIPE_SUCCEDED, payload: result.data });
        console.log(result.data);
    } catch (error) {
        yield put({ type: FETCH_RECIPE_FAILED, payload: error});
        console.log(error);
    }
    
}

export function* actionWatcher() {
    while(true) {
        const query = yield take(GET_RECIPES);
        yield call(fetchRecipes, query.payload);
    }
}

export function* rootSaga() {
    yield all([
        call(actionWatcher)
    ])
}