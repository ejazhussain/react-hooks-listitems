import * as React from 'react';
import { createContext } from 'react';
import { WebPartContext } from '@microsoft/sp-webpart-base';


interface Actions {
    type: string;
    value: any;
}

type InitialStateType = {
    listItems: any[];
    selectedItem: any;
};

interface InitContextProps {
    spContext: WebPartContext;
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}

// const initialState = {
//     listItems: [],
//     selectedItem: {}
// };

//const ListItemsContext = createContext<InitContextProps>({ state: initialState, dispatch: () => null });

const ListItemsContext = createContext<InitContextProps>(undefined);

export default ListItemsContext;





  




