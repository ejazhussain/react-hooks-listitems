import * as React from 'react';
import { createContext } from 'react';



type InitialStateType = {
  todos: any[],
  currentTodo: {}
};


// const initialState = {
//   todos: [],
//   currentTodo: {}
// };



const TodosContext = createContext<InitialStateType>({
  todos: [],
  currentTodo: {}
});

export default TodosContext;





