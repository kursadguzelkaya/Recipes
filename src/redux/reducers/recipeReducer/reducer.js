import {FETCH_RECIPE_SUCCEDED,FETCH_RECIPE_FAILED, GET_RECIPES, LIST_FOR_CALORIES, SORT_CALORIES} from './types';
const INITIAL_STATE = {
    result: [],
    recipes: [],
    err: "",
    loading: false

}
const compareValues = (greating) => {
    return function sorting(a,b) {
        const varA = a.recipe.calories;
        const varB = b.recipe.calories;
    
        let comparison = 0;
        if (varA > varB) {
            comparison = 1
        } else {
            comparison = -1
        }
    
        return comparison*greating;
    }
}


const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_RECIPES:
            return {
                ...state, 
                loading: true
            }
        case FETCH_RECIPE_SUCCEDED:
            return {
                ...state, 
                recipes: action.payload.hits,
                result: action.payload.hits, 
                loading: false
            }
        case FETCH_RECIPE_FAILED:
            return {
                ...state, 
                err: action.payload
            }
        case LIST_FOR_CALORIES:
            return {
                ...state,
                result: [
                    ...state.recipes.filter(recipe => 
                        recipe.recipe.calories < action.payload
                        )
                ]
            }
        case SORT_CALORIES:
            return {
                ...state,
                result: [
                    ...state.result.sort(compareValues(action.payload))
                ]
            }
    }
    return state;
}

export default reducers;