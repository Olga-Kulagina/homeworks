const initState = {
    isLoading: false
};

export type StateType = {
    isLoading: boolean
}

type setLoadingActionType = {
    type: "SET_LOADING"
    isLoading: boolean
}

type ActionType = setLoadingActionType

export const loadingReducer = (state: StateType = initState, action: setLoadingActionType): StateType => { // fix any
    switch (action.type) {
        case "SET_LOADING": {
            return {...state, isLoading: action.isLoading};
        }
        default:
            return state;
    }
};

export const loadingAC = (isLoading: boolean): setLoadingActionType => {
    return {type: "SET_LOADING", isLoading}
}
