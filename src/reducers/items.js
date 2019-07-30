// DEFAULT STATE 
const defaultGrowLabsStates = {
    NOTIFICATIONS : [],
    BACKLOGS : {},
    FILES : [],
    IS_LOADING : false
}

// LOGIN CONTAINER REDUCER 
export default function itemsData(state = defaultGrowLabsStates, action) {
    switch (action.type){
        case 'NOTIFICATIONS':
        return {
            ...state,
            NOTIFICATIONS : action.NOTIFICATIONS,
         }    
        case 'BACKLOGS':
        return {
            ...state,
            BACKLOGS : action.BACKLOGS,
         }    
        case 'FILES':
        return {
            ...state,
            FILES : action.FILES,
         }   
        
        case 'IS_LOADING':
        return {
            ...state,
            IS_LOADING : action.IS_LOADING,
        } 
        default:
        return state;
    }
}