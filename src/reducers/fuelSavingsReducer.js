import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function fuelSavingsReducer(state = initialState.fuelSavings, action) {

    switch (action.type){
        case 'USER_TYPE':
        return{
            ...state,
            user:action.payload
        }
        case 'SPRINT_ACTION':
        return {
            ...state,
            chartValues: action.payload
        }
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
            case 'CHART':
                return {
                    ...state,
                    CHART : action.items,
                }
        case 'MILESTONE':
            return {
                ...state,
                MILESTONE : action.items,
            }
        case 'BACKLOGWIDGET':
            return {
                ...state,
                BACKLOGWIDGET : {boolen:action.items, items:[action.id]},
            }
            
            case 'PROJECTCURRENTCHATID':
                return {
                    ...state,
                    PROJECTCURRENTCHATID : action.items
                }    
             case 'BANK_DATA':
            return {
                ...state,
                bankData : action.payload
            }
            case 'STOP_POSTING':
                return{
                    ...state,
                    stopPosting: action.payload
                }
            case 'DISP_COMPONENT':
                return {
                    ...state,
                    dispComp: action.payload
                }
        default:
            return state;
    }
}
