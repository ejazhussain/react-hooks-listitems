
type InitialStateType = {
    listItems: any[];
    selectedItem: any;
};

export const ListItemsReducer = (state: InitialStateType, action: any) => {
    
    switch (action.type) {
        case "GET_ALLITEMS":

            return {
                ...state,
                listItems: action.payload
            };
        case "SET_SELECTEDITEM":
            
            return {
                ...state,
                selectedItem: action.payload
            };
        default:
            return state;
    }

};