export function mesuresHasErrored(bool){
    return{
        type: 'MESURES_HAS ERRORED',
        hasErrored:bool
    };
}


export function mesureIsLoading(bool){
    return{
        type: 'MESURES_IS_LOADING',
        isLoading: bool
    };
}

export function mesuresFetchDataSuccess(mesures){
    return{
        type: 'MESURES_FETCH_DATA_SUCCESS',
        mesures
    }
}