import React, { useState } from 'react';
import reducer from '../reducers/reducer';


function ToDoForm (props) {

    const { inputText, setInputText } = useState("");

    const changeHandler = event => {
        event.preventDefault();
        props.dispatch({
            type: "UPDATE_TODO", payload: event.target.value})
    }

    const submitHandler = event => {
        event.preventDefault();
        props.dispatch({
            type:'ADD_TODO',
            payload: { item: inputText, completed: false, id: Date.now() }
        })
    }

    const clearHandler = event => {
        event.preventDefault();
        event.clear();
    }

    return(
        <div>
                  
            <form onSubmit={submitHandler}>
                
                <input type='text' value={inputText} name="inputText" onChange={changeHandler}/>
                <button type='submit'>add</button> 
                <button onClick={clearHandler}>clear</button>               
            </form>
            
        </div>
    )

}



export default ToDoForm;