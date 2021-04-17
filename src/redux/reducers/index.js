import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer/reducer';

export default combineReducers({
        recipe: recipeReducer
    });