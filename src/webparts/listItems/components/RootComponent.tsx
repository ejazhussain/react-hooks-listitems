import * as React from 'react';
import { useState, useReducer, useEffect, useMemo } from 'react';
import { IRootComponentProps } from './IRootComponentProps';
import ListItemsContext from '../../../Contexts/ListItemsContext';
import { ListItemsReducer } from '../../../Reducers/ListItemsReducer';

import ListItems from '../components/ListItems/ListItems';
import { SPService } from '../../../Services/SPService';

const RootComponent: React.FC<IRootComponentProps> = (props) => {
  
  const spContext = props.spContext;
  const spService = SPService(spContext);

  //const initialState = useContext(ListItemsContext);  
  const initialState = {
    listItems: [],
    selectedItem: {}
  };

  const [state, dispatch] = useReducer(ListItemsReducer, initialState);

  const getAllItems = async () => {
    const items = await spService.getAllListItems();
    dispatch({
      type: "GET_ALLITEMS",
      payload: items
    });

  };
  useEffect(() => {
    getAllItems();
  }, []);

  const contextValue = useMemo(() => {
    return { spContext, state, dispatch };
  }, [spContext, state, dispatch]);

  return (
    <ListItemsContext.Provider value={contextValue}>
      <ListItems />
    </ListItemsContext.Provider>
  );
};
export default RootComponent;
