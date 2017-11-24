
export function mesuresHasErrored(state=false, action){
    switch (action.type){
        case 'MESURES_HAS ERRORED':
        return action.hasErrored;
default :
    return state;
    }
}



export function mesuresIsLoading(state=false, action){
    switch (action.type){
        case 'MESURES_IS_LOADING':
        return action.isLoading;
        default:
        return state;
    }
}

export function mesures(state=[], action){
    switch (action.type){
        case 'MESURES_FETCH_DATA_SUCCESS':
        return action.mesures;
        default:
        return state;
    }
}