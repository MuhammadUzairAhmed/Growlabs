import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dates';

export const finalizeAccount =(values)=>{
    return{
        type:types.USER_TYPE,
        payload: values
    }
}

   export const FetchSprintData = (lstData,barData,lineData) => dispatch => {
    var data={
        lstData,
        barData,
        lineData
    }
    dispatch({
     type: types.SPRINT_ACTION,
     payload: data
    })
   }


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

export const displayComponent =(actValue)=>{
    return{
        type: 'DISP_COMPONENT',
        payload: actValue
    }
}

export const stopData = (data) =>{
    return {
        type: types.STOP_POSTING,
        payload: data
    }
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

export const BankData = (values) =>{
    return{
        type:types.BANK_DATA,
        payload: values
    }
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
export function backlogWidgetAction(items,id){
    return{
        type:"BACKLOGWIDGET",
        items,
        id
    }
}


export function itemsFetchData(url,action) {
    return (dispatch) => {

        dispatch(itemsIsLoading(true));
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl + url)
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
export function backlogWidget(items,id){
    return (dispatch)=>{
        dispatch(backlogWidgetAction(items,id))
    }
}
