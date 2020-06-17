
type InitialStateType = {
    todos: any,
    currentTodo: {}
};

export const TodosReducer = (state: InitialStateType, action:any) => {
    
    switch (action.type) {
        case "GET_ALLITEMS":

            return {
                ...state,
                todos: action.payload
            };        
        default:
            return state;
    }
};
