import { take, call, put, all } from '@redux-saga/core/effects';
import axios from 'axios';

import { GET_RECIPES, FETCH_RECIPE_SUCCEDED, FETCH_RECIPE_FAILED } from '../types';


const APP_ID = "9f178d34";
const APP_KEY = "f7c5251d00d1db301596ede69d69597a";


export function* fetchRecipes(query) {
 
    try {
        const result = yield call(axios, `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        yield put({ type: FETCH_RECIPE_SUCCEDED, payload: result.data });
    } catch (error) {
        yield put({ type: FETCH_RECIPE_FAILED, payload: error});
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