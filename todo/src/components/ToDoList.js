import React, { useState, useReducer } from 'react';
import reducer from '../reducers/reducer';


function ToDoList () {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    cont [ newToDoItem, setNewToDoItem ] = useState('');

    const handleChanges = e => {
        e.preventDefault();
    }

    return(
        <div>
            <h1>MY TO-DO LIST</h1>
            <form>
                <input />
                <button>add</button>                
            </form>
            <label />
        </div>
    )

}



export default ToDoList;