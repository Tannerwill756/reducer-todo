import React, { useState, useReducer } from 'react';
import ToDoForm from './components/ToDoForm';
import { reducer, initialState } from './reducers/reducer';
import ToDoList from './components/ToDoList';
import './App.css';




function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const [ inputText, setInputText ] = useState("");

  const changeHandler = event => {
    setInputText(event.target.value);
}

const submitHandler = event => {
    event.preventDefault();
    setInputText("");
    dispatch({ type: "ADD_TODO", payload: inputText });
}

const clearHandler = event => {
    event.preventDefault();
    event.clear();
}
  

  return (
    <div className="App">
      <h1>MY TO-DO LIST</h1>
      <ToDoForm changeHandler={changeHandler} submitHandler={submitHandler} clearHandler={clearHandler} dispatch={dispatch}/>
      <ToDoList todoList={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
