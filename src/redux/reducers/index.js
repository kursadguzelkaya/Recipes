import {FETCH_RECIPE_SUCCEDED,FETCH_RECIPE_FAILED, GET_RECIPES} from '../types';
const INITIAL_STATE = {
    recipes: [],
    err: "",
    loading: false

}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_RECIPES:
            return {
                ...state, loading: true
            }
        case FETCH_RECIPE_SUCCEDED:
            return {
                ...state, recipes: action.payload, loading: false
            }
        case FETCH_RECIPE_FAILED:
            return {
                ...state, err: action.payload
            }
        
    }
    return state;
}

export default reducers;