import React, { useReducer } from 'react';
import ToDoForm from './components/ToDoForm';
import { reducer, initialState } from './reducers/reducer';
import ToDoList from './components/ToDoList';
import './App.css';




function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState);


  

  return (
    <div className="App">
      <h1>MY TO-DO LIST</h1>
      <ToDoForm todoList={state} dispatch={dispatch}/>
      <ToDoList todoList={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
