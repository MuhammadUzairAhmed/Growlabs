import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function fuelSavingsReducer(state = initialState.fuelSavings, action) {

    switch (action.type){
        case 'NOTIFICATIONS':
            return {
                ...state,
                NOTIFICATIONS : action.items,
            }
        case 'USER_DETAILS':
            return {
                ...state,
                USER_DETAILS : action.items,
            }
        case 'BACKLOG':
            return {
                ...state,
                BACKLOG : action.items,
            }
        case 'BACKLOGCURRENTSTATE':
            return {
                ...state,
                BACKLOGCURRENTSTATE : action.items,
            }
        case 'FINANCIAL':
            return {
                ...state,
                FINANCIAL : action.items,
            }
        case 'FILES':
            return {
                ...state,
                FILES : action.items,
            }
        case 'ACTIVECHAT':
            return {
                ...state,
                ACTIVEWIDGET : action.items,
            }
        case 'CHAT':
            return {
                ...state,
                CHAT : action.items,
            }
        case 'MILESTONE':
            return {
                ...state,
                MILESTONE : action.items,
            }
        default:
            return state;
    }
}
