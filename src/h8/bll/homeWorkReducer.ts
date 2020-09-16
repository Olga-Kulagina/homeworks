type UserType = {
    _id: number
    name: string
    age: number
}
type StateType = Array<UserType>

export const homeWorkReducer = (state: StateType, action: any): any => {
    switch (action.type) {
        case "sort": {
            if(action.payload === 'up') {
                let newState = [...state];
                newState.sort((a: any, b: any) => a.name > b.name ? 1 : -1);
                return newState;
            }
            if (action.payload === 'down') {
                let newState = [...state];
                newState.sort((a: any, b: any) => a.name > b.name ? 1 : -1);
                newState.reverse();
                return newState;
            } break;
        }
        case "check":
            return state.filter(user => user.age > action.payload);

        default:
            return state;
    }
};