import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dates';

// example of a thunk using the redux-thunk middleware
export function saveFuelSavings(settings) {
    return function (dispatch) {
        // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
        // in this case at this point we could call a service that would persist the fuel savings
        return dispatch({
            type: types.SAVE_FUEL_SAVINGS,
            dateModified: getFormattedDateTime(),
            settings
        });
    };
}

export function calculateFuelSavings(settings, fieldName, value) {
    return {
        type: types.CALCULATE_FUEL_SAVINGS,
        dateModified: getFormattedDateTime(),
        settings,
        fieldName,
        value
    };
}


export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items,action) {
    return {
        type: action,
        items
    };
}
export function currentStateDataAction(items){
    return{
        type:"BACKLOGCURRENTSTATE",
        items
    }
}
export function activeChatSystemAction(items,action){
    return{
        type:action,
        items
    }
}

export function itemsFetchData(url,action) {
    return (dispatch) => {

        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items,action)))
            .catch(() => dispatch(itemsHasErrored(true)));

    };
}
export function currentStateData(items,action){
    return (dispatch)=>{
        dispatch(currentStateDataAction(items))
    }
}
export function activeChatSystem(items,action){
    return (dispatch)=>{
        dispatch(activeChatSystemAction(items,action))
    }
}